import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateClinicDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsNumber()
  rooms_number: number;
  services: number[];
  appointements: number[];
  users: number[];
}
