import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  // UsePipes,
  // ValidationPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LoggerInterceptor } from 'src/utils/logger.interceptor';

import { VideosService } from './videos.service';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';

@ApiTags('videos')
@UseInterceptors(LoggerInterceptor)
@Controller('videos')
// @UsePipes(new ValidationPipe())
export class VideosController {
  constructor(private readonly videosService: VideosService) {}

  @Post()
  create(@Body() createVideoDto: CreateVideoDto) {
    return this.videosService.create(createVideoDto);
  }

  @Get()
  findAll() {
    return this.videosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.videosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVideoDto: UpdateVideoDto) {
    return this.videosService.update(+id, updateVideoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.videosService.remove(+id);
  }
}
