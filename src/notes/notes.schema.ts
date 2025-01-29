import * as mongoose from 'mongoose';

export const NoteSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export interface Note extends mongoose.Document {
  title: String;
  description: String;
}
