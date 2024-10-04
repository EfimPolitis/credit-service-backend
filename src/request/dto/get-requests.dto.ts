import { IsDateString, IsString } from 'class-validator';

export class getRequestsDto {
  @IsString()
  name: string;

  @IsString()
  surname: string;

  @IsDateString()
  @IsString()
  birthDate: string;
}
