import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionCreateManyCategoryInput } from './transaction-create-many-category.input';
import { Type } from 'class-transformer';

@InputType()
export class TransactionCreateManyCategoryInputEnvelope {

    @Field(() => [TransactionCreateManyCategoryInput], {nullable:false})
    @Type(() => TransactionCreateManyCategoryInput)
    data!: Array<TransactionCreateManyCategoryInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
