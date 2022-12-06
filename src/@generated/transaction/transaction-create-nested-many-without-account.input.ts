import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionCreateWithoutAccountInput } from './transaction-create-without-account.input';
import { Type } from 'class-transformer';
import { TransactionCreateOrConnectWithoutAccountInput } from './transaction-create-or-connect-without-account.input';
import { TransactionCreateManyAccountInputEnvelope } from './transaction-create-many-account-input-envelope.input';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';

@InputType()
export class TransactionCreateNestedManyWithoutAccountInput {

    @Field(() => [TransactionCreateWithoutAccountInput], {nullable:true})
    @Type(() => TransactionCreateWithoutAccountInput)
    create?: Array<TransactionCreateWithoutAccountInput>;

    @Field(() => [TransactionCreateOrConnectWithoutAccountInput], {nullable:true})
    @Type(() => TransactionCreateOrConnectWithoutAccountInput)
    connectOrCreate?: Array<TransactionCreateOrConnectWithoutAccountInput>;

    @Field(() => TransactionCreateManyAccountInputEnvelope, {nullable:true})
    @Type(() => TransactionCreateManyAccountInputEnvelope)
    createMany?: TransactionCreateManyAccountInputEnvelope;

    @Field(() => [TransactionWhereUniqueInput], {nullable:true})
    @Type(() => TransactionWhereUniqueInput)
    connect?: Array<TransactionWhereUniqueInput>;
}
