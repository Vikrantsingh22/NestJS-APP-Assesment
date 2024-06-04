import { Module } from '@nestjs/common';
import { WalletAdrService } from './wallet-adr.service';
import { WalletAdrController } from './wallet-adr.controller';
import { DatabaseModule } from 'src/database/database.module';

// DatabaseModule is imported to use the DatabaseService in WalletAdrService
@Module({
  imports: [DatabaseModule],
  controllers: [WalletAdrController],
  providers: [WalletAdrService],
})
export class WalletAdrModule {}
