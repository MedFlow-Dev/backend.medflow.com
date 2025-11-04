import { Test, TestingModule } from '@nestjs/testing';
import { PerscriptionController } from './perscription.controller';

describe('PerscriptionController', () => {
  let controller: PerscriptionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PerscriptionController],
    }).compile();

    controller = module.get<PerscriptionController>(PerscriptionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
