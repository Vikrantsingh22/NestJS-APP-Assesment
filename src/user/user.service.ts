import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
/// this is the injectable class for the User entity
// this is injectable dependency

// CRUD operations for the User entity using the PrismaClient instance

// NotfoundException is imported from the @nestjs/common package to handle the error
// CreateUserDto and UpdateUserDto are imported from the DTO files this ensures data integrity
export class UserService {
  constructor(private readonly databaseService: DatabaseService) {}
  async create(createUserDto: CreateUserDto) {
    const { name, email, password } = createUserDto;
    const Hashedpassword = await this.hashPassword(password);
    const user = await this.databaseService.user.create({
      data: {
        username: name,
        email: email,
        Hashedpassword: Hashedpassword,
      },
    });
    return user;
  }

  async findAll() {
    const user = await this.databaseService.user.findMany();
    if (user.length === 0) {
      // this is the error handling for the User entity
      throw new NotFoundException('No user found');
    }
    return user;
  }

  async findOne(id: number) {
    const user = await this.databaseService.user.findUnique({
      // this is the error handling for the User entity
      where: { id: id },
    });
    if (!user) {
      return new NotFoundException('No user found');
    }
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const { name, email, password } = updateUserDto;
    let Hashedpassword;
    if (password) {
      Hashedpassword = await this.hashPassword(password);
    }
    return this.databaseService.user.update({
      where: { id: id },
      data: {
        username: name,
        email: email,
        Hashedpassword: Hashedpassword,
      },
    });
  }

  async remove(id: number) {
    return this.databaseService.user.delete({
      where: { id: id },
    });
  }
  async hashPassword(password: string) {
    const saltOrRounds = 10;

    return await bcrypt.hash(password, saltOrRounds);
  }
}
