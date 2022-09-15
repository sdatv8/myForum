
export default function getUniqueTopics (posts) {
    let toptics = posts.map(post => post.topic)
    let uniqTopic = [...new Set(toptics)]
    return(uniqTopic)
}
