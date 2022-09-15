import { Topic } from "../db/models/topicModel.js"

export default async function getTopicID (topicname) {
  let topic = await Topic.findOne({ where: { topicname: topicname } })
    if (topic === null) {
      await Topic.create({
        topicname
      })
      topic = await Topic.findOne({ where: { topicname: topicname } })
    }
    return (topic.dataValues.topicid)
}
