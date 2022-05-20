import { Optional } from 'sequelize'
export type UserAttributes = {
    id: number,
    email: string,
    password: string,
    firstName: string,
    lastName: string
  };
export type UserCreationAttributes = Optional<UserAttributes, 'id'>
