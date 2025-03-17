import { Expose } from "class-transformer";
import { IsEmail, IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class LoginUserDto {
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    readonly email: string;
    
    @IsNotEmpty()
    @IsString()
    readonly password: string;
}

export class UserDto {
    @Expose()
    readonly email: string;
    
    @Expose()
    readonly name: string;
}