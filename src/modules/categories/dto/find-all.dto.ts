import { ArgsType, Field } from '@nestjs/graphql';
import { IsOptional, IsString } from 'class-validator';

@ArgsType()
export class FindAllCategoriesDto {
  @Field({ nullable: false, defaultValue: '' })
  @IsOptional()
  @IsString()
  search?: string;
}
