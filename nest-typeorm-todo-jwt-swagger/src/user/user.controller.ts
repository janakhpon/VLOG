import { Body, Controller, Post, Get, UseGuards, Request } from '@nestjs/common';
import { User, RespToken } from './interfaces/user.interface'
import { UserService } from './user.service'
import { UserSignupDTO, UserSigninDTO } from './dto/user.dto'
import { AuthGuard } from '@nestjs/passport'
import {
    ApiTags,
    ApiOkResponse,
    ApiCreatedResponse,
    ApiForbiddenResponse,
    ApiUnauthorizedResponse,
    ApiBearerAuth,
} from '@nestjs/swagger';

@Controller('user')
@ApiTags('user')
export class UserController {
    constructor(private userService: UserService) { }
    @Post('register')
    @ApiCreatedResponse({ description: 'Your account is registered!' })
    @ApiForbiddenResponse({ description: 'Forbidden' })
    async register(@Body() user: UserSignupDTO): Promise<User> {
        return await this.userService.signup(user);
    }
    @Post('login')
    @ApiOkResponse({ description: 'Signed in successfully' })
    @ApiForbiddenResponse({ description: 'Forbidden' })
    async login(@Body() user: UserSigninDTO): Promise<RespToken> {
        return await this.userService.signin(user);
    }
    @Get('me')
    @UseGuards(AuthGuard('jwt'))
    @ApiBearerAuth()
    @ApiOkResponse({ description: '200' })
    @ApiUnauthorizedResponse({ description: 'UnAuthorized' })
    async profile(@Request() req) {
        return req.user;
    }
}
