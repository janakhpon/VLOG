import { Body, Controller, Post, Get, UseGuards, Request } from '@nestjs/common';
import { User, RespToken } from './interfaces/user.interface'
import { UserService } from './user.service'
import { UserSignupDTO, UserSigninDTO } from './dto/user.dto'
import { AuthGuard } from '@nestjs/passport'

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }
    @Post('register')
    async register(@Body() user: UserSignupDTO): Promise<User> {
        return await this.userService.signup(user);
    }
    @Post('login')
    async login(@Body() user: UserSigninDTO): Promise<RespToken> {
        return await this.userService.signin(user);
    }
    @Get('me')
    @UseGuards(AuthGuard('jwt'))
    async profile(@Request() req) {
        return req.user;
    }
}
