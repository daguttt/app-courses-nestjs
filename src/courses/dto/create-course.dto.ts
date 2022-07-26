import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUrl, Length } from 'class-validator';

export class CreateCourseDto {
  @ApiProperty({
    minimum: 1,
  })
  @Length(1, 50)
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  price: number;

  @ApiProperty()
  @IsNotEmpty()
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsUrl()
  cover: string;
}
