import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Project_Technologies, Prisma } from '@prisma/client';

@Injectable()
export class ProjectTechnologiesService {
  constructor(private prisma: PrismaService) {}

  async createProjectTechnology(data: Prisma.Project_TechnologiesCreateInput): Promise<Project_Technologies> {
    return this.prisma.project_Technologies.create({
      data,
    });
  }

  async getProjectTechnologies(): Promise<Project_Technologies[]> {
    return this.prisma.project_Technologies.findMany({
      include: {
        projects: true,
      },
    });
  }

  async getProjectTechnologyById(id: string): Promise<Project_Technologies | null> {
    return this.prisma.project_Technologies.findUnique({
      where: { id },
      include: {
        projects: true,
      },
    });
  }

  async updateProjectTechnology(id: string, data: Prisma.Project_TechnologiesUpdateInput): Promise<Project_Technologies> {
    return this.prisma.project_Technologies.update({
      where: { id },
      data,
    });
  }

  async deleteProjectTechnology(id: string): Promise<Project_Technologies> {
    return this.prisma.project_Technologies.delete({
      where: { id },
    });
  }
}