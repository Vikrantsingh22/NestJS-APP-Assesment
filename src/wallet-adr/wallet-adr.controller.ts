import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
} from '@nestjs/common';
import { WalletAdrService } from './wallet-adr.service';
import { CreateWalletAdrDto } from './dto/create-wallet-adr.dto';
import { UpdateWalletAdrDto } from './dto/update-wallet-adr.dto';

// Dependency injection of the WalletAdrService
// This will redirect the requests to the WalletAdrService
// ValidationPipe is used to validate the incoming data
//CreateWalletAdrDto is used to validate the incoming data

@Controller('wallet-adr')
export class WalletAdrController {
  constructor(private readonly walletAdrService: WalletAdrService) {}

  @Post()
  create(@Body(ValidationPipe) createWalletAdrDto: CreateWalletAdrDto) {
    return this.walletAdrService.create(createWalletAdrDto);
  }

  @Get()
  findAll() {
    return this.walletAdrService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.walletAdrService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body(ValidationPipe) updateWalletAdrDto: UpdateWalletAdrDto,
  ) {
    return this.walletAdrService.update(+id, updateWalletAdrDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.walletAdrService.remove(+id);
  }
}
