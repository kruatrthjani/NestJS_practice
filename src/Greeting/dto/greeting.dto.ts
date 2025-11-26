import { IsString,IsNumber,MinLength, IsEmail } from "class-validator";

export class GreetingDto{
    @IsEmail()
    email:string;
    @IsString()
    @MinLength(3)
    name:string;
}