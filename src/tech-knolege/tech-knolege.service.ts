import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Tech_Knolege, Prisma } from '@prisma/client';
import { TehKnolegeDto } from './tech-knolege-dto';

@Injectable()
export class TechKnolegeService {
  constructor(private prisma: PrismaService) {}

  async createTechKnolege(data: TehKnolegeDto): Promise<Tech_Knolege> {
    return this.prisma.tech_Knolege.create({
      data,
    });
  }

  async getTechKnoleges(): Promise<Tech_Knolege[]> {
    return this.prisma.tech_Knolege.findMany();
  }

  async getTechKnolegeById(id: string): Promise<Tech_Knolege | null> {
    return this.prisma.tech_Knolege.findUnique({
      where: { id },
    });
  }

  async updateTechKnolege(id: string, data: Prisma.Tech_KnolegeUpdateInput): Promise<Tech_Knolege> {
    return this.prisma.tech_Knolege.update({
      where: { id },
      data,
    });
  }

  async deleteTechKnolege(id: string): Promise<Tech_Knolege> {
    return this.prisma.tech_Knolege.delete({
      where: { id },
    });
  }
}