import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { User } from 'src/users/schemas/user.schema';

export type CourseDocument = Course & Document;

@Schema({ timestamps: true })
export class Course {
  @Prop({
    required: true,
  })
  title: string;

  @Prop()
  price: string;

  @Prop()
  description: string;

  @Prop()
  cover: string;

  @Prop({
    type: mongoose.Types.ObjectId,
    ref: 'User',
  })
  authorId: User;
}

export const CourseSchema = SchemaFactory.createForClass(Course);
