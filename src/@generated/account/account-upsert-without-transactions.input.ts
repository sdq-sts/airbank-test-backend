import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountUpdateWithoutTransactionsInput } from './account-update-without-transactions.input';
import { Type } from 'class-transformer';
import { AccountCreateWithoutTransactionsInput } from './account-create-without-transactions.input';

@InputType()
export class AccountUpsertWithoutTransactionsInput {

    @Field(() => AccountUpdateWithoutTransactionsInput, {nullable:false})
    @Type(() => AccountUpdateWithoutTransactionsInput)
    update!: AccountUpdateWithoutTransactionsInput;

    @Field(() => AccountCreateWithoutTransactionsInput, {nullable:false})
    @Type(() => AccountCreateWithoutTransactionsInput)
    create!: AccountCreateWithoutTransactionsInput;
}
