import SignUpForm from "./components/SignUpForm";
import './App.css'
import { ChakraProvider, Grid, GridItem } from '@chakra-ui/react';
import NavBar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import EditProfileForm from "./components/EditProfileForm";

function App() {

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

          {/* Signup form */}
          <GridItem  gridArea={"main"}>
            {/* {<SignUpForm onSignUpSuccess={function (): void {
            throw new Error("Function not implemented.");
          } }/> } */}
          </GridItem>

          {/* Login form */}
          <GridItem>
            {/* {<LoginForm onLoginSuccess={function (): void {
              throw new Error("Function not implemented.");
            } } />} */}
          </GridItem>

          {/* PostFeed */}
          <GridItem>
          {/* {<EditProfile />} */}
          </GridItem>

      </Grid>
    </ChakraProvider>
  )
}

export default App
