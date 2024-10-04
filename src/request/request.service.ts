import { Injectable } from '@nestjs/common';
import { CreateRequestDto } from './dto/create-request.dto';
import { PrismaService } from 'src/prisma.service';
import { getRequestsDto } from './dto/get-requests.dto';

@Injectable()
export class RequestService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateRequestDto) {
    const request = {
      name: dto.name,
      surname: dto.surname,
      birthDate: dto.birthDate,
      amount: dto.amount,
      purpose: dto.purpose,
    };

    return await this.prisma.request.create({
      data: request,
    });
  }

  async findAll(dto: getRequestsDto) {
    const requests = await this.prisma.request.findMany({
      where: {
        name: dto.name,
        surname: dto.surname,
        birthDate: dto.birthDate,
      },
    });
    return requests;
  }
}
