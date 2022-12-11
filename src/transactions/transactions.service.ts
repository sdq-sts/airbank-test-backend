import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { TransactionWhereUniqueInput } from 'src/@generated/transaction/transaction-where-unique.input';
import { PrismaService } from '../../prisma/prisma.service';
import { FindAllTransactionsDto } from './dto/find-all.dto';
import { UpdateTransactionDto } from './dto/update.dto';

@Injectable()
export class TransactionsService {
  constructor(private prisma: PrismaService) {}

  async findAll(params: FindAllTransactionsDto) {
    const findManyArgs: Prisma.TransactionFindManyArgs = {
      take: params.perPage || 20,
      orderBy: { created_at: 'desc' },
      include: { account: true, category: true },
    };
    const isSearchANumber = +params.search;

    if (params.cursor) {
      findManyArgs.skip = 1;
      findManyArgs.where = { created_at: { lte: params.cursor } };
    }

    if (params.account) {
      findManyArgs.where = {
        ...findManyArgs.where,
        account: { id: params.account },
      };
    }

    if (params.bank) {
      findManyArgs.where = {
        ...findManyArgs.where,
        account: { bank: params.bank },
      };
    }

    if (params.startDate && params.endDate) {
      findManyArgs.where = {
        ...findManyArgs.where,
        created_at: { lte: params.endDate, gte: params.startDate },
      };
    }

    if (params.search) {
      findManyArgs.where = {
        ...findManyArgs.where,
        OR: [
          { reference: { contains: params.search, mode: 'insensitive' } },
          { currency: { contains: params.search, mode: 'insensitive' } },
          {
            account: {
              bank: { contains: params.search, mode: 'insensitive' },
            },
          },
          {
            category: {
              name: { contains: params.search, mode: 'insensitive' },
            },
          },
          ...(isSearchANumber ? [{ amount: { equals: +params.search } }] : []),
        ],
      };
    }

    return this.prisma.transaction.findMany(findManyArgs);
  }

  findOne(transactionWhereUniqueInput: TransactionWhereUniqueInput) {
    return this.prisma.transaction.findUnique({
      where: transactionWhereUniqueInput,
    });
  }

  update(updateTransactionInput: UpdateTransactionDto) {
    return this.prisma.transaction.update({
      where: { id: updateTransactionInput.id },
      data: updateTransactionInput.data,
    });
  }
}
