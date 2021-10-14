import { Module } from '@nestjs/common';
import { SequelizeModule } from "@nestjs/sequelize";
import { ChaptersController } from "./chapters.controller";
import { ChaptersService } from "./chapters.service";
import { Chapters } from "./chapter.model";
import { AuthModule } from "../auth/auth.module";

@Module({
  controllers: [ChaptersController],
  providers: [ChaptersService],
  imports: [
    AuthModule,
    SequelizeModule.forFeature([Chapters])
  ]
})
export class ChaptersModule {}
