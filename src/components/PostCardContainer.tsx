
import Post from "./../models/post";
import { useEffect, useState } from "react";
import postService from "./../services/postService";
import PostCreate from './../components/PostCreate'
import PostCard from './../components/PostCard'
import User from "../models/user";
import userService from "../services/userService";

const PostCardContainer = () => {

    const [posts, setPosts] = useState<Post[]>([]);
    const [currentUser, setCurrentUser] = useState<User | null>(null);

    useEffect(() => {
      loadPost();
      loadUser();
    }, []);
  
    const loadPost = async () => {
      const posts = await postService.getAll();
      setPosts(posts);
    };

    const loadUser = async () => {
      const user = await userService.getCurrentUser();
      setCurrentUser(user);
    }
  
    const deletePost = async (id: string) => {
      await postService.delete(id);
      loadPost();
    };
  
    const addPost = async (content: string) => {
      const newPost = await postService.create(content);
      setPosts([...posts, newPost]);
    };
  
    const updatePost = async (id: string, content: string) => {
      const newPost = await postService.update(id, content);
      setPosts([...posts, newPost]);
    };
    return (
        <>
      <PostCreate onAddPost={addPost} />
      <PostCard posts={posts} onDeletePost={deletePost} onUpdatePost={updatePost} user={currentUser}/>
        </>
    );
  };
  
  export default PostCardContainer;