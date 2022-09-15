import express from 'express'
import cors from 'cors'
import { sequelize } from './db/connection.js'
import userRoutes from './routes/user.routes.js'
import postRouter from './routes/post.routes.js'
import './db/models/userModel.js'
import './db/models/postModel.js'
import './db/models/topicModel.js'
import './db/models/commentModel.js'

const PORT = 3001
const app = express()
app.use(cors())

async function main () {
  await sequelize.sync({force: false})
  app.use(express.json())
  app.use(userRoutes)
  app.use(postRouter)
 
  app.listen(PORT, () => console.log(`Server start on port ${PORT}`))
}

main()