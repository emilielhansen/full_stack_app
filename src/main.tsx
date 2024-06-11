import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, ColorModeScript  } from '@chakra-ui/react';
import router from "./router"
import theme from "./theme";
import { RouterProvider } from "react-router-dom";
import Fonts from './fonts';
import NavBar from './components/Navbar';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <Fonts />
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
)
