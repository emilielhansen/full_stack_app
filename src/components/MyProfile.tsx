import { Box, Heading, Text } from "@chakra-ui/react";
import sanitizeHtml from 'sanitize-html';
import User from "../models/user";

// Define the Props interface to type-check the user prop
interface Props {
    user: User;
}

// MyProfile component that accepts a user prop
const MyProfile = ({ user }: Props) => {
    // Sanitize user inputs
    const sanitizedFullName = sanitizeHtml(user.fullname);
    const sanitizedUsername = sanitizeHtml(user.username);
    const sanitizedCreatedAt = sanitizeHtml(user.createdAt);

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
                    <Heading size="lg">Full name: {sanitizedFullName}</Heading>
                    {/* User username */}
                    <Text color="white">Username @{sanitizedUsername}</Text>
                    {/* User creation date */}
                    <Text color="white">Member since {sanitizedCreatedAt}</Text>
                </Box>
                </Box>
            </Box>
        </>
    );
};

export default MyProfile;
