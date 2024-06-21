// Index page
import { Grid, GridItem, Heading, Box, Text, Image, Center, Button, Link } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const IndexPage = () => {
    const navigate = useNavigate();

    return (
        <Grid
        templateColumns={{base: '1fr'}}
        mt={8}
        mb={8}>
            <GridItem>
                <Center>
                    <Image src={logo} w='20%' pt={30}/>
                </Center>
            </GridItem>

            <GridItem textAlign={{ base: 'center', md: 'left' }}>
                <Box>
                    <Center>
                        <Heading
                        as='h1' 
                        fontFamily='Chakra Petch'
                        color='yellow.900'
                        fontSize={{ base: '30', md: '50' }}
                        px={{ base: '10' }}
                        >Welcome to the BeeHive🐝
                        </Heading>
                    </Center>
                    <Center>
                        <Text
                        fontSize={{ base: '15', md: '20' }}
                        textAlign={{ base: 'center', md: 'left' }}
                        color="white">
                        Be a part of the hive and sign up now!
                        </Text>
                    </Center>

                    {/* Login button */}
                    <Box textAlign="center" mb={4} mt={8}>
                        <Button 
                            onClick={() => navigate('/login')} 
                            variant='yellow'
                            width = {{base: "60%", md:"20%"}}
                            >
                            Login
                        </Button>

                        <Text
                            color="gray"
                            fontSize={{ base: '12', md: '15' }}
                            >
                            Don't have a user yet? <Link onClick={() => navigate('/signup')} textDecoration="underline">Signup!</Link>
                        </Text>
                    </Box>
                </Box>
            </GridItem>
        </Grid>
    );
};

export default IndexPage
