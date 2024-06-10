import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, ColorModeScript  } from '@chakra-ui/react';
import router from "./router"
import theme from "./theme";
import { RouterProvider } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
)
