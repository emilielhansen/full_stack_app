import { Box, Heading, Avatar, Text } from "@chakra-ui/react";
import User from "../models/user";

interface Props {
    user: User;
}

const MyProfile = ({ user }: Props) => {

    return (
        <>
        <Box>
            <Box key={user._id} bg={"#FBC027"} mt={-5} h={300} width="100%" position="relative" zIndex={-1} margin={0}>
                <Avatar
                    boxSize="150px"
                    src="https://via.placeholder.com/"
                    m={5}
                    position="absolute"
                    bottom={0}
                    left={0}
                    maxWidth="100%"
                    maxHeight="100%" />
            </Box>
            <Box p={5}>
                <Heading
                    mt={5}
                    size="lg"
                >{user.fullname}
                </Heading>
                <Text color="grey">@{user.username}</Text>
                <Text color="grey">Member since {user.createdAt}</Text>
            </Box>
        </Box>
        </>
    );
};

export default MyProfile