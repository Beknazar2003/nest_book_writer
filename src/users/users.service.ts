import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { User } from "./users.model";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}

  async createUser(dto: CreateUserDto){
    const user = await this.userRepository.create(dto)
    return user
  }
  async getUserByName(name: string) {
    const user = await this.userRepository.findOne({where: {name}, include: {all: true}})
    return user;
  }

}
