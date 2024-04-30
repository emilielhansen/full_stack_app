import { extendTheme } from "@chakra-ui/react";
import Fonts from "./fonts";

const theme = extendTheme({
    textStyles: {
        input: "Chakra Petch"
    },
    styles: {
      global: () => ({
        body: {
          bg:"#1E1E1E"
        },
        fonts: {
            heading: "Chakra Petch",
            body: "Roboto",
            FormLabel: "Roboto",
            Button: "Chakra Petch",
        },
      }),
    },
  });


export default theme;