import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { RequestService } from './request.service';
import { CreateRequestDto } from './dto/create-request.dto';
import { getRequestsDto } from './dto/get-requests.dto';

@Controller('request')
export class RequestController {
  constructor(private readonly requestService: RequestService) {}

  @Post()
  create(@Body() createRequestDto: CreateRequestDto) {
    return this.requestService.create(createRequestDto);
  }

  @Get()
  findAll(@Query() dto: getRequestsDto) {
    return this.requestService.findAll(dto);
  }
}
