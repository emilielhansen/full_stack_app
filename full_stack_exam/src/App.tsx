import SignUpForm from "./components/SignUpForm";
import './App.css'
import { ChakraProvider, Grid, GridItem } from '@chakra-ui/react';
import NavBar from "./components/Navbar";
import LoginForm from "./components/LoginForm";

function App() {

  const handleSignUpSuccess = () => {
    alert('Sign up successful!'); // You can replace this with any desired action
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
          <GridItem gridArea={"nav"}>
            <NavBar />
          </GridItem>
          <GridItem  gridArea={"main"}>
            <SignUpForm onSignUpSuccess={handleSignUpSuccess} />
            <LoginForm />
          </GridItem>
      </Grid>
    </ChakraProvider>
  )
}

export default App
