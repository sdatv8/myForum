import ErrorPage from "../pages/ErrorPage";
import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";
import NewPostPage from "../pages/NewPostPage";
import PostByTopicPage from "../pages/PostByTopicPage";
import PostIdPage from "../pages/PostIdPage";



export const privateRoutes = [
  {path: '*', component: <ErrorPage/>},
  {path: '/', component: <MainPage/>},
  {path: '/newPost', component: <NewPostPage/>},
  {path: '/:topic', component: <PostByTopicPage/>},
  {path: '/post/:postId', component: <PostIdPage/>},
]

export const publicRoutes = [
  {path: '/login', component: <LoginPage/>},
  {path: '*', component: <LoginPage/>},
]
