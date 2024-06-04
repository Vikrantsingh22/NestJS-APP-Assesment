import { Test, TestingModule } from '@nestjs/testing';
import { WalletAdrController } from './wallet-adr.controller';
import { WalletAdrService } from './wallet-adr.service';

describe('WalletAdrController', () => {
  let controller: WalletAdrController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WalletAdrController],
      providers: [WalletAdrService],
    }).compile();

    controller = module.get<WalletAdrController>(WalletAdrController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
