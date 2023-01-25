import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesService } from './categories.service';
import { PrismaService } from 'prisma/prisma.service';

describe('CategoriesService', () => {
  let service: CategoriesService;

  const singleCategory = {
    id: '6ad0e563-7f94-417d-8370-7eca2e52b2cc',
    name: 'My single category',
    color: 'FF0000',
    created_at: '2022-12-10T12:46:29.149Z',
  };
  const categoryList = [
    {
      id: '6ad0e563-7f94-417d-8370-7eca2e52b2cc',
      name: 'Category 1',
      color: 'ffffff',
      created_at: '2022-12-10T12:46:29.149Z',
    },
    {
      id: '6ad0e563-7f94-417d-8370-7eca2e52b2aa',
      name: 'Category 2',
      color: 'ffffff',
      created_at: '2022-12-10T12:46:29.149Z',
    },
  ];

  const mockPrismaService = {
    category: {
      create: jest.fn(({ data }) => ({
        ...singleCategory,
        name: data.name,
        color: data.color,
      })),
      findMany: jest.fn(() => categoryList),
      findUnique: jest.fn((dto) => ({
        ...singleCategory,
        id: dto.where.id,
      })),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoriesService, PrismaService],
    })
      .overrideProvider(PrismaService)
      .useValue(mockPrismaService)
      .compile();

    service = module.get<CategoriesService>(CategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a category', async () => {
    const dto = { name: 'My Category', color: 'ff0000' };
    const expectedResponse = {
      ...singleCategory,
      ...dto,
    };

    expect(await service.create(dto)).toEqual(expectedResponse);
  });

  it('should return a list of categories', async () => {
    const expectedResponse = categoryList;

    expect(await service.findAll()).toEqual(expectedResponse);
  });

  it('should return one category', async () => {
    const dto = { id: '6ad0e563-7f94-417d-8370-7eca2e52b2cc ' };
    const expectedResponse = {
      ...singleCategory,
      ...dto,
    };

    expect(await service.findOne(dto)).toEqual(expectedResponse);
  });
});
