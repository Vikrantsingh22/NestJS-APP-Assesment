import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { WalletAdrModule } from './wallet-adr/wallet-adr.module';
import { UserModule } from './user/user.module';
// Added All Modules to AppModule

@Module({
  imports: [DatabaseModule, WalletAdrModule, UserModule],
})
export class AppModule {}
