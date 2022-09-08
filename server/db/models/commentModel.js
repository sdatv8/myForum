import { DataTypes } from 'sequelize';
import { sequelize } from "../connection.js";
import { Post } from './postModel.js';
import { User } from './userModel.js';

export const Comment = sequelize.define(
    'Comment',
    {
      commentid: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      comment: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      postid: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      freezeTableName: false,
      timestamps: true,
    }
);

Post.hasOne(Comment, {
  foreignKey: 'postid'
})

User.hasOne(Comment, {
  foreignKey: 'userid'
})
