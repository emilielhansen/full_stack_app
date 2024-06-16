//Profile info from logged in user
import { Box, Heading, Avatar, Text } from "@chakra-ui/react";
import User from "../models/user";

// Define the Props interface to type-check the user prop
interface Props {
    user: User;
}

// MyProfile component that accepts a user prop
const MyProfile = ({ user }: Props) => {
    return (
        <>
            {/* Main container box */}
            <Box>
                {/* Background section with avatar */}
                <Box 
                    key={user._id} 
                    bg={"#FBC027"} 
                    mt={-5} 
                    h={300} 
                    width="100%" 
                    position="relative" 
                    zIndex={-1} 
                    margin={0}
                >
                    {/* User avatar */}
                    <Avatar
                        boxSize="150px"
                        src="https://via.placeholder.com/"
                        m={5}
                        position="absolute"
                        bottom={0}
                        left={0}
                        maxWidth="100%"
                        maxHeight="100%" 
                    />
                </Box>
                {/* User information section */}
                <Box p={5}>
                    {/* User full name */}
                    <Heading mt={5} size="lg">{user.fullname}</Heading>
                    {/* User username */}
                    <Text color="grey">@{user.username}</Text>
                    {/* User creation date */}
                    <Text color="grey">Member since {user.createdAt}</Text>
                </Box>
            </Box>
        </>
    );
};

export default MyProfile;