import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Note } from './notes.schema';
import ApiResponse from 'src/utils/ApiResponse';

@Injectable()
export class NotesService {
  constructor(@InjectModel('Note') private readonly notesModel: Model<Note>) {}

  async createNote(payload) {
    if (!payload?.title) {
      return new ApiResponse(false, 200, 'Title is required', null);
    }

    try {
      const resp = await new this.notesModel({
        title: payload.title,
        description: payload?.description ?? '',
      }).save();
      return new ApiResponse(true, 200, 'Note saved successfully', resp);
    } catch (err: any) {
      return new ApiResponse(false, 200, 'Unable to create note', null);
    }
  }

  async getAllNotes() {
    const resp = await this.notesModel.find().exec();
    return new ApiResponse(true, 200, `Found ${resp.length} note(s)`, resp);
  }

  async getNoteById(noteId: string) {
    try {
      const resp = await this.notesModel.findOne({ _id: noteId }).exec();

      if (resp) {
        return new ApiResponse(true, 200, 'Note found', resp);
      } else {
        return new ApiResponse(false, 200, 'Note not found', null);
      }
    } catch (err: any) {
      return new ApiResponse(false, 200, 'Note not found', null);
    }
  }

  async updateNoteById(noteId: string, body: any) {
    try {
      const resp = await this.notesModel
        .updateOne(
          { _id: noteId },
          {
            ...(body?.title && { title: body.title }),
            ...(body?.description && { description: body.description }),
          },
        )
        .exec();

      if (resp.matchedCount == 0) {
        return new ApiResponse(false, 200, 'Note note found', null);
      } else {
        return new ApiResponse(true, 200, 'Note updated successfully', null);
      }
    } catch (err: any) {
      return new ApiResponse(false, 200, 'Note note found', null);
    }
  }

  async deleteNoteById(noteId: string) {
    try {
      const resp = await this.notesModel.deleteOne({ _id: noteId }).exec();

      if (resp.deletedCount == 0) {
        return new ApiResponse(false, 200, 'Note note found', null);
      } else {
        return new ApiResponse(true, 200, 'Note deleted successfully', null);
      }
    } catch (err: any) {
      return new ApiResponse(false, 200, 'Note note found', null);
    }
  }
}
