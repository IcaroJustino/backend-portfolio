import { Module } from '@nestjs/common';
import { ProjectTechnologiesService } from './project-technologies.service';
import { ProjectTechnologiesController } from './project-technologies.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [ProjectTechnologiesService],
  controllers: [ProjectTechnologiesController],
})
export class ProjectTechnologiesModule {}