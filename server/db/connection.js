import { Sequelize } from 'sequelize';

export  const sequelize = new Sequelize(
  `myforum`, 
  'postgres', 
  '1234', {
    dialect: 'postgres',
    host: 'localhost',
})
