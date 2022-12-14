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
        type: DataTypes.TEXT('long'),
        allowNull: false,
      },
      image: {
        type: DataTypes.BLOB('long'),
        allowNull: false,
      },
    },
    {
      freezeTableName: false,
      timestamps: true,
    }
);

User.hasOne(Post);
Post.belongsTo(User);

Topic.hasOne(Post);
Post.belongsTo(Topic);