import {
  IsEmail,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  firstname: string;

  @IsString()
  @IsOptional()
  lastname: string;

  @IsOptional()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  picture?: string;

  @IsOptional()
  @IsString()
  phone_number?: string;

  @IsOptional()
  doctor_speciality?: string;

  @IsOptional()
  password: string;
}
