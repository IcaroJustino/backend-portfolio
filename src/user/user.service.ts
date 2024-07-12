// src/user/user.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser(data: any): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }

  async getUsers(): Promise<User[]> {
    return this.prisma.user.findMany({
      include: {
        projects: true,
        Experiences: true,
        Knoleges: true,
      },
    });
  }

  async getUserById(id: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { id },
      include: {
        projects: true,
        Experiences: true,
        Knoleges: true,
      },
    });
  }

  async updateUser(id: string, data: any): Promise<User> {
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  async deleteUser(id: string): Promise<User> {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
