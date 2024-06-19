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
                    mb={5} 
                    width="100%" 
                    position="relative" 
                    zIndex={-1} 
                    margin={0}
                >
                {/* User information section */}
                <Box p={5} m={5}>
                    {/* User full name */}
                    <Heading size="lg">{user.fullname}</Heading>
                    {/* User username */}
                    <Text color="white">@{user.username}</Text>
                    {/* User creation date */}
                    <Text color="white">Member since {user.createdAt}</Text>
                </Box>
                </Box>
            </Box>
        </>
    );
};

export default MyProfile;