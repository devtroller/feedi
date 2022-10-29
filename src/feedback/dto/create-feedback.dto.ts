import { IsString, IsNotEmpty } from 'class-validator';

export class CreateFeedbackDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  readonly description: string;

  @IsString()
  @IsNotEmpty()
  readonly createBy: string;
}
