import { IsString, IsNotEmpty, IsBoolean, IsEmpty, IsOptional } from 'class-validator';

//import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly firstName: string;

  @IsString()
  @IsNotEmpty()
  readonly lastName: string;

  @IsBoolean()
  @IsOptional()
  readonly isActive: boolean;
}
