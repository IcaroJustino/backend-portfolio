import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ProjectService } from './project.service';
import { Project } from '@prisma/client';
import { ProjectDTO } from './project-dto';
//TESTE
@Controller('projects')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post()
  async createProject(@Body() project: ProjectDTO): Promise<Project> {
    return this.projectService.createProject(project);
  }

  @Get()
  async getProjects(): Promise<Project[]> {
    return this.projectService.getProjects();
  }

  @Get(':id')
  async getProjectById(@Param('id') id: string): Promise<Project | null> {
    return this.projectService.getProjectById(id);
  }

  @Put(':id')
  async updateProject(@Param('id') id: string, @Body() data: any): Promise<Project> {
    return this.projectService.updateProject(id, data);
  }

  @Delete(':id')
  async deleteProject(@Param('id') id: string): Promise<Project> {
    return this.projectService.deleteProject(id);
  }
}