import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../prisma/prisma.service';
import { TransactionsService } from './transactions.service';

describe('TransactionsService', () => {
  let service: TransactionsService;
  const transactionList = [
    {
      id: '7343276a-1424-4dc6-9cb9-b5eeba111e38',
      reference: 'Some Reference',
      amount: 2980,
      currency: 'EUR',
      created_at: new Date().toISOString(),
    },
    {
      id: 'b9dfd43e-0669-4250-b5be-57db31b83a5e',
      reference: 'Another Reference',
      amount: -46.8,
      currency: 'EUR',
      created_at: new Date().toISOString(),
    },
    {
      id: 'b4392cca-97d2-4c3b-9026-af5c56720b8a',
      reference: '',
      amount: 39.9,
      currency: 'EUR',
      created_at: new Date().toISOString(),
    },
  ];

  const mockPrismaService = {
    transaction: {
      findMany: jest.fn(() => transactionList),
      findUnique: jest.fn((dto) => ({
        id: dto.where.id,
        reference: '',
        amount: 39.9,
        currency: 'EUR',
        created_at: '2022-12-10T12:46:29.149Z',
      })),
      update: jest.fn(({ where, data }) => ({
        id: where.id,
        ...data,
      })),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransactionsService, PrismaService],
    })
      .overrideProvider(PrismaService)
      .useValue(mockPrismaService)
      .compile();

    service = module.get<TransactionsService>(TransactionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should find all transactions', async () => {
    const dto = {};
    expect(await service.findAll(dto)).toEqual(transactionList);
  });

  it('should find one transaction', async () => {
    const dto = { id: '7343276a-1424-4dc6-9cb9-b5eeba111e38' };
    const expectedResponse = {
      id: dto.id,
      reference: '',
      amount: 39.9,
      currency: 'EUR',
      created_at: '2022-12-10T12:46:29.149Z',
    };

    expect(await service.findOne(dto)).toEqual(expectedResponse);
  });

  it('should update one transaction', async () => {
    const dto = {
      id: '7343276a-1424-4dc6-9cb9-b5eeba111e38',
      data: { reference: 'updated reference' },
    };
    const expectedResponse = {
      id: dto.id,
      ...dto.data,
    };

    expect(await service.update(dto)).toEqual(expectedResponse);
  });
});
