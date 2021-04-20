import { IsEmail, IsString, MinLength } from 'class-validator';

export class LoginDto {
  @IsString()
  readonly username!: string;

  @IsString()
  @MinLength(6)
  readonly password!: string;
}

export class RegisterDto {
  @IsString()
  readonly username!: string;

  @IsEmail()
  readonly email!: string;

  @MinLength(6)
  readonly password!: string;
}
