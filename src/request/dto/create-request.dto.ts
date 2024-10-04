import { IsDateString, IsNumber, IsString } from 'class-validator';

export class CreateRequestDto {
  @IsString()
  name: string;

  @IsString()
  surname: string;

  @IsString()
  @IsDateString()
  birthDate: string;

  @IsNumber()
  amount: string;

  @IsString()
  purpose: string;
}
