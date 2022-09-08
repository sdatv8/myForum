import { DataTypes } from 'sequelize';
import { sequelize } from "../connection.js";


export const User =sequelize.define(
    'User',
    {
      userid: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      passwordhash: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      freezeTableName: false,
      timestamps: true,
    }
);
