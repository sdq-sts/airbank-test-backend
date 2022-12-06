import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';
import { Type } from 'class-transformer';
import { TransactionUpdateWithoutCategoryInput } from './transaction-update-without-category.input';
import { TransactionCreateWithoutCategoryInput } from './transaction-create-without-category.input';

@InputType()
export class TransactionUpsertWithWhereUniqueWithoutCategoryInput {

    @Field(() => TransactionWhereUniqueInput, {nullable:false})
    @Type(() => TransactionWhereUniqueInput)
    where!: TransactionWhereUniqueInput;

    @Field(() => TransactionUpdateWithoutCategoryInput, {nullable:false})
    @Type(() => TransactionUpdateWithoutCategoryInput)
    update!: TransactionUpdateWithoutCategoryInput;

    @Field(() => TransactionCreateWithoutCategoryInput, {nullable:false})
    @Type(() => TransactionCreateWithoutCategoryInput)
    create!: TransactionCreateWithoutCategoryInput;
}
