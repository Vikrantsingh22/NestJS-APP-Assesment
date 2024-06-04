import { PartialType } from '@nestjs/mapped-types';
import { CreateWalletAdrDto } from './create-wallet-adr.dto';

// This is the update DTO for the walletAdr entity
// It extends the CreateWalletAdrDto and makes the properties optional
export class UpdateWalletAdrDto extends PartialType(CreateWalletAdrDto) {}
