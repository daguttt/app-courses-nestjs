import { IsNotEmpty, IsUrl, Length } from 'class-validator';

export class CreateVideoDto {
  @Length(3, 50)
  @IsNotEmpty()
  title: string;

  @Length(5, 50)
  @IsNotEmpty()
  description: string;

  @IsUrl()
  @IsNotEmpty()
  src: string;
}
