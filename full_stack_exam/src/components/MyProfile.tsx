// Profile page header with profile picture and name

import { Box, Heading, Avatar, Text, Input, Button, Flex } from "@chakra-ui/react";
import { relative } from "path";

//ProfilePage.tsx

const MyProfile = () => {
    return (
        <Box>
            <Box bg={"#FBC027"} mt={-5} h={500} width="100%" position="relative" zIndex={-1} >
                <Avatar 
                    boxSize="150px" 
                    src="https://via.placeholder.com/32" 
                    m={5} 
                    position="absolute" 
                    bottom={0} 
                    left={0} 
                    maxWidth="100%" 
                    maxHeight="100%"
                    /> 
            </Box>
            <Box>
                <Heading 
                    mt={7}
                    fontFamily = "Chakra Petch"
                    >Julie Elmgaard Jensen
                </Heading>
                <Text color="grey">@julieelmgaard</Text>
                <Text color="grey">Member since Date</Text>
                <Text color="grey">150 bee's</Text>
            </Box>
            <Box mt={3}>
                <Input
                    type="text"
                    name="username"
                    value="What is your update?"
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
        </Box>
    );
};

export default MyProfile