import { DataTypes } from 'sequelize';
import { sequelize } from "../connection.js";

export const Topic = sequelize.define(
    'Topic',
    {
      topicid: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      topicname: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      freezeTableName: false,
      timestamps: false,
    }
);
