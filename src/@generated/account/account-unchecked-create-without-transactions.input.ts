import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';

@InputType()
export class AccountUncheckedCreateWithoutTransactionsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    @Validator.Length(3, 20)
    name!: string;

    @Field(() => String, {nullable:false})
    @Validator.Length(3, 20)
    bank!: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;
}
