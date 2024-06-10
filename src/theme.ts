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
      yellow: {
        100: '#FFDE89',
        400: '#FFD055',
        900: "#FBC027",
      },
      schemeYellow: {
        100: '#FFDE89',   // provided color
        200: '#FBC027',   // provided color
        800: '#FBC027',   // provided color
      },
      red: {
        400: '#FF5038', 
        900: '#FB4027',
      },
      schemeRed: {
        100: '#FF5038',   // light red
        200: '#FF5038',   // lighter red
        800: '#FB4027',   // lighter red
      },  
    },

    components: {
      Input: {
        variants: {
          white: {
            field: {
              backgroundColor: "white",
              color: "black",
              borderRadius: "2",
              fontFamily: 'Roboto',
            },
          },
        },
      },
      Button: {
        baseStyle: {
          fontFamily: 'Chakra Petch',
          borderRadius: '20px',
        },
        variants: {
          yellow: {
            bg: 'yellow.900', // Darkest shade
            color: 'black',
            _hover: {
              bg: 'yellow.400', // Slightly lighter on hover
            },
            width:"50%",
            height:"40px"
          },
          red: {
            bg: 'red.900', // Darkest shade
            color: 'black',
            _hover: {
              bg: 'red.400', // Slightly lighter on hover
            },
            width:"50%",
            height:"40px"
          },
          white: {
            bg: 'white', // Darkest shade
            color: 'black',
            _hover: {
              bg: 'yellow.100', // Slightly lighter on hover
            },
            width:"50%",
            height:"40px"
          },
          yellowSmall: {
            bg: 'yellow.900', // Darkest shade
            color: 'black',
            _hover: {
              bg: 'yellow.400', // Slightly lighter on hover
            },
          },
          redSmall: {
            bg: 'red.900', // Darkest shade
            color: 'black',
            _hover: {
              bg: 'red.400', // Slightly lighter on hover
            },
          },
        },
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