import { Module } from '@nestjs/common';
import { NotesController } from './notes.controller';
import { NotesService } from './notes.service';
import { MongooseModule } from '@nestjs/mongoose';
import { NoteSchema } from './notes.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Note', schema: NoteSchema }])],
  controllers: [NotesController],
  providers: [NotesService],
})
export class NotesModule {}
