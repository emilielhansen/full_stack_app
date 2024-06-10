// Create new post
import { Box, Input, Button, Flex, Center, } from '@chakra-ui/react';

const PostCreate = () => {
    return (
    <>
        <Center>
        <Box m={3} width={800} >
                <Input
                    type="text"
                    name="username"
                    required
                    backgroundColor="white"
                    color="black"
                    borderRadius="2"
                    fontFamily='Roboto'
                />
                <Flex justifyContent="flex-end">
                    <Button 
                        mt={4}
                        type="submit"
                        backgroundColor="#FBC027"
                        colorScheme="yellow"
                        color="black"
                        borderRadius="20"
                        size = "lg"
                        fontFamily = "Chakra Petch"
                    >
                    Bee
                    </Button>
                </Flex>
            </Box>
        </Center>
</>
    );
};
export default PostCreate;

