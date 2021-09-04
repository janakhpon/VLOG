import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { UserService } from '../../user.service'

@Injectable()
export class JwtStrategyService extends PassportStrategy(Strategy) {
    constructor(private userService: UserService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: "helloxyz!",
        });
    }
    async validate(payload: any) {
        const isValidated = await this.userService.validateUserByEmail(payload.email);
        if (isValidated) {
            return { userId: payload.id, email: payload.email };
        } else {
            throw new UnauthorizedException('UnAuthorized');
        }
    }
}

