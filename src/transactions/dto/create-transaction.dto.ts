import {
  IsDecimal,
  IsIn,
  IsISO8601,
  IsNotEmpty,
  IsString,
  MaxLength,
} from 'class-validator';
import {
  TransactionCategory,
  TransactionCategoryList,
  TransactionType,
  TransactionTypeList,
} from '../entities/transaction.entity';

export class CreateTransactionDto {
  @IsISO8601()
  @IsNotEmpty()
  payment_date: Date;

  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  name: string;

  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  description: string;

  @IsIn(TransactionCategoryList)
  @IsNotEmpty()
  category: TransactionCategory;

  @IsDecimal()
  @IsNotEmpty()
  amount: string;

  @IsIn(TransactionTypeList)
  @IsNotEmpty()
  type: TransactionType;
}
