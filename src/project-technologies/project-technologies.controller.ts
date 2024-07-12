import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ProjectTechnologiesService } from './project-technologies.service';
import { Project_Technologies } from '@prisma/client';

@Controller('project-technologies')
export class ProjectTechnologiesController {
  constructor(private readonly projectTechnologiesService: ProjectTechnologiesService) {}

  @Post()
  async createProjectTechnology(@Body() data: any): Promise<Project_Technologies> {
    return this.projectTechnologiesService.createProjectTechnology(data);
  }

  @Get()
  async getProjectTechnologies(): Promise<Project_Technologies[]> {
    return this.projectTechnologiesService.getProjectTechnologies();
  }

  @Get(':id')
  async getProjectTechnologyById(@Param('id') id: string): Promise<Project_Technologies | null> {
    return this.projectTechnologiesService.getProjectTechnologyById(id);
  }

  @Put(':id')
  async updateProjectTechnology(@Param('id') id: string, @Body() data: any): Promise<Project_Technologies> {
    return this.projectTechnologiesService.updateProjectTechnology(id, data);
  }

  @Delete(':id')
  async deleteProjectTechnology(@Param('id') id: string): Promise<Project_Technologies> {
    return this.projectTechnologiesService.deleteProjectTechnology(id);
  }
}