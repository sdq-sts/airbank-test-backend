import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';

export type FindAllParams = {
  cursor: string;
  search: string;
  bank: string;
  account: string;
  startDate: string;
  endDate: string;
  perPage: number;
};
@Injectable()
export class TransactionsService {
  constructor(private prisma: PrismaService) {}

  async findAll(params: FindAllParams) {
    const findManyArgs: Prisma.TransactionFindManyArgs = {
      take: params.perPage || 20,
      orderBy: { created_at: 'desc' },
      include: { account: true, category: true },
    };

    if (params.cursor) {
      findManyArgs.skip = 1;
      findManyArgs.where = { created_at: { lte: params.cursor } };
    }

    if (params.search) {
      findManyArgs.where = {
        ...findManyArgs.where,
        ...{
          OR: [
            { reference: { contains: params.search, mode: 'insensitive' } },
            { currency: { contains: params.search, mode: 'insensitive' } },
            { amount: { equals: +params.search } },
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
          ],
        },
      };
    }

    return this.prisma.transaction.findMany(findManyArgs);
  }

  findOne(transactionWhereUniqueInput: Prisma.TransactionWhereUniqueInput) {
    return this.prisma.transaction.findUnique({
      where: transactionWhereUniqueInput,
    });
  }

  update(/*id: number, updateTransactionInput: UpdateTransactionInput*/) {
    return `This action updates a #id transaction`;
  }
}
