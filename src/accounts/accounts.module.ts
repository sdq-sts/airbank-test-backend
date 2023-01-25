import { Module } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { AccountsResolver } from './accounts.resolver';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  providers: [PrismaService, AccountsResolver, AccountsService],
})
export class AccountsModule {}
