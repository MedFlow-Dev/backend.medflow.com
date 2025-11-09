import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { GenderEnum } from '../../../common/enums/gender.enum';
import { RoleEnum } from '../../../common/enums/role.enum';

export class UserDto {
  id: number;

  @IsString()
  @IsNotEmpty()
  firstname: string;

  @IsString()
  @IsNotEmpty()
  lastname: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  picture: string | null;

  @IsOptional()
  @IsString()
  phone_number: string | null;

  @IsOptional()
  doctor_speciality: string | null;

  @IsNotEmpty()
  @IsEnum(GenderEnum)
  gender: GenderEnum;

  @IsNotEmpty()
  @IsEnum(RoleEnum)
  role: RoleEnum;
}
