import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: 'Name is required' })
  public name: string;

  @IsEmail()
  public email: string;

  @IsString()
  @IsNotEmpty()
  @Length(3, 20, { message: 'Passowrd has to be at between 3 and 20 chars' })
  public password: string;
}
