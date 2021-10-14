import { BelongsTo, Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Chapters } from "../chapters/chapter.model";
import { User } from "../users/users.model";

class BooksCreationsAttrs{
  title: string
  userId: number
}

@Table({ tableName: "nest_books" })
export class Books extends Model<Books, BooksCreationsAttrs> {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id: number;
  @Column({ type: DataType.STRING, allowNull: false })
  title: string;

  @HasMany(() => Chapters, 'bookId')
  chapters: Chapters[]

  @BelongsTo(() => User, 'userId')
  users: User
}