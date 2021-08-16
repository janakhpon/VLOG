import {
    IsNotEmpty,
    IsString,
    IsEmail
} from 'class-validator';

export class UserSignupDTO {
    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @IsNotEmpty()
    @IsString()
    readonly password: string;
}


export class UserSigninDTO {
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @IsNotEmpty()
    @IsString()
    readonly password: string;
}