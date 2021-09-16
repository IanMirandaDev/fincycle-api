import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { Transaction } from './entities/transaction.entity';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectModel(Transaction)
    private TransactionModel: typeof Transaction,
  ) {}

  create(createTransactionDto: CreateTransactionDto) {
    return this.TransactionModel.create(createTransactionDto);
  }

  findAll() {
    return this.TransactionModel.findAll();
  }
}
