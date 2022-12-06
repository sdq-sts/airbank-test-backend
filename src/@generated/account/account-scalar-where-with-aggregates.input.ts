import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class AccountScalarWhereWithAggregatesInput {

    @Field(() => [AccountScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AccountScalarWhereWithAggregatesInput>;

    @Field(() => [AccountScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AccountScalarWhereWithAggregatesInput>;

    @Field(() => [AccountScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AccountScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    bank?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    updated_at?: DateTimeNullableWithAggregatesFilter;
}
