import './App.css'
import { ChakraProvider, Grid, GridItem } from '@chakra-ui/react';
import NavBar from "./components/Navbar";
import Post from "./models/post";
import { useEffect, useState } from "react";
import postService from "./services/postService";
import PostCreate from './components/PostCreate'
import PostCard from './components/PostCard'

function App() {

  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    loadPost();
  }, []);

  const loadPost = async () => {
    const posts = await postService.getAll();
    setPosts(posts);
  };

  const deletePost = async (id: string) => {
    await postService.delete(id);
    loadPost();
  };

  const addPost = async (title: string) => {
    const newPost = await postService.create(title);
    setPosts([...posts, newPost]);
  };

  return (
    <>
      <PostCreate onAddPost={addPost} />
      <PostCard posts={posts} onDeletePost={deletePost} onUpdatePost={updatePost}/>
    </>
  )
}

export default App
