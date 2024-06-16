// Error page
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/Navbar";
import { Box, Heading, Text } from "@chakra-ui/react";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Box padding={4}>
        <Heading>You have been stung...</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "Page not found"
            : "An unexpected error occurred."}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;