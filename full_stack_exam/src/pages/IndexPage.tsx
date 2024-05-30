import { ChakraProvider, Grid, GridItem, Heading, Box, Text, Image, Center } from '@chakra-ui/react';

const IndexPage = () => {
    return (
        <>
        <Grid
        templateColumns='1fr 1fr'>
            <GridItem>
            <Box>
                <Heading 
                as='h1'
                mt={250} 
                fontFamily='Chakra Petch'
                color='#FBC027'
                fontSize={50}
                 >Welcome to the BeeHive🐝</Heading>
                <Text
                 fontSize={20}>
                    Be a part of the hive and sign up now!
                </Text>
            </Box>
            </GridItem>
            <GridItem>
                <Center>
                <Image src="src/assets/logo.png" w='50%' pt={100}/>
                </Center>
            </GridItem>
        </Grid>
        </>
    );
};

export default IndexPage