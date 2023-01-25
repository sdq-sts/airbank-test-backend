import { Resolver, Query } from '@nestjs/graphql';
import { AccountsService } from './accounts.service';

@Resolver('Account')
export class AccountsResolver {
  constructor(private readonly accountsService: AccountsService) {}

  @Query('accounts')
  findAll() {
    return this.accountsService.findAll();
  }
}
