import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { TransactionCountOrderByAggregateInput } from './transaction-count-order-by-aggregate.input';
import { TransactionAvgOrderByAggregateInput } from './transaction-avg-order-by-aggregate.input';
import { TransactionMaxOrderByAggregateInput } from './transaction-max-order-by-aggregate.input';
import { TransactionMinOrderByAggregateInput } from './transaction-min-order-by-aggregate.input';
import { TransactionSumOrderByAggregateInput } from './transaction-sum-order-by-aggregate.input';

@InputType()
export class TransactionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    account_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    category_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    reference?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    amount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    currency?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => TransactionCountOrderByAggregateInput, {nullable:true})
    _count?: TransactionCountOrderByAggregateInput;

    @Field(() => TransactionAvgOrderByAggregateInput, {nullable:true})
    _avg?: TransactionAvgOrderByAggregateInput;

    @Field(() => TransactionMaxOrderByAggregateInput, {nullable:true})
    _max?: TransactionMaxOrderByAggregateInput;

    @Field(() => TransactionMinOrderByAggregateInput, {nullable:true})
    _min?: TransactionMinOrderByAggregateInput;

    @Field(() => TransactionSumOrderByAggregateInput, {nullable:true})
    _sum?: TransactionSumOrderByAggregateInput;
}
