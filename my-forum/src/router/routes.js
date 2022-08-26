import PostListByTopic from "../component/PostListByTopic";
import ErrorPage from "../pages/ErrorPage";
import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";
import NewPost from "../pages/NewPostPage";
import PostIdPage from "../pages/PostIdPage";



export const privateRoutes = [
  {path: '*', component: <ErrorPage/>},
  {path: '/', component: <MainPage/>},
  {path: '/newPost', component: <NewPost/>},
  {path: '/:topic', component: <PostListByTopic/>},
  {path: '/post/:postId', component: <PostIdPage/>},
]

export const publicRoutes = [
  {path: '/login', component: <LoginPage/>},
  {path: '*', component: <LoginPage/>},
]
