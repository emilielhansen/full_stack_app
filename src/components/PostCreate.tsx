// Create new post
import { Box, Input, Button, Flex, Center, Heading, } from '@chakra-ui/react';

const PostCreate = () => {
    return (
        <>
            <Center>
                <Box m={3} width={800}>
                <Heading pb={2}>
                    What is your bee?
                </Heading>
                    <Input
                        type="text"
                        name="username"
                        required
                        variant='white' />
                    <Flex justifyContent="flex-end">
                        <Button
                            mt={4}
                            type="submit"
                            variant='yellowSmall'
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

