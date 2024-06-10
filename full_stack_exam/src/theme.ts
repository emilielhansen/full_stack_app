import { extendTheme, type ThemeConfig } from '@chakra-ui/react'


const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const breakpoints = {
  base: '0em', // 0px
  sm: '30em', // ~480px. em is a relative unit and is dependant on the font-size.
  md: '48em', // ~768px
  lg: '62em', // ~992px
  xl: '80em', // ~1280px
  '2xl': '96em', // ~1536px
}


const theme = extendTheme({
    config,
    breakpoints,
    colors: {
      gray: {
        50: "#f9f9f9",
        100: "#ededed",
        200: "#d3d3d3",
        300: "#b3b3b3",
        400: "#a0a0a0",
        500: "#898989",
        600: "#6c6c6c",
        700: "#202020",
        800: "#121212",
        900: "#111",
      },
    },
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