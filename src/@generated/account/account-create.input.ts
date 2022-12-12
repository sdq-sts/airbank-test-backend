import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { TransactionCreateNestedManyWithoutAccountInput } from '../transaction/transaction-create-nested-many-without-account.input';

@InputType()
export class AccountCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    @Validator.Length(3, 40)
    name!: string;

    @Field(() => String, {nullable:false})
    @Validator.Length(3, 40)
    bank!: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => TransactionCreateNestedManyWithoutAccountInput, {nullable:true})
    transactions?: TransactionCreateNestedManyWithoutAccountInput;
}
