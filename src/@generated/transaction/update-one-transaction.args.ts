import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TransactionUpdateInput } from './transaction-update.input';
import { Type } from 'class-transformer';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';

@ArgsType()
export class UpdateOneTransactionArgs {

    @Field(() => TransactionUpdateInput, {nullable:false})
    @Type(() => TransactionUpdateInput)
    data!: TransactionUpdateInput;

    @Field(() => TransactionWhereUniqueInput, {nullable:false})
    @Type(() => TransactionWhereUniqueInput)
    where!: TransactionWhereUniqueInput;
}
