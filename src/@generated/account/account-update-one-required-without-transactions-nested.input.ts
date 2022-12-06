import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountCreateWithoutTransactionsInput } from './account-create-without-transactions.input';
import { Type } from 'class-transformer';
import { AccountCreateOrConnectWithoutTransactionsInput } from './account-create-or-connect-without-transactions.input';
import { AccountUpsertWithoutTransactionsInput } from './account-upsert-without-transactions.input';
import { AccountWhereUniqueInput } from './account-where-unique.input';
import { AccountUpdateWithoutTransactionsInput } from './account-update-without-transactions.input';

@InputType()
export class AccountUpdateOneRequiredWithoutTransactionsNestedInput {

    @Field(() => AccountCreateWithoutTransactionsInput, {nullable:true})
    @Type(() => AccountCreateWithoutTransactionsInput)
    create?: AccountCreateWithoutTransactionsInput;

    @Field(() => AccountCreateOrConnectWithoutTransactionsInput, {nullable:true})
    @Type(() => AccountCreateOrConnectWithoutTransactionsInput)
    connectOrCreate?: AccountCreateOrConnectWithoutTransactionsInput;

    @Field(() => AccountUpsertWithoutTransactionsInput, {nullable:true})
    @Type(() => AccountUpsertWithoutTransactionsInput)
    upsert?: AccountUpsertWithoutTransactionsInput;

    @Field(() => AccountWhereUniqueInput, {nullable:true})
    @Type(() => AccountWhereUniqueInput)
    connect?: AccountWhereUniqueInput;

    @Field(() => AccountUpdateWithoutTransactionsInput, {nullable:true})
    @Type(() => AccountUpdateWithoutTransactionsInput)
    update?: AccountUpdateWithoutTransactionsInput;
}
