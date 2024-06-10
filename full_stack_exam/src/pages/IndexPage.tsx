import { ChakraProvider, Grid, GridItem, Heading, Box, Text, Image, Center, Button, Link } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const IndexPage = () => {
    const navigate = useNavigate();

    return (
        <>
        <Grid
        templateColumns={{base: '1fr'}}
        mt={8}
        mb={8}>
            <GridItem textAlign={{ base: 'center', md: 'left' }}>
                <Box>
                    <Center>
                        <Heading
                        as='h1' 
                        fontFamily='Chakra Petch'
                        color='#FBC027'
                        fontSize={50}
                        >Welcome to the BeeHive🐝
                        </Heading>
                    </Center>
                    <Center>
                        <Text
                        fontSize={20}
                        textAlign={{ base: 'center', md: 'left' }}
                        color="white">
                        Be a part of the hive and sign up now!
                        </Text>
                    </Center>

                    {/* Login button */}
                    <Box textAlign="center" mb={4} mt={8}>
                        <Button 
                            onClick={() => navigate('/login')} 
                            backgroundColor="#FFFFFF" 
                            color="black"
                            borderRadius="20px"
                            size = "lg"
                            fontFamily = "Chakra Petch"
                            width = {{base: "60%", md:"20%"}}
                            height="40px">
                            Login
                        </Button>

                        <Text
                            color="gray">
                            Don't have a user yet? <Link href="/signup" textDecoration="underline">Signup!</Link>
                        </Text>
                    </Box>
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