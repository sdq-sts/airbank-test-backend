import { Field } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

export class FindOneDto {
  @Field()
  @IsUUID('all')
  id: string;
}
