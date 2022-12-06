import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryUpdateWithoutTransactionsInput } from './category-update-without-transactions.input';
import { Type } from 'class-transformer';
import { CategoryCreateWithoutTransactionsInput } from './category-create-without-transactions.input';

@InputType()
export class CategoryUpsertWithoutTransactionsInput {

    @Field(() => CategoryUpdateWithoutTransactionsInput, {nullable:false})
    @Type(() => CategoryUpdateWithoutTransactionsInput)
    update!: CategoryUpdateWithoutTransactionsInput;

    @Field(() => CategoryCreateWithoutTransactionsInput, {nullable:false})
    @Type(() => CategoryCreateWithoutTransactionsInput)
    create!: CategoryCreateWithoutTransactionsInput;
}
