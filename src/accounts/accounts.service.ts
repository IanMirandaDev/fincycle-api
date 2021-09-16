import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateAccountDto } from './dto/create-account.dto';
import { Account } from './entities/account.entity';

@Injectable()
export class AccountsService {
  constructor(
    @InjectModel(Account)
    private AccountModel: typeof Account,
  ) {}

  create(createAccountDto: CreateAccountDto) {
    return this.AccountModel.create(createAccountDto);
  }

  findAll() {
    return this.AccountModel.findAll();
  }

  findOne(id: number) {
    return this.AccountModel.findByPk(id, { rejectOnEmpty: true });
  }
}
