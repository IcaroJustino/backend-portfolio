import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Project, Prisma } from '@prisma/client';
import { ProjectDTO } from './project-dto';

@Injectable()
export class ProjectService {
  constructor(private prisma: PrismaService) {}

  async createProject(data: ProjectDTO): Promise<Project> {
    return this.prisma.project.create({
      data,
    });
  }

  async getProjects(): Promise<Project[]> {
    return this.prisma.project.findMany({
      include: {
        developer: true,
        Project_Technologies: true,
      },
    });
  }

  async getProjectById(id: string) {
    return this.prisma.project.findFirst({
      where: { id },
      include: {
        developer: true,
        Project_Technologies: true,
      },
    });
  }

  async updateProject(id: string, data: Prisma.ProjectUpdateInput): Promise<Project> {
    return this.prisma.project.update({
      where: { id },
      data,
    });
  }

  async deleteProject(id: string): Promise<Project> {
    return this.prisma.project.delete({
      where: { id },
    });
  }
}