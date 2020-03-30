import { Document } from 'mongoose';

export interface UserPostEntity extends Document {
  name: String,
  cash: Number,
  productUser: Array<string>,
  url: String
}