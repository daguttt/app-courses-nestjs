import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
  // ParseIntPipe,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { SlugPipe } from './pipes/slug.pipe';
@ApiBearerAuth()
@ApiTags('courses')
@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Post()
  create(@Body() createCourseDto: CreateCourseDto) {
    const { price } = createCourseDto;
    if (price)
      throw new HttpException(
        'El precio es demasiado alto',
        HttpStatus.FORBIDDEN,
      );
    return this.coursesService.create(createCourseDto);
  }

  @Get()
  findAll() {
    return this.coursesService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id', ParseIntPipe) id: number) {
  //   return this.coursesService.findOne(id);
  // }
  // @Get(':id')
  // findOne(
  //   @Param(
  //     'id',
  //     new ParseIntPipe({
  //       errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE,
  //     }),
  //   )
  //   id: number,
  // ) {
  //   return this.coursesService.findOne(id);
  @Get(':title')
  findOne(
    @Param('title', new SlugPipe())
    title: string,
  ) {
    console.log('Search by title: ...', { title });
    return this.coursesService.findOne(2);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
    return this.coursesService.update(+id, updateCourseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coursesService.remove(+id);
  }
}
