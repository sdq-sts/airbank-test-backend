import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { AccountRelationFilter } from '../account/account-relation-filter.input';
import { CategoryRelationFilter } from '../category/category-relation-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class TransactionWhereInput {

    @Field(() => [TransactionWhereInput], {nullable:true})
    AND?: Array<TransactionWhereInput>;

    @Field(() => [TransactionWhereInput], {nullable:true})
    OR?: Array<TransactionWhereInput>;

    @Field(() => [TransactionWhereInput], {nullable:true})
    NOT?: Array<TransactionWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => AccountRelationFilter, {nullable:true})
    account?: AccountRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    account_id?: StringFilter;

    @Field(() => CategoryRelationFilter, {nullable:true})
    category?: CategoryRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    category_id?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    reference?: StringNullableFilter;

    @Field(() => FloatFilter, {nullable:true})
    amount?: FloatFilter;

    @Field(() => StringFilter, {nullable:true})
    currency?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updated_at?: DateTimeNullableFilter;
}
