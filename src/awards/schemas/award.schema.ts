import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { User } from 'src/users/schemas/user.schema';

export type AwardDocument = Award & Document;

@Schema({ timestamps: true })
export class Award {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop({
    type: mongoose.Types.ObjectId,
    ref: 'User',
  })
  userId: User;
}

export const AwardSchema = SchemaFactory.createForClass(Award);
