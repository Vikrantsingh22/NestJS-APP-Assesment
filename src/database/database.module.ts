import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';

// DatabaseService is provided and exported in DatabaseModule
// This will allow other modules to use the DatabaseService
@Module({
  providers: [DatabaseService],
  exports: [DatabaseService],
})
export class DatabaseModule {}
