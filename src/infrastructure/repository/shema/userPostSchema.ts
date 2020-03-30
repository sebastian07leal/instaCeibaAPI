import { Schema } from 'mongoose';

export const UserPostSchema = new Schema({
  title: String,
  likes: Number,
  comment: Array,
  url: String,
});