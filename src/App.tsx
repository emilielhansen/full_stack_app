import SignUpForm from "./components/SignUpForm";
import './App.css'
import { ChakraProvider, Grid, GridItem } from '@chakra-ui/react';
import NavBar from "./components/Navbar";

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
      </Grid>
    </ChakraProvider>
  )
}

export default App
