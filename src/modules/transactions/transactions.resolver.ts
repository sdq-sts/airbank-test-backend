import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { FindAllTransactionsDto } from './dto/find-all.dto';
import { FindOneDto } from './dto/find-one.dto';
import { UpdateTransactionDto } from './dto/update.dto';
import { TransactionsService } from './transactions.service';

@Resolver('Transaction')
export class TransactionsResolver {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Query('transactions')
  async findAll(@Args() findAllArgs: FindAllTransactionsDto) {
    return this.transactionsService.findAll(findAllArgs);
  }

  @Query('transaction')
  findOne(@Args() { id }: FindOneDto) {
    return this.transactionsService.findOne({ id });
  }

  @Mutation('updateTransaction')
  update(
    @Args('updateTransactionInput')
    updateTransactionInput: UpdateTransactionDto,
  ) {
    return this.transactionsService.update(updateTransactionInput);
  }
}
