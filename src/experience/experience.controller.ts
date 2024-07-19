import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ExperienceService } from './experience.service';
import { Experience } from '@prisma/client';
import { ExperienceDto } from './experience-dto';

@Controller('experiences')
export class ExperienceController {
  constructor(private readonly experienceService: ExperienceService) {}

  @Post()
  async createExperience(@Body() data: ExperienceDto): Promise<Experience> {
    return this.experienceService.createExperience(data);
  }

  @Get()
  async getExperiences(): Promise<Experience[]> {
    return this.experienceService.getExperiences();
  }

  @Get(':id')
  async getExperienceById(@Param('id') id: string): Promise<Experience | null> {
    return this.experienceService.getExperienceById(id);
  }

  @Put(':id')
  async updateExperience(@Param('id') id: string, @Body() data: any): Promise<Experience> {
    return this.experienceService.updateExperience(id, data);
  }

  @Delete(':id')
  async deleteExperience(@Param('id') id: string): Promise<Experience> {
    return this.experienceService.deleteExperience(id);
  }
}