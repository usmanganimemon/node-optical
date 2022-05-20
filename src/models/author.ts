import { Model, Optional, DataTypes } from 'sequelize'
import db from './index'

interface AuthorAttributes {
  id: number;
  firstName: string;
};

/*
  We have to declare the AuthorCreationAttributes to
  tell Sequelize and TypeScript that the property id,
  in this case, is optional to be passed at creation time
*/
interface AuthorCreationAttributes
  extends Optional<AuthorAttributes, 'id'> {}

interface AuthorInstance
  extends Model<AuthorAttributes, AuthorCreationAttributes>,
    AuthorAttributes {
      createdAt?: Date;
      updatedAt?: Date;
    }
const Author = db.define<AuthorInstance>(
  'author',
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.NUMBER
    },
    firstName: {
      allowNull: true,
      type: DataTypes.TEXT
    }
  }
)
export default Author
