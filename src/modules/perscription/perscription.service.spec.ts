import { Test, TestingModule } from '@nestjs/testing';
import { PerscriptionService } from './perscription.service';

describe('PerscriptionService', () => {
  let service: PerscriptionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PerscriptionService],
    }).compile();

    service = module.get<PerscriptionService>(PerscriptionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
