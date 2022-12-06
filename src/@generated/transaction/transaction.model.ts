import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Account } from '../account/account.model';
import { Category } from '../category/category.model';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Transaction {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Account, {nullable:false})
    account?: Account;

    @Field(() => String, {nullable:false})
    account_id!: string;

    @Field(() => Category, {nullable:true})
    category?: Category | null;

    @Field(() => String, {nullable:true})
    category_id!: string | null;

    /**
     * Validator.IsOptional()
     */
    @Field(() => String, {nullable:true,description:'Validator.IsOptional()'})
    reference!: string | null;

    /**
     * Validator.IsDecimal({ decimal_digits: 2, locale: 'en-US' })
     */
    @Field(() => Float, {nullable:false,description:"Validator.IsDecimal({ decimal_digits: 2, locale: 'en-US' })"})
    amount!: number;

    /**
     * Validator.Length(3)
     */
    @Field(() => String, {nullable:false,description:'Validator.Length(3)'})
    currency!: string;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:true})
    updated_at!: Date | null;
}
