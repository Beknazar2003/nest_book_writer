import { BelongsTo, Column, DataType, Model, Table } from "sequelize-typescript";
import { Books } from "../books/books.model";

class ChaptersCreationsAttrs{
  title: string
  text: string
  bookId: number
}

@Table({ tableName: "nest_chapters" })
export class Chapters extends Model<Chapters, ChaptersCreationsAttrs> {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id: number;
  @Column({ type: DataType.STRING, allowNull: false })
  title: string;
  @Column({ type: DataType.STRING})
  text: string;

  @BelongsTo(() => Books, 'bookId')
  books: Books
}