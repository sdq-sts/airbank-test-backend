import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutTransactionsInput } from './category-create-without-transactions.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutTransactionsInput } from './category-create-or-connect-without-transactions.input';
import { CategoryUpsertWithoutTransactionsInput } from './category-upsert-without-transactions.input';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { CategoryUpdateWithoutTransactionsInput } from './category-update-without-transactions.input';

@InputType()
export class CategoryUpdateOneWithoutTransactionsNestedInput {

    @Field(() => CategoryCreateWithoutTransactionsInput, {nullable:true})
    @Type(() => CategoryCreateWithoutTransactionsInput)
    create?: CategoryCreateWithoutTransactionsInput;

    @Field(() => CategoryCreateOrConnectWithoutTransactionsInput, {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutTransactionsInput)
    connectOrCreate?: CategoryCreateOrConnectWithoutTransactionsInput;

    @Field(() => CategoryUpsertWithoutTransactionsInput, {nullable:true})
    @Type(() => CategoryUpsertWithoutTransactionsInput)
    upsert?: CategoryUpsertWithoutTransactionsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: CategoryWhereUniqueInput;

    @Field(() => CategoryUpdateWithoutTransactionsInput, {nullable:true})
    @Type(() => CategoryUpdateWithoutTransactionsInput)
    update?: CategoryUpdateWithoutTransactionsInput;
}
