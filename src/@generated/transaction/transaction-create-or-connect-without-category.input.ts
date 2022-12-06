import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';
import { Type } from 'class-transformer';
import { TransactionCreateWithoutCategoryInput } from './transaction-create-without-category.input';

@InputType()
export class TransactionCreateOrConnectWithoutCategoryInput {

    @Field(() => TransactionWhereUniqueInput, {nullable:false})
    @Type(() => TransactionWhereUniqueInput)
    where!: TransactionWhereUniqueInput;

    @Field(() => TransactionCreateWithoutCategoryInput, {nullable:false})
    @Type(() => TransactionCreateWithoutCategoryInput)
    create!: TransactionCreateWithoutCategoryInput;
}
