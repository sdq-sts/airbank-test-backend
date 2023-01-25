import { Test, TestingModule } from '@nestjs/testing';
import { TransactionsResolver } from './transactions.resolver';
import { TransactionsService } from './transactions.service';

describe('TransactionsResolver', () => {
  let resolver: TransactionsResolver;
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

  const mockTransactionService = {
    findAll: jest.fn(() => Promise.resolve(transactionList)),
    findOne: jest.fn((dto) => ({
      ...dto,
      reference: 'Unique reference',
      amount: -46.8,
      currency: 'EUR',
      created_at: '2022-12-11T06:19:06.307Z',
    })),
    update: jest.fn((dto) => ({
      id: dto.id,
      reference: dto.data.reference,
      amount: 20,
    })),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransactionsResolver, TransactionsService],
    })
      .overrideProvider(TransactionsService)
      .useValue(mockTransactionService)
      .compile();

    resolver = module.get<TransactionsResolver>(TransactionsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('should list transactions', async () => {
    const dto = {};

    expect(await resolver.findAll(dto)).toEqual(transactionList);
  });

  it('should return one transaction', async () => {
    const dto = { id: '7343276a-1424-4dc6-9cb9-b5eeba111e38' };
    const expectedResponse = {
      ...dto,
      reference: 'Unique reference',
      amount: -46.8,
      currency: 'EUR',
      created_at: '2022-12-11T06:19:06.307Z',
    };

    expect(await resolver.findOne(dto)).toEqual(expectedResponse);
  });

  it('should update a transaction', async () => {
    const dto = {
      id: '7343276a-1424-4dc6-9cb9-b5eeba111e38',
      data: {
        reference: 'Updated Reference',
      },
    };
    const expectedResponse = {
      id: dto.id,
      reference: dto.data.reference,
      amount: 20,
    };
    expect(await resolver.update(dto)).toEqual(expectedResponse);
  });
});
