import { IsString, IsNotEmpty } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateFeedbackDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'esto es un titulo' })
  readonly title: string;

  @IsString()
  readonly description: string;

  @IsString()
  @IsNotEmpty()
  readonly createBy: string;
}
