import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { TransactionCreateNestedManyWithoutCategoryInput } from '../transaction/transaction-create-nested-many-without-category.input';

@InputType()
export class CategoryCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.Length(3, 20)
    name!: string;

    @Field(() => String, {nullable:true})
    @Validator.Length(3, 6)
    color?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => TransactionCreateNestedManyWithoutCategoryInput, {nullable:true})
    transactions?: TransactionCreateNestedManyWithoutCategoryInput;
}
