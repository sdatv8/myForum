import http, { request } from 'http'
import cors from 'http-cors'


const PORT = '3001'
let responce = {}

let topics = ['Python', 'JavaScirpt', 'Java']

let comments = [
  {id: 1, userName: 'Mikle', date: '12.07.2021', body: 'hello!'}
]


let posts = [
  {id: 1, topic:'Python', title: 'TilteName1', body: 'description', update: new Date('December 17')},
  {id: 2, topic:'Python', title: 'TilteName2', body: 'description', update: new Date('December 17')},
  {id: 3, topic:'Python', title: 'TilteName3', body: 'description', update: new Date('December 17')},
  {id: 4, topic:'Python', title: 'TilteName4', body: 'description', update: new Date('December 17')},
  {id: 5, topic:'JavaScirpt', title: 'TilteName5', body: 'description',  update: new Date('December 17')},
  {id: 6, topic:'JavaScirpt', title: 'TilteName6', body: 'description',  update: new Date('December 17')},
  {id: 7, topic:'JavaScirpt', title: 'TilteName7', body: 'description',  update: new Date('December 17')},
  {id: 8, topic:'JavaScirpt', title: 'TilteName8', body: 'description',  update: new Date('December 17')},
  {id: 9, topic:'Java', title: 'TilteName9', body: 'description', update: new Date('December 17')},
  {id: 10, topic:'Java', title: 'TilteName10', body: 'description', update: new Date('December 17')},
  {id: 11, topic:'Java', title: 'TilteName11', body: 'description', update: new Date('December 17')},
  {id: 12, topic:'Java', title: 'TilteName12', body: 'description', update: new Date('December 17')},
]

function serverForum(){

    const server = http.createServer((req, res) => {
      if (cors(req, res)) return cors
      console.log(req.url, req.method)

      if (req.method === 'GET') {
        if (req.url === '/posts'){
          res.setHeader('Content-type', 'application/json')
          res.end(JSON.stringify(posts))
        } 
        else if (req.url === '/titles') {
          const titles = posts.map(post => post.title)
          res.setHeader('Content-type', 'application/json')
          res.end(JSON.stringify(titles))
        } 
        else if (req.url === '/') {
          res.setHeader('Content-type', 'application/json')
          res.end(JSON.stringify(posts))
        } 
        else if (req.url === '/topics') {
          res.setHeader('Content-type', 'application/json')
          res.end(JSON.stringify(topics))
        }
        else if (topics.includes(req.url.slice(1))) {
          let postByTopic = posts.filter(post => post.topic === req.url.slice(1))
          res.setHeader('Content-type', 'application/json')
          res.end(JSON.stringify(postByTopic))
        } 
        else if (req.url.match(/\/post\/[0-9]+/)) {
          const id = req.url.match(/[0-9]+/)[0]
          const post = posts.filter(post => post.id == id)
          res.setHeader('Content-type', 'application/json')
          res.end(JSON.stringify(post))
        } 
        else if (req.url.match(/\/comment\/[0-9]+/)) {
          const id = req.url.match(/[0-9]+/)[0]
          const comment = comments.filter(comment => comment.id == id)
          res.setHeader('Content-type', 'application/json')
          res.end(JSON.stringify(comment))
        } else {
          res.end('Bad request 404')
        }
      } else if (req.method === 'POST'){
          let body = ''    
          req.on('data', chunk => {
            body += chunk.toString()
          })
          req.on('end', () => {
            let params = JSON.parse(body)
            if (req.url === '/setNewPost') {
              let post = params.content
              console.log(post)
              post.id = posts.length + 1
              post.update = new Date()
              posts.push(post)
              res.end('OK')
            } else if (req.url === '/setComment') {
              let comment = params.content
              console.log(comment)
              comment.date = new Date()
              comments.push({id: Number(comment.id), userName: comment.userName, date: comment.date, body: comment.body})
              res.end('OK')
            }
          })
        }
    })
    
    server.listen(PORT, 'localhost', (error) => {
      error ? console.log(error) : console.log(`listening port ${PORT}`)
    })
}

serverForum()



// switch (req.url) {
//   case '/posts':
//     res.setHeader('Content-type', 'application/json')
//     res.end(JSON.stringify(posts))
//   case '/titles':
//     const titles = posts.map(post => post.title)
//     res.setHeader('Content-type', 'application/json')
//     res.end(JSON.stringify(titles))
//   case '/':
//     res.setHeader('Content-type', 'application/json')
//     res.end(JSON.stringify(posts))
//   case '/topics':
//     res.setHeader('Content-type', 'application/json')
//     res.end(JSON.stringify(topics))
//   case topics.includes(req.url.slice(1)):
//     let postByTopic = posts.filter(post => post.topic === req.url.slice(1))
//     res.setHeader('Content-type', 'application/json')
//     res.end(JSON.stringify(postByTopic))
//   case req.url.match(/\/post\/[0-9]+/):
//     const id = req.url.match(/[0-9]+/)[0]
//     const post = posts.filter(post => post.id == id)
//     res.setHeader('Content-type', 'application/json')
//     res.end(JSON.stringify(post))
//   default:
//     res.end('Bad request 404')
// }