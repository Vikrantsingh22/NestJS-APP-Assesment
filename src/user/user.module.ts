import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { DatabaseModule } from 'src/database/database.module';

// DatabaseModule is imported to use the DatabaseService in UserService
@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
