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
    image,
    topicname,
    sessionid,
  } = req.body

  const accessTokenSecret = await User.findOne({ where: { token: req.headers.token } })
  if (accessTokenSecret) {
    try{
      let topicid = await getTopicID(topicname)
      const newPost = await Post.create({
        title: title,
        body: body,
        image: image,
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
  } else {
    res.json({
      status: `error`,
      code: `Authentication failed 403`
    })
  }
}

export const getPosts = async (req, res) => {
  const {sessionid} = req.body
  const accessTokenSecret = await User.findOne({ where: { token: req.headers.token } })
  if (accessTokenSecret) {
    try{
      const postsAll = await Post.findAll({raw: true, include: Topic})
      const posts = postsAll.map(post => {
        return({
          postid: post.postid,
          title: post.title,
          body: previewText(post.body, 30),
          image: String(post.image),
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
  } else {
    res.json({
      status: `error`,
      code: `Authentication failed 403`
    })
  }
  
}

export const getOnePost = async (req, res) => {
  const {postid} = req.body
  const accessTokenSecret = await User.findOne({ where: { token: req.headers.token } })
  if (accessTokenSecret) {
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
          image: String(postInfo.image),
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
  } else {
    res.json({
      status: `error`,
      code: `Authentication failed 403`
    })
  }
}

export const getPostsByTopic = async (req, res) => {
  const {topicname} = req.body
  const accessTokenSecret = await User.findOne({ where: { token: req.headers.token } })
  if (accessTokenSecret) {
    const topicid = await getTopicID(topicname)
    try{
      const postsByTopic = await Post.findAll({
        raw: true,
        where: {
          TopicTopicid: topicid
        },
        include: Topic,
      })
      const posts = postsByTopic.map(post => {
        return({
          postid: post.postid,
          title: post.title,
          body: previewText(post.body, 195),
          image: String(post.image),
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
  } else {
    res.json({
      status: `error`,
      code: `Authentication failed 403`
    })
  }
}

export const getUniqueTopic = async (req, res) => {
  const {sessionid} = req.body
  const accessTokenSecret = await User.findOne({ where: { token: req.headers.token } })
  if (accessTokenSecret) {
    try {
    const topics= await Topic.findAll({raw: true})
    const topicsArray = topics.map(topic => {
      return topic.topicname
    })
    res.json({
      status: `ok`,
      topics: topicsArray,
    })
    } catch (e) {
      console.log(e)
      res.json({
        status: `error`,
        posts: ``
      })
    }
  } else {
    res.json({
      status: `error`,
      code: `Authentication failed 403`
    })
  }
}

export const deletePost = (req, res) => {

}

export const updatePost = (req, res) => {

}
