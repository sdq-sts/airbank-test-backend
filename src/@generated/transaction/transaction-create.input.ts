import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountCreateNestedOneWithoutTransactionsInput } from '../account/account-create-nested-one-without-transactions.input';
import { CategoryCreateNestedOneWithoutTransactionsInput } from '../category/category-create-nested-one-without-transactions.input';
import { Float } from '@nestjs/graphql';

@InputType()
export class TransactionCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => AccountCreateNestedOneWithoutTransactionsInput, {nullable:false})
    account!: AccountCreateNestedOneWithoutTransactionsInput;

    @Field(() => CategoryCreateNestedOneWithoutTransactionsInput, {nullable:true})
    category?: CategoryCreateNestedOneWithoutTransactionsInput;

    @Field(() => String, {nullable:true})
    reference?: string;

    @Field(() => Float, {nullable:false})
    amount!: number;

    @Field(() => String, {nullable:false})
    currency!: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;
}
