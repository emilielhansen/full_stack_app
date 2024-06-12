// Create new post
import { Box, Input, Button, Flex, Center, Heading, } from '@chakra-ui/react';
import { useState } from 'react';

    interface Props {
        onAddPost: (content: string) => void;
    }

    const PostCreate = ({ onAddPost }: Props) => {
        const [content, setContent] = useState("");
      
    const submitForm = (e: React.FormEvent) => {
        e.preventDefault();
        if (!content) return;
        onAddPost(content);
        setContent("");
        };

    return (
        <>
            <Center>
                <Box m={3} width={800}>
                <label htmlFor="content">
                <Heading 
                pb={2}
                fontFamily='Chakra Petch'
                fontSize={{ base: '20', md: '25', lg:'35'}}>
                    What do you wanna bee about?
                </Heading>
                </label>
                <form onSubmit={submitForm}>
                    <Input
                        onChange={(e) => setContent(e.target.value)}
                        type="text"
                        name="username"
                        id = "content"
                        value = {content}
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
                </form>
                </Box>
            </Center>
        </>
    );
};

export default PostCreate;

