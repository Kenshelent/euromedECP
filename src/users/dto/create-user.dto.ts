import { IsInt, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  surname: string;

  @IsString()
  firstName: string;

  @IsString()
  middleName: string;

  @IsInt()
  result: number;
}
