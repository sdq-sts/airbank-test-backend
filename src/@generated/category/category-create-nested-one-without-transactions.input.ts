import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutTransactionsInput } from './category-create-without-transactions.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutTransactionsInput } from './category-create-or-connect-without-transactions.input';
import { CategoryWhereUniqueInput } from './category-where-unique.input';

@InputType()
export class CategoryCreateNestedOneWithoutTransactionsInput {

    @Field(() => CategoryCreateWithoutTransactionsInput, {nullable:true})
    @Type(() => CategoryCreateWithoutTransactionsInput)
    create?: CategoryCreateWithoutTransactionsInput;

    @Field(() => CategoryCreateOrConnectWithoutTransactionsInput, {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutTransactionsInput)
    connectOrCreate?: CategoryCreateOrConnectWithoutTransactionsInput;

    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: CategoryWhereUniqueInput;
}
