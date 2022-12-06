import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionCreateWithoutCategoryInput } from './transaction-create-without-category.input';
import { Type } from 'class-transformer';
import { TransactionCreateOrConnectWithoutCategoryInput } from './transaction-create-or-connect-without-category.input';
import { TransactionCreateManyCategoryInputEnvelope } from './transaction-create-many-category-input-envelope.input';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';

@InputType()
export class TransactionUncheckedCreateNestedManyWithoutCategoryInput {

    @Field(() => [TransactionCreateWithoutCategoryInput], {nullable:true})
    @Type(() => TransactionCreateWithoutCategoryInput)
    create?: Array<TransactionCreateWithoutCategoryInput>;

    @Field(() => [TransactionCreateOrConnectWithoutCategoryInput], {nullable:true})
    @Type(() => TransactionCreateOrConnectWithoutCategoryInput)
    connectOrCreate?: Array<TransactionCreateOrConnectWithoutCategoryInput>;

    @Field(() => TransactionCreateManyCategoryInputEnvelope, {nullable:true})
    @Type(() => TransactionCreateManyCategoryInputEnvelope)
    createMany?: TransactionCreateManyCategoryInputEnvelope;

    @Field(() => [TransactionWhereUniqueInput], {nullable:true})
    @Type(() => TransactionWhereUniqueInput)
    connect?: Array<TransactionWhereUniqueInput>;
}
