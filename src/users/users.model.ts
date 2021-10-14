import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Books } from "../books/books.model";

class UserCreationAttrs{
  name: string
  nickName: string
  password: string
}

@Table({tableName: 'nest_users'})
export class User extends Model<User, UserCreationAttrs>{
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number

  @Column({type: DataType.STRING, unique: true, allowNull: false})
  name: string

  @Column({type: DataType.STRING})
  nickName: string

  @Column({type: DataType.STRING, allowNull: false})
  password: string

  @HasMany(() => Books, 'userId')
  books: Books[]
}
