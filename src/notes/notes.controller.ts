import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { NotesService } from './notes.service';

@Controller('api/notes')
export class NotesController {
  constructor(private readonly NoteService: NotesService) {}

  @Post('')
  async newNote(@Body() reqBody: any) {
    return await this.NoteService.createNote(reqBody);
  }

  @Get('')
  async getNote() {
    return this.NoteService.getAllNotes();
  }

  @Put('/:id')
  async updateNote(@Param('id') noteId: string, @Body() reqBody: any) {
    return this.NoteService.updateNoteById(noteId, reqBody);
  }

  @Delete('/:id')
  async deleteNote(@Param('id') noteId: string) {
    return this.NoteService.deleteNoteById(noteId);
  }
}
