import express from 'express'
import { sequelize } from './db/connection.js'
import userRoutes from './routes/user.routes.js'
import './db/models/userModel.js'
import './db/models/postModel.js'
import './db/models/topicModel.js'
import './db/models/commentModel.js'

const PORT = 3001
const app = express()

async function main () {
  await sequelize.sync({force: false})
  app.use(express.json())
  app.use(userRoutes)
 
  app.listen(PORT, () => console.log(`Server start on port ${PORT}`))
}

main()