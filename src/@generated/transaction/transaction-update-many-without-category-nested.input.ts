import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionCreateWithoutCategoryInput } from './transaction-create-without-category.input';
import { Type } from 'class-transformer';
import { TransactionCreateOrConnectWithoutCategoryInput } from './transaction-create-or-connect-without-category.input';
import { TransactionUpsertWithWhereUniqueWithoutCategoryInput } from './transaction-upsert-with-where-unique-without-category.input';
import { TransactionCreateManyCategoryInputEnvelope } from './transaction-create-many-category-input-envelope.input';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';
import { TransactionUpdateWithWhereUniqueWithoutCategoryInput } from './transaction-update-with-where-unique-without-category.input';
import { TransactionUpdateManyWithWhereWithoutCategoryInput } from './transaction-update-many-with-where-without-category.input';
import { TransactionScalarWhereInput } from './transaction-scalar-where.input';

@InputType()
export class TransactionUpdateManyWithoutCategoryNestedInput {

    @Field(() => [TransactionCreateWithoutCategoryInput], {nullable:true})
    @Type(() => TransactionCreateWithoutCategoryInput)
    create?: Array<TransactionCreateWithoutCategoryInput>;

    @Field(() => [TransactionCreateOrConnectWithoutCategoryInput], {nullable:true})
    @Type(() => TransactionCreateOrConnectWithoutCategoryInput)
    connectOrCreate?: Array<TransactionCreateOrConnectWithoutCategoryInput>;

    @Field(() => [TransactionUpsertWithWhereUniqueWithoutCategoryInput], {nullable:true})
    @Type(() => TransactionUpsertWithWhereUniqueWithoutCategoryInput)
    upsert?: Array<TransactionUpsertWithWhereUniqueWithoutCategoryInput>;

    @Field(() => TransactionCreateManyCategoryInputEnvelope, {nullable:true})
    @Type(() => TransactionCreateManyCategoryInputEnvelope)
    createMany?: TransactionCreateManyCategoryInputEnvelope;

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

    @Field(() => [TransactionUpdateWithWhereUniqueWithoutCategoryInput], {nullable:true})
    @Type(() => TransactionUpdateWithWhereUniqueWithoutCategoryInput)
    update?: Array<TransactionUpdateWithWhereUniqueWithoutCategoryInput>;

    @Field(() => [TransactionUpdateManyWithWhereWithoutCategoryInput], {nullable:true})
    @Type(() => TransactionUpdateManyWithWhereWithoutCategoryInput)
    updateMany?: Array<TransactionUpdateManyWithWhereWithoutCategoryInput>;

    @Field(() => [TransactionScalarWhereInput], {nullable:true})
    @Type(() => TransactionScalarWhereInput)
    deleteMany?: Array<TransactionScalarWhereInput>;
}
