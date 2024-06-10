import { ChakraProvider, Grid, GridItem, Heading, Box, Text, Image, Center } from '@chakra-ui/react';

const IndexPage = () => {
    return (
        <>
        <Grid
        templateColumns={{base: '1fr'}}>
            <GridItem>
                <Box>
                    <Center>
                        <Heading
                        as='h1' 
                        fontFamily='Chakra Petch'
                        color='#FBC027'
                        fontSize={50}
                        mt='7rem'
                        >Welcome to the BeeHive🐝
                        </Heading>
                    </Center>
                    <Center>
                        <Text
                        fontSize={20}
                        color={'white'}
                        fontFamily='Roboto'
                        >
                        Be a part of the hive and sign up now!
                        </Text>
                    </Center>
                </Box>
            </GridItem>
            <GridItem>
                <Center>
                    <Image src="src/assets/logo.png" w='20%' pt={30}/>
                </Center>
            </GridItem>
        </Grid>
        </>
    );
};

export default IndexPage