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
      body: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      freezeTableName: false,
      timestamps: true,
    }
);

Post.hasOne(Comment);
Comment.belongsTo(Post);

User.hasOne(Comment);
Comment.belongsTo(User);
