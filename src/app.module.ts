import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { ExperienceModule } from './experience/experience.module';
import { TechKnolegeModule } from './tech-knolege/tech-knolege.module';
import { ProjectModule } from './project/project.module';
import { ProjectTechnologiesModule } from './project-technologies/project-technologies.module';

@Module({
  imports: [PrismaModule, UserModule, ExperienceModule, TechKnolegeModule, ProjectModule, ProjectTechnologiesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
