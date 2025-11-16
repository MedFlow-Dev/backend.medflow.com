import { IsNotEmpty, IsString } from 'class-validator';

export class UpdatePrescriptionDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  appointement_id: number;
}
