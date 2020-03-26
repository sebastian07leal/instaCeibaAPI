import { Schema } from 'mongoose';

export const UserCountSchema = new Schema({
  name: String,
  cash: Number,
  productUser: [],
});