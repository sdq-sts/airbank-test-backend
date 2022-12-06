import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AccountCountOrderByAggregateInput } from './account-count-order-by-aggregate.input';
import { AccountMaxOrderByAggregateInput } from './account-max-order-by-aggregate.input';
import { AccountMinOrderByAggregateInput } from './account-min-order-by-aggregate.input';

@InputType()
export class AccountOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    bank?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => AccountCountOrderByAggregateInput, {nullable:true})
    _count?: AccountCountOrderByAggregateInput;

    @Field(() => AccountMaxOrderByAggregateInput, {nullable:true})
    _max?: AccountMaxOrderByAggregateInput;

    @Field(() => AccountMinOrderByAggregateInput, {nullable:true})
    _min?: AccountMinOrderByAggregateInput;
}
