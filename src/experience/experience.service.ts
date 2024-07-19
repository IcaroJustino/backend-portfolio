import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Experience, Prisma } from '@prisma/client';
import { ExperienceDto } from './experience-dto';

@Injectable()
export class ExperienceService {
  constructor(private prisma: PrismaService) {}

  async createExperience(data: ExperienceDto): Promise<Experience> {
    return this.prisma.experience.create({
      data,
    });
  }

  async getExperiences(): Promise<Experience[]> {
    return this.prisma.experience.findMany();
  }

  async getExperienceById(id: string): Promise<Experience | null> {
    return this.prisma.experience.findUnique({
      where: { id },
    });
  }

  async updateExperience(id: string, data: Prisma.ExperienceUpdateInput): Promise<Experience> {
    return this.prisma.experience.update({
      where: { id },
      data,
    });
  }

  async deleteExperience(id: string): Promise<Experience> {
    return this.prisma.experience.delete({
      where: { id },
    });
  }
}