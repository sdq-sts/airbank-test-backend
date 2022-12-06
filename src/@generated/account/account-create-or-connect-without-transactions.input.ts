import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountWhereUniqueInput } from './account-where-unique.input';
import { Type } from 'class-transformer';
import { AccountCreateWithoutTransactionsInput } from './account-create-without-transactions.input';

@InputType()
export class AccountCreateOrConnectWithoutTransactionsInput {

    @Field(() => AccountWhereUniqueInput, {nullable:false})
    @Type(() => AccountWhereUniqueInput)
    where!: AccountWhereUniqueInput;

    @Field(() => AccountCreateWithoutTransactionsInput, {nullable:false})
    @Type(() => AccountCreateWithoutTransactionsInput)
    create!: AccountCreateWithoutTransactionsInput;
}
