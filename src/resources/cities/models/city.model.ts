import { Model, Table, Column, DataType } from 'sequelize-typescript';

@Table({
  modelName: 'city',
  freezeTableName: true,
  timestamps: false,
})
export class City extends Model {
  @Column({
    primaryKey: true,
    type: DataType.INTEGER,
    field: 'ID',
    unique: true,
    allowNull: false
  })
  id: string;

  @Column({
    type: DataType.CHAR(35),
    field: 'Name',
    unique: false,
  })
  name: string;

  @Column({
    type: DataType.CHAR(3),
    field: 'CountryCode',
    unique: false,
  })
  countryCode: string;

  @Column({
    type: DataType.CHAR(20),
    field: 'District',
    unique: false,
  })
  district: string;

  @Column({
    type: DataType.INTEGER,
    field: 'Population',
    unique: false,
  })
  population: number;
}