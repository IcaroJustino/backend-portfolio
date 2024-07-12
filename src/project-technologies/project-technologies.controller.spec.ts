import { Test, TestingModule } from '@nestjs/testing';
import { ProjectTechnologiesController } from './project-technologies.controller';

describe('ProjectTechnologiesController', () => {
  let controller: ProjectTechnologiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectTechnologiesController],
    }).compile();

    controller = module.get<ProjectTechnologiesController>(ProjectTechnologiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
