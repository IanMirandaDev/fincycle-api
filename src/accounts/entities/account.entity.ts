import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { ToNumber } from '../../common/db/to-number.decorator';

@Table({
  tableName: 'accounts',
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
export class Account extends Model {
  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @Column({ allowNull: false })
  name: string;

  @ToNumber
  @Column({ allowNull: false, type: DataType.DECIMAL(10, 2), defaultValue: 0 })
  balance: number;

  @Column({ allowNull: false })
  subdomain: string;
}
