import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { TechKnolegeService } from './tech-knolege.service';
import { Tech_Knolege } from '@prisma/client';

@Controller('tech-knoleges')
export class TechKnolegeController {
  constructor(private readonly techKnolegeService: TechKnolegeService) {}

  @Post()
  async createTechKnolege(@Body() data: any): Promise<Tech_Knolege> {
    return this.techKnolegeService.createTechKnolege(data);
  }

  @Get()
  async getTechKnoleges(): Promise<Tech_Knolege[]> {
    return this.techKnolegeService.getTechKnoleges();
  }

  @Get(':id')
  async getTechKnolegeById(@Param('id') id: string): Promise<Tech_Knolege | null> {
    return this.techKnolegeService.getTechKnolegeById(id);
  }

  @Put(':id')
  async updateTechKnolege(@Param('id') id: string, @Body() data: any): Promise<Tech_Knolege> {
    return this.techKnolegeService.updateTechKnolege(id, data);
  }

  @Delete(':id')
  async deleteTechKnolege(@Param('id') id: string): Promise<Tech_Knolege> {
    return this.techKnolegeService.deleteTechKnolege(id);
  }
}