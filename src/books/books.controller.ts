import { Body, Controller, Post, Request, UseGuards } from "@nestjs/common";
import { BooksService } from "./books.service";
import { CreateBooksDto } from "./dto/create-books.dto";
import { JwtAuthGuard } from "../auth/jwt-auth.quard";

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() bookDto: CreateBooksDto, @Request() req){
    return this.booksService.createBook(bookDto, req.user.id)
  }
}
