import {
    IsNotEmpty,
    IsString,
    IsEmail
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger'

export class UserSignupDTO {
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    readonly name: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    @ApiProperty()
    readonly email: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    readonly password: string;
}

export class UserSigninDTO {
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    @ApiProperty()
    readonly email: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    readonly password: string;
}