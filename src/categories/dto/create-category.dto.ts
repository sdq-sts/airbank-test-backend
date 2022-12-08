import { ArgsType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString, Length } from 'class-validator';

@ArgsType()
export class CreateCategoryDto {
  @Field()
  @IsString()
  @Length(3, 40)
  @IsNotEmpty()
  name: string;

  @Field()
  @IsString()
  @Length(3, 6)
  color?: string;
}
