import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

//kopieret fra hans - skal rettes til
interface Props {
  children: ReactNode;
}

const PostCardContainer = ({ children }: Props) => {
  return (
    <Box
      _hover={{
        boxShadow: "0 0 10px 1px rgba(0,0,0,0.2)",
        transform: "scale(1.05)",
        transition: "all 0.3s",
      }}
      overflow="hidden"
      borderRadius={10}
    >
      {children}
    </Box>
  );
};

export default PostCardContainer;