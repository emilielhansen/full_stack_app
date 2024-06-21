//Profile info from logged in user
import { Box, Heading, Avatar, Text } from "@chakra-ui/react";
import { Box, Heading, Text } from "@chakra-ui/react";
import sanitizeHtml from 'sanitize-html';
import User from "../models/user";
import { format } from 'date-fns';
import { da } from 'date-fns/locale';

// Define the Props interface to type-check the user prop
interface Props {
    user: User;
}

// MyProfile component that accepts a user prop
const MyProfile = ({ user }: Props) => {

    const sanitizedFullName = sanitizeHtml(user.fullname);
    const sanitizedUsername = sanitizeHtml(user.username);
    const sanitizedCreatedAt = sanitizeHtml(format(new Date(user.createdAt), 'dd. MMM yyyy', { locale: da }));

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
                    <Heading size="lg">{sanitizedFullName}</Heading>
                    {/* User username */}
                    <Text color="white">@{sanitizedUsername}</Text>
                    {/* User creation date */}
                    <Text color="white">Member since {sanitizedCreatedAt}</Text>

                </Box>
            </Box>
        </>
    );
};

export default MyProfile;
