import { Test, TestingModule } from '@nestjs/testing';
import { WalletAdrService } from './wallet-adr.service';

describe('WalletAdrService', () => {
  let service: WalletAdrService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WalletAdrService],
    }).compile();

    service = module.get<WalletAdrService>(WalletAdrService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
