import { Module } from '@nestjs/common';
import { TechKnolegeService } from './tech-knolege.service';
import { TechKnolegeController } from './tech-knolege.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [TechKnolegeService],
  controllers: [TechKnolegeController],
})
export class TechKnolegeModule {}