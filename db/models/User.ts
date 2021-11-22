import { Optional } from 'sequelize'
import { Table, Model, Column, DataType } from 'sequelize-typescript'

interface UserAttributes {
  id?: number
  name: string
  email: string
  password: string
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

@Table
export default class User extends Model<UserAttributes, UserCreationAttributes> {
  @Column(DataType.TEXT)
  name: string

  @Column(DataType.TEXT)
  email: string

  @Column(DataType.TEXT)
  password: string
}
