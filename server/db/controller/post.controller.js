import getTopicID from "../../helpers/getTopicID.js"
import getUniqueTopics from "../../helpers/getUniqueTopics.js"
import previewText from "../../helpers/previewText.js"
import { Post } from "../models/postModel.js"
import { Topic } from "../models/topicModel.js"
import { User } from "../models/userModel.js"


export const createPost = async (req, res) => {
  const {
    title,
    body,
    topicname,
    sessionid,
  } = req.body

  try{
    let topicid = await getTopicID(topicname)
    const newPost = await Post.create({
      title: title,
      body: body,
      image: 'test',
      TopicTopicid: topicid,
      UserUserid: sessionid,
    })
    res.json({
      status: `ok`,
      error: ``
    })
  } catch (e) {
    console.log(e)
    res.json({
      status: `error`,
      error: `Not create post`
    })
  }
}

export const getPosts = async (req, res) => {
  const {sessionid} = req.body
  try{
    const postsAll = await Post.findAll({raw: true, include: Topic})
    const posts = postsAll.map(post => {
      return({
        postid: post.postid,
        title: post.title,
        body: previewText(post.body),
        image: post.image,
        topic: post['Topic.topicname'],
      })
    })

    let toptics = getUniqueTopics(posts)
    res.json({
      status: `ok`,
      posts: posts,
      toptics: toptics,
    })
  } catch (e) {
    console.log(e)
    res.json({
      status: `error`,
      posts: ``
    })
  }
}

export const getOnePost = async (req, res) => {
  const {postid} = req.body
  console.log(postid)
  try{
    const postInfo = await Post.findOne({
      raw: true,
      where: { postid: postid },
      include: User
    });
    const post = {
        postid: postInfo.postid,
        title: postInfo.title,
        body: postInfo.body,
        image: postInfo.image,
        topic: postInfo['Topic.topicname'],
        username: postInfo['User.username'],
        createpost: postInfo.createdAt,
        updatedpost: postInfo.updatedAt,
    }
    res.json({
      status: `ok`,
      post: post
    })
  } catch (e) {
    console.log(e)
    res.json({
      status: `error`,
      posts: ``
    })
  }
}

export const updatePost = (req, res) => {

}

export const deletePost = (req, res) => {

}
