// Profile page header with profile picture and name

import { Box, Heading, Avatar, Text } from "@chakra-ui/react";
import PostCreate from "./PostCreate";
import PostCard from "./PostCard";

//ProfilePage.tsx

const MyProfile = () => {
    return (
        <Box>
            <Box bg={"#FBC027"} mt={-5} h={300} width="100%" position="relative" zIndex={-1} margin={0}>
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
            <Box p={5}>
                <Heading 
                    mt={5}
                    fontFamily = "Chakra Petch"
                    color= "white"
                    size = "lg"
                    >Julie Elmgaard Jensen
                </Heading>
                <Text color="grey">@julieelmgaard</Text>
                <Text color="grey">Member since Date</Text>
                <Text color="grey">150 bee's</Text>
            </Box>
            <Box mt={3}>
                <PostCreate></PostCreate>
                <PostCard></PostCard>
            </Box>
        </Box>
    );
};

export default MyProfile