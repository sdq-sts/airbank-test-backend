import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { FindAllCategoriesDto } from './dto/find-all.dto';
import { FindOneDto } from './dto/find-one.dto';

@Resolver('Category')
export class CategoriesResolver {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Mutation('createCategory')
  create(@Args('createCategoryInput') createCategoryInput: CreateCategoryDto) {
    return this.categoriesService.create(createCategoryInput);
  }

  @Query('categories')
  findAll(
    @Args('search')
    search: FindAllCategoriesDto,
  ) {
    return this.categoriesService.findAll(search);
  }

  @Query('category')
  findOne(@Args() categoryFindUniqueData: FindOneDto) {
    return this.categoriesService.findOne(categoryFindUniqueData);
  }
}
