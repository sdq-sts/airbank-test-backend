import { ArgsType, Field } from '@nestjs/graphql';
import {
  IsDateString,
  IsInt,
  IsString,
  IsUUID,
  Max,
  Min,
  MinLength,
} from 'class-validator';

@ArgsType()
export class FindAllTransactionsDto {
  @Field({ nullable: true, defaultValue: null })
  @IsDateString()
  cursor?: string;

  @Field({ nullable: true, defaultValue: null })
  @IsString()
  search?: string;

  @Field({ nullable: true, defaultValue: null })
  @IsString()
  @MinLength(3)
  bank?: string;

  @Field({ nullable: true, defaultValue: null })
  @IsUUID('all')
  account?: string;

  @Field({ nullable: true, defaultValue: null })
  @IsDateString()
  startDate?: string;

  @Field({ nullable: true, defaultValue: new Date() })
  @IsDateString()
  endDate?: string;

  @Field({ nullable: true, defaultValue: null })
  @IsInt()
  @Min(5)
  @Max(50)
  perPage?: number;
}
