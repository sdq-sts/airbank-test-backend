import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { Type } from 'class-transformer';
import { CategoryCreateWithoutTransactionsInput } from './category-create-without-transactions.input';

@InputType()
export class CategoryCreateOrConnectWithoutTransactionsInput {

    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    where!: CategoryWhereUniqueInput;

    @Field(() => CategoryCreateWithoutTransactionsInput, {nullable:false})
    @Type(() => CategoryCreateWithoutTransactionsInput)
    create!: CategoryCreateWithoutTransactionsInput;
}
