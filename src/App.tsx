import SignUpForm from "./components/SignUpForm";
import './App.css'
import { ChakraProvider, Grid, GridItem } from '@chakra-ui/react';
import NavBar from "./components/Navbar";
import Post from "./models/post";
import { useEffect, useState } from "react";
import postService from "./services/postService";

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
  
    <ChakraProvider>
      <Grid
            templateAreas={{
              base: `"nav" "main"`,
              lg: `"nav`,
            }}
            templateRows={{
              base: "1fr 1fr"
            }}
            templateColumns={{
              base: "1fr",
              lg: "1fr",
            }}>

          {/* Navbar */}
          <GridItem gridArea={"nav"}>
            <NavBar />
          </GridItem>
      </Grid>
    </ChakraProvider>
  )
}

export default App
