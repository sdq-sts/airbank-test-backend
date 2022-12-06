import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';
import { Type } from 'class-transformer';
import { TransactionCreateWithoutAccountInput } from './transaction-create-without-account.input';

@InputType()
export class TransactionCreateOrConnectWithoutAccountInput {

    @Field(() => TransactionWhereUniqueInput, {nullable:false})
    @Type(() => TransactionWhereUniqueInput)
    where!: TransactionWhereUniqueInput;

    @Field(() => TransactionCreateWithoutAccountInput, {nullable:false})
    @Type(() => TransactionCreateWithoutAccountInput)
    create!: TransactionCreateWithoutAccountInput;
}
