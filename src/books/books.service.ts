import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { Books } from "./books.model";
import { CreateBooksDto } from "./dto/create-books.dto";

@Injectable()
export class BooksService {
  constructor(@InjectModel(Books) private booksRepository: typeof Books) {}

  async createBook(dto: CreateBooksDto, id){
    const book = await this.booksRepository.create({ ...dto, userId: id })
    return book
  }
}
