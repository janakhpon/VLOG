import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { JwtService } from '@nestjs/jwt';
import { PasswordService } from './auth/password/password.service'
import { UserEntity } from './entities/user.entity'
import { User, RespToken } from './interfaces/user.interface'
import { UserSignupDTO, UserSigninDTO } from './dto/user.dto'

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly UserRepository: Repository<UserEntity>,
        private PasswordService: PasswordService,
        private jwtService: JwtService,
    ) { }

    async signup(user: UserSignupDTO): Promise<User> {
        const uexist = await this.UserRepository.findOne({ email: user.email })
        if (uexist) {
            throw new UnauthorizedException(
                `${user.email} is unavailable!`,
            );
        }
        const ePass = await this.PasswordService.hashPassword(user.password)
        const resp = await this.UserRepository.save({
            ...user,
            password: ePass
        })
        return resp
    }

    async signin(user: UserSigninDTO): Promise<RespToken> {
        const uexist = await this.UserRepository.findOne({ email: user.email })
        if (!uexist) {
            throw new UnauthorizedException(`No user found with ${user.email}!`)
        }
        const valid = await this.PasswordService.comparePassword(user.password, uexist.password)
        if (valid) {
            const token = await this.jwtService.signAsync({ email: uexist.email, id: uexist.id }, { expiresIn: '1d' },)
            return { statusCode: 200, token }
        } else {
            throw new UnauthorizedException('Invalid Password!')
        }
    }

    async validateUserByEmail(email: string): Promise<boolean> {
        const user = await this.UserRepository.findOne({ email: email })
        if (user) {
            return true;
        } else {
            return false;
        }
    }
}
