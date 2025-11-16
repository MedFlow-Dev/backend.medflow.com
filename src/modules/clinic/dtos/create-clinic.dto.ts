import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateClinicDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsNumber()
  rooms_number: number;
  services: number[];
  receptionist_id: number;
  appointements: number[];
  users: number[];
}
