import { ArgsType } from '@nestjs/graphql';
import {
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  IsUUID,
  MaxLength,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

@ArgsType()
class UpdateTransactionDataDto {
  @IsOptional()
  @IsString()
  @MaxLength(50)
  reference?: string;

  @IsNumber({ maxDecimalPlaces: 2 }, { message: 'Must have 2 decimal digits' })
  amount?: number;

  currency?: string;

  @IsUUID('all')
  category?: any;
}

@ArgsType()
export class UpdateTransactionDto {
  @IsUUID('all')
  id!: string;

  @IsObject()
  @ValidateNested()
  @Type(() => UpdateTransactionDataDto)
  data: UpdateTransactionDataDto;
}
