import { Column, DataType, Model, Table } from 'sequelize-typescript';

export enum TransactionCategory {
  CATEGORY1 = 'category1',
  CATEGORY2 = 'category2',
}

export enum TransactionType {
  CREDIT = 'credit',
  DEBIT = 'debit',
}

@Table({
  tableName: 'transactions',
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
export class Transaction extends Model {
  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @Column({ allowNull: false })
  paymentDate: Date;

  @Column({ allowNull: false, type: DataType.TEXT })
  description: string;

  @Column({ allowNull: false })
  category: TransactionCategory;

  @Column({ allowNull: false, type: DataType.DECIMAL(10, 2) })
  amount: number;

  @Column({ allowNull: false })
  type: TransactionType;
}
