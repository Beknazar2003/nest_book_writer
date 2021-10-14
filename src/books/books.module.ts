import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from "./books.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Books } from "./books.model";
import { AuthModule } from "../auth/auth.module";

@Module({
  controllers: [BooksController],
  providers: [BooksService],
  imports: [
    AuthModule,
    SequelizeModule.forFeature([Books])
  ]
})
export class BooksModule {}
