import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionCreateWithoutAccountInput } from './transaction-create-without-account.input';
import { Type } from 'class-transformer';
import { TransactionCreateOrConnectWithoutAccountInput } from './transaction-create-or-connect-without-account.input';
import { TransactionUpsertWithWhereUniqueWithoutAccountInput } from './transaction-upsert-with-where-unique-without-account.input';
import { TransactionCreateManyAccountInputEnvelope } from './transaction-create-many-account-input-envelope.input';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';
import { TransactionUpdateWithWhereUniqueWithoutAccountInput } from './transaction-update-with-where-unique-without-account.input';
import { TransactionUpdateManyWithWhereWithoutAccountInput } from './transaction-update-many-with-where-without-account.input';
import { TransactionScalarWhereInput } from './transaction-scalar-where.input';

@InputType()
export class TransactionUpdateManyWithoutAccountNestedInput {

    @Field(() => [TransactionCreateWithoutAccountInput], {nullable:true})
    @Type(() => TransactionCreateWithoutAccountInput)
    create?: Array<TransactionCreateWithoutAccountInput>;

    @Field(() => [TransactionCreateOrConnectWithoutAccountInput], {nullable:true})
    @Type(() => TransactionCreateOrConnectWithoutAccountInput)
    connectOrCreate?: Array<TransactionCreateOrConnectWithoutAccountInput>;

    @Field(() => [TransactionUpsertWithWhereUniqueWithoutAccountInput], {nullable:true})
    @Type(() => TransactionUpsertWithWhereUniqueWithoutAccountInput)
    upsert?: Array<TransactionUpsertWithWhereUniqueWithoutAccountInput>;

    @Field(() => TransactionCreateManyAccountInputEnvelope, {nullable:true})
    @Type(() => TransactionCreateManyAccountInputEnvelope)
    createMany?: TransactionCreateManyAccountInputEnvelope;

    @Field(() => [TransactionWhereUniqueInput], {nullable:true})
    @Type(() => TransactionWhereUniqueInput)
    set?: Array<TransactionWhereUniqueInput>;

    @Field(() => [TransactionWhereUniqueInput], {nullable:true})
    @Type(() => TransactionWhereUniqueInput)
    disconnect?: Array<TransactionWhereUniqueInput>;

    @Field(() => [TransactionWhereUniqueInput], {nullable:true})
    @Type(() => TransactionWhereUniqueInput)
    delete?: Array<TransactionWhereUniqueInput>;

    @Field(() => [TransactionWhereUniqueInput], {nullable:true})
    @Type(() => TransactionWhereUniqueInput)
    connect?: Array<TransactionWhereUniqueInput>;

    @Field(() => [TransactionUpdateWithWhereUniqueWithoutAccountInput], {nullable:true})
    @Type(() => TransactionUpdateWithWhereUniqueWithoutAccountInput)
    update?: Array<TransactionUpdateWithWhereUniqueWithoutAccountInput>;

    @Field(() => [TransactionUpdateManyWithWhereWithoutAccountInput], {nullable:true})
    @Type(() => TransactionUpdateManyWithWhereWithoutAccountInput)
    updateMany?: Array<TransactionUpdateManyWithWhereWithoutAccountInput>;

    @Field(() => [TransactionScalarWhereInput], {nullable:true})
    @Type(() => TransactionScalarWhereInput)
    deleteMany?: Array<TransactionScalarWhereInput>;
}
