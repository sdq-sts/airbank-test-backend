import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountCreateWithoutTransactionsInput } from './account-create-without-transactions.input';
import { Type } from 'class-transformer';
import { AccountCreateOrConnectWithoutTransactionsInput } from './account-create-or-connect-without-transactions.input';
import { AccountWhereUniqueInput } from './account-where-unique.input';

@InputType()
export class AccountCreateNestedOneWithoutTransactionsInput {

    @Field(() => AccountCreateWithoutTransactionsInput, {nullable:true})
    @Type(() => AccountCreateWithoutTransactionsInput)
    create?: AccountCreateWithoutTransactionsInput;

    @Field(() => AccountCreateOrConnectWithoutTransactionsInput, {nullable:true})
    @Type(() => AccountCreateOrConnectWithoutTransactionsInput)
    connectOrCreate?: AccountCreateOrConnectWithoutTransactionsInput;

    @Field(() => AccountWhereUniqueInput, {nullable:true})
    @Type(() => AccountWhereUniqueInput)
    connect?: AccountWhereUniqueInput;
}
