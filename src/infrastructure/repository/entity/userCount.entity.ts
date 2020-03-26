import { Document } from 'mongoose';

export interface UserCountEntity extends Document {
  name: String,
  cash: Number,
  productUser: [],
}