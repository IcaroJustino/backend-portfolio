import { Test, TestingModule } from '@nestjs/testing';
import { TechKnolegeController } from './tech-knolege.controller';

describe('TechKnolegeController', () => {
  let controller: TechKnolegeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TechKnolegeController],
    }).compile();

    controller = module.get<TechKnolegeController>(TechKnolegeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
