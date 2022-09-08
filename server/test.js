
import { commentModel } from './db/models/commentModel.js';
import { postModel } from './db/models/PostModel.js';
import { topicModel } from './db/models/topicModel.js';
import { userModel } from './db/models/userModel.js';

const User = await userModel()
const Post = await postModel()
const Topic = await topicModel()
const Comment = await commentModel()


await User.create({ username: "Admin2", passwordhash: 'dafsfewfdd' });


const allUsers = await User.findAll()
console.log(allUsers)