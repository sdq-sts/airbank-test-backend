import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';
import { Type } from 'class-transformer';
import { TransactionUpdateWithoutCategoryInput } from './transaction-update-without-category.input';

@InputType()
export class TransactionUpdateWithWhereUniqueWithoutCategoryInput {

    @Field(() => TransactionWhereUniqueInput, {nullable:false})
    @Type(() => TransactionWhereUniqueInput)
    where!: TransactionWhereUniqueInput;

    @Field(() => TransactionUpdateWithoutCategoryInput, {nullable:false})
    @Type(() => TransactionUpdateWithoutCategoryInput)
    data!: TransactionUpdateWithoutCategoryInput;
}
