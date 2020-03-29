import { Schema } from 'mongoose';

export const UserCountSchema = new Schema({
  title: String,
  likes: Number,
  comment: Array,
  url: String,
});