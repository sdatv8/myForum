import { DataTypes } from 'sequelize';
import { sequelize } from "../connection.js";
import { Topic } from './topicModel.js';
import { User } from './userModel.js';

export const Post = sequelize.define(
    'Post',
    {
      postid: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      body: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      topicid: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      userid: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      freezeTableName: false,
      timestamps: true,
    }
);

User.hasOne(Post, {
  foreignKey: 'userid',
});
Topic.hasOne(Post, {
  foreignKey: 'topicid'
})