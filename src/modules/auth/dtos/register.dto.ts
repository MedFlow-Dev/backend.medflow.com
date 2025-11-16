import {
  IsEmail,
  IsString,
  MinLength,
  IsEnum,
  IsOptional,
} from 'class-validator';
import { GenderEnum } from '@prisma/client';
import { RoleEnum } from '../../../common/enums/role.enum';

export class RegisterDto {
  @IsString()
  @MinLength(2)
  firstname: string;

  @IsString()
  @MinLength(2)
  lastname: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsEnum(GenderEnum)
  gender: GenderEnum;

  @IsOptional()
  @IsString()
  phone_number?: string;

  @IsOptional()
  @IsString()
  picture?: string;

  @IsOptional()
  @IsString()
  doctor_speciality?: string;

  @IsString()
  role: RoleEnum;
}
