import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Course } from 'src/courses/schemas/course.schema';

export type VideoDocument = Video & Document;

@Schema({ timestamps: true })
export class Video {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  source: string;

  @Prop()
  score: string;

  @Prop({
    type: mongoose.Types.ObjectId,
    ref: 'Course',
  })
  courseId: Course;
}

export const VideoSchema = SchemaFactory.createForClass(Video);
