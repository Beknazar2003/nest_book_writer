import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';
import { ConfigModule } from "@nestjs/config";
import { User } from "./users/users.model";
import { BooksModule } from './books/books.module';
import { ChaptersModule } from './chapters/chapters.module';
import { Chapters } from "./chapters/chapter.model";
import { Books } from "./books/books.model";
import { AuthModule } from './auth/auth.module';


@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    })
    ,
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: 5432,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      models: [User, Books, Chapters],
      autoLoadModels: true
    }),
    UsersModule,
    BooksModule,
    ChaptersModule,
    AuthModule
  ]
})

export class AppModule {}