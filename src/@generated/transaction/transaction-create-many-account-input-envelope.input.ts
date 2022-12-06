import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionCreateManyAccountInput } from './transaction-create-many-account.input';
import { Type } from 'class-transformer';

@InputType()
export class TransactionCreateManyAccountInputEnvelope {

    @Field(() => [TransactionCreateManyAccountInput], {nullable:false})
    @Type(() => TransactionCreateManyAccountInput)
    data!: Array<TransactionCreateManyAccountInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
