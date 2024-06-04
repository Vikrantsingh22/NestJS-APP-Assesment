import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateWalletAdrDto } from './dto/create-wallet-adr.dto';
import { UpdateWalletAdrDto } from './dto/update-wallet-adr.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
/// this is the injectable class for the walletAdr entity
// this is injectable dependency

// CRUD operations for the walletAdr entity using the PrismaClient instance

// NotfoundException is imported from the @nestjs/common package to handle the error
// CreateWalletAdrDto and UpdateWalletAdrDto are imported from the DTO files this ensures data integrity
export class WalletAdrService {
  constructor(private readonly databaseService: DatabaseService) {}
  async create(createWalletAdrDto: CreateWalletAdrDto) {
    const walletAdr = await this.databaseService.walletAddress.create({
      data: createWalletAdrDto,
    });
    return walletAdr;
  }

  async findAll() {
    const walletAdr = await this.databaseService.walletAddress.findMany();
    if (walletAdr.length === 0) {
      // this is the error handling for the walletAdr entity
      return new NotFoundException('No walletAdr found');
    }
    return walletAdr;
  }

  async findOne(id: number) {
    const walletAdr = await this.databaseService.walletAddress.findUnique({
      where: { id: id },
    });
    if (!walletAdr) {
      // this is the error handling for the walletAdr entity
      return new NotFoundException('No walletAdr found');
    }
    return walletAdr;
  }

  async update(id: number, updateWalletAdrDto: UpdateWalletAdrDto) {
    const walletAdr = await this.databaseService.walletAddress.update({
      where: { id: id },
      data: updateWalletAdrDto,
    });
    return walletAdr;
  }

  async remove(id: number) {
    const walletAdr = await this.databaseService.walletAddress.delete({
      where: { id: id },
    });
    return walletAdr;
  }
}
