import { Injectable } from '@nestjs/common';
import { CreateTransactionInput } from './dto/create-transaction.input';
import { UpdateTransactionInput } from './dto/update-transaction.input';

@Injectable()
export class TransactionsService {
  create(createTransactionInput: CreateTransactionInput) {
    return 'This action adds a new transaction';
  }

  findAll() {
    return [{ exampleField: 1 }];
  }

  findOne(id: number) {
    return { exampleField: id };
  }

  update(id: number, updateTransactionInput: UpdateTransactionInput) {
    return `This action updates a #${id} transaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} transaction`;
  }
}
