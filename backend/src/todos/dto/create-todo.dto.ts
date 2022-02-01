import { IsBoolean, IsString } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  readonly title: string;

  @IsBoolean()
  readonly status: boolean;
}
