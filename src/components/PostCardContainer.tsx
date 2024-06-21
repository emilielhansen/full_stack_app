// PostCard Container component
import Post from "./../models/post";
import { useEffect, useState } from "react";
import postService from "./../services/postService";
import PostCreate from './../components/PostCreate'
import PostCard from './../components/PostCard'
import User from "../models/user";
import userService from "../services/userService";
import { useParams } from "react-router-dom";

const PostCardContainer = () => {

  const [posts, setPosts] = useState<Post[]>([]); // State to store posts
  const { userId } = useParams<{ userId: string }>(); // Extract userId from URL using useParams
  const [user, setUser] = useState<User | null>(null); // State to hold user data
  const [loading, setLoading] = useState<boolean>(true); // State to track loading state
  const [error, setError] = useState<string | null>(null); // State to store error messages

  // Load posts and user when component mounts
  useEffect(() => {
    loadPost();
    if (userId) {
        loadUser(userId); // Fetch user data when userId changes
    }
}, [userId]);

  // Function to load posts
  const loadPost = async () => {
    const posts = await postService.getAll();
    // Sort posts by date in descending order
    const sortedPosts = posts.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
    setPosts(sortedPosts);
  };
  
  // Function to load current user
  const loadUser = async (userId: string) => {
    try {
        const fetchedUser = await userService.get(userId); // Fetch user data from userService
        setUser(fetchedUser); // Set fetched user data to state
    } catch (error) {
        console.error("Failed to fetch user", error);
        setError("Failed to fetch user"); // Set error state if user fetching fails
    } finally {
        setLoading(false); // Set loading state to false after fetching user data
    }
};

// Render loading message while fetching user data
if (loading) {
    return <p>Loading...</p>;
}

// Render error message if there's an error fetching user data
if (error) {
    return <p>{error}</p>;
}

// Render message if user is not found
if (!user) {
    return <p>User not found</p>;
}


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
      <PostCard posts={posts} onDeletePost={deletePost} onUpdatePost={updatePost} user={user}/>
    </>
  );
};

export default PostCardContainer;