import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { FindAllDto } from './dto/find-all.dto';
import { TransactionsService } from './transactions.service';

@Resolver('Transaction')
export class TransactionsResolver {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Query('transactions')
  async findAll(
    @Args()
    { cursor, search, bank, account, startDate, endDate, perPage }: FindAllDto,
  ) {
    const params = {
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
