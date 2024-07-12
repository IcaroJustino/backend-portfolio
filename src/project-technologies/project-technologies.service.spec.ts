import { Test, TestingModule } from '@nestjs/testing';
import { ProjectTechnologiesService } from './project-technologies.service';

describe('ProjectTechnologiesService', () => {
  let service: ProjectTechnologiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectTechnologiesService],
    }).compile();

    service = module.get<ProjectTechnologiesService>(ProjectTechnologiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
