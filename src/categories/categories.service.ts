import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { FindOneDto } from './dto/find-one.dto';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  create(createCategoryInput: CreateCategoryDto) {
    return this.prisma.category.create({ data: createCategoryInput });
  }

  findAll() {
    return this.prisma.category.findMany();
  }

  findOne(categoryFindUniqueData: FindOneDto) {
    return this.prisma.category.findUnique({
      where: categoryFindUniqueData,
    });
  }
}
