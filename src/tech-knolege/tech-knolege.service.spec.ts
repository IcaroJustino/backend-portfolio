import { Test, TestingModule } from '@nestjs/testing';
import { TechKnolegeService } from './tech-knolege.service';

describe('TechKnolegeService', () => {
  let service: TechKnolegeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TechKnolegeService],
    }).compile();

    service = module.get<TechKnolegeService>(TechKnolegeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
