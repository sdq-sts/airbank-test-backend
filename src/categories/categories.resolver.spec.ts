import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesResolver } from './categories.resolver';
import { CategoriesService } from './categories.service';

describe('CategoriesResolver', () => {
  let resolver: CategoriesResolver;

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
  const singleCategory = {
    id: '6ad0e563-7f94-417d-8370-7eca2e52b2cc',
    name: 'My category',
    color: 'ffffff',
    created_at: '2022-12-10T12:46:29.149Z',
  };

  const mockCategoriesService = {
    create: jest.fn(({ name, color }) => ({
      id: '6ad0e563-7f94-417d-8370-7eca2e52b2cc',
      name,
      color,
      created_at: '2022-12-10T12:46:29.149Z',
    })),
    findAll: jest.fn(() => categoryList),
    findOne: jest.fn((dto) => ({
      id: dto.id,
      ...singleCategory,
    })),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoriesResolver, CategoriesService],
    })
      .overrideProvider(CategoriesService)
      .useValue(mockCategoriesService)
      .compile();

    resolver = module.get<CategoriesResolver>(CategoriesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('should create a category', async () => {
    const dto = { name: 'New Category', color: 'ffffff' };
    const expectedResult = {
      id: '6ad0e563-7f94-417d-8370-7eca2e52b2cc',
      ...dto,
      created_at: '2022-12-10T12:46:29.149Z',
    };

    expect(await resolver.create(dto)).toEqual(expectedResult);
  });

  it('should find all categories', async () => {
    const expectedResult = categoryList;

    expect(await resolver.findAll()).toEqual(expectedResult);
  });

  it('should find one category', async () => {
    const dto = { id: '6ad0e563-7f94-417d-8370-7eca2e52b2cc' };
    const expectedResult = singleCategory;

    expect(await resolver.findOne(dto)).toEqual(expectedResult);
  });
});
