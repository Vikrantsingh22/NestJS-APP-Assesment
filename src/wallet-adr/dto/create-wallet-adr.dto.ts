import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

// CreateWalletAdrDto to use for the create method in the WalletAdrService
// it will validate the incoming data
export class CreateWalletAdrDto {
  @IsString()
  @IsNotEmpty()
  address: string;

  @IsOptional()
  @IsString()
  currency: string;
}
