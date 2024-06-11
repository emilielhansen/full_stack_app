
import Post from "./../models/post";
import { useEffect, useState } from "react";
import postService from "./../services/postService";
import PostCreate from './../components/PostCreate'
import PostCard from './../components/PostCard'


const PostCardContainer = () => {

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
      <PostCard posts={posts} onDeletePost={deletePost} onUpdatePost={updatePost}/>
        </>
    );
  };
  
  export default PostCardContainer;