import { Body, Controller, Post } from "@nestjs/common";
import { CreateChapterDto } from "./dto/create-chapter";
import { ChaptersService } from "./chapters.service";

@Controller('chapter')
export class ChaptersController {
  constructor(private chaptersService: ChaptersService) {}

  @Post()
  create(@Body() chapterDto: CreateChapterDto){
    return this.chaptersService.createChapter(chapterDto)
  }

}