// Create post component
import { Box, Input, Button, Flex, Center, Heading } from '@chakra-ui/react';
import { useState } from 'react';

// Props interface for the PostCreate component
interface Props {
    onAddPost: (content: string) => void;
}

const PostCreate = ({ onAddPost }: Props) => {
    const [content, setContent] = useState(""); // State to store the content of the new post

    // Function to handle form submission
    const submitForm = (e: React.FormEvent) => {
        e.preventDefault(); // Prevent default form submission behavior
        if (!content) return; // Check if content is empty
        onAddPost(content); // Call the onAddPost function passed via props with the content
        setContent(""); // Clear the content input
    };

    return (
        <>
            {/* Centered container for creating a new post */}
            <Center>
                <Box m={3}  width={{ base: '300px', md: '550px', lg:'800px'}}>
                    {/* Label for the content input */}
                    <label htmlFor="content">
                        <Heading
                            pb={2}
                            fontFamily='Chakra Petch'
                            fontSize={{ base: '20', md: '25', lg: '35' }}
                        >
                            What do you wanna bee about?
                        </Heading>
                    </label>
                    {/* Form for submitting a new post */}
                    <form onSubmit={submitForm}>
                        {/* Input field for the content */}
                        <Input
                            onChange={(e) => setContent(e.target.value)}
                            type="text"
                            name="username"
                            id="content"
                            value={content}
                            required
                            variant='white'
                        />
                        {/* Submit button */}
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


