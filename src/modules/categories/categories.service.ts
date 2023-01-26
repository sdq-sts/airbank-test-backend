import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { FindOneDto } from './dto/find-one.dto';
import { FindAllCategoriesDto } from './dto/find-all.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  create(createCategoryInput: CreateCategoryDto) {
    return this.prisma.category.create({ data: createCategoryInput });
  }

  findAll(search: FindAllCategoriesDto) {
    const categorySearch = (search || '') as unknown;
    const args: Prisma.CategoryFindManyArgs = {
      where: {
        name: { contains: categorySearch as string, mode: 'insensitive' },
      },
    };

    return this.prisma.category.findMany(args);
  }

  findOne(categoryFindUniqueData: FindOneDto) {
    return this.prisma.category.findUnique({
      where: categoryFindUniqueData,
    });
  }
}
