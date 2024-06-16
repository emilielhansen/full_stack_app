// PostCard Container component
import Post from "./../models/post";
import { useEffect, useState } from "react";
import postService from "./../services/postService";
import PostCreate from './../components/PostCreate'
import PostCard from './../components/PostCard'
import User from "../models/user";
import userService from "../services/userService";

const PostCardContainer = () => {

  const [posts, setPosts] = useState<Post[]>([]); // State to store posts
  const [currentUser, setCurrentUser] = useState<User | null>(null); // State to store current user

  // Load posts and user when component mounts
  useEffect(() => {
    loadPost();
    loadUser();
  }, []);

  // Function to load posts
  const loadPost = async () => {
    const posts = await postService.getAll();
    // Sort posts by date in descending order
    const sortedPosts = posts.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
    setPosts(sortedPosts);
  };

  // Function to load current user
  const loadUser = async () => {
    const user = await userService.getCurrentUser();
    setCurrentUser(user);
  };

  // Function to delete a post
  const deletePost = async (id: string) => {
    await postService.delete(id);
    loadPost();
  };

  // Function to add a new post
  const addPost = async (content: string) => {
    const newPost = await postService.create(content);
    setPosts([newPost, ...posts]);
  };

  // Function to update a post
  const updatePost = async (id: string, content: string) => {
    const updatedPost = await postService.update(id, content);
    setPosts(posts.map(post => post._id === id ? updatedPost : post));
  };

  return (
    <>
      {/* Component to create a new post */}
      <PostCreate onAddPost={addPost} />
      {/* Component to display posts */}
      <PostCard posts={posts} onDeletePost={deletePost} onUpdatePost={updatePost} user={currentUser}/>
    </>
  );
};

export default PostCardContainer;