import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { FindOneDto } from './dto/find-one.dto';

@Resolver('Category')
export class CategoriesResolver {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Mutation('createCategory')
  create(@Args('createCategoryInput') createCategoryInput: CreateCategoryDto) {
    return this.categoriesService.create(createCategoryInput);
  }

  @Query('categories')
  findAll() {
    return this.categoriesService.findAll();
  }

  @Query('category')
  findOne(@Args() categoryFindUniqueData: FindOneDto) {
    return this.categoriesService.findOne(categoryFindUniqueData);
  }
}
