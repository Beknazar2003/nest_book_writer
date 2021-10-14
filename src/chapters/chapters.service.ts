import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { Chapters } from "./chapter.model";
import { CreateChapterDto } from "./dto/create-chapter";

@Injectable()
export class ChaptersService {
  constructor(@InjectModel(Chapters) private chapterRepository: typeof Chapters) {}

  async createChapter(dto: CreateChapterDto){
    const chapters = await this.chapterRepository.create(dto)
    return chapters
  }
}
