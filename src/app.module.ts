import { Module } from '@nestjs/common';
import { RequestModule } from './request/request.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [RequestModule],
  providers: [PrismaService],
})
export class AppModule {}
