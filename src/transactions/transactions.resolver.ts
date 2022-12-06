import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { FindAllParams, TransactionsService } from './transactions.service';

@Resolver('Transaction')
export class TransactionsResolver {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Query('transactions')
  async findAll(
    @Args('cursor') cursor: string,
    @Args('search') search: string,
    @Args('bank') bank: string,
    @Args('account') account: string,
    @Args('startDate') startDate: string,
    @Args('endDate') endDate: string,
    @Args('perPage') perPage: number,
  ) {
    const params: FindAllParams = {
      cursor,
      search,
      bank,
      account,
      startDate,
      endDate,
      perPage,
    };

    return this.transactionsService.findAll(params);
  }

  @Query('transaction')
  findOne(@Args('id') id: string) {
    return this.transactionsService.findOne({ id });
  }

  @Mutation('updateTransaction')
  update(
    @Args('updateTransactionInput')
    updateTransactionInput /*UpdateTransactionInput,*/,
  ) {
    return this.transactionsService
      .update
      // updateTransactionInput.id,
      // updateTransactionInput,
      ();
  }
}
