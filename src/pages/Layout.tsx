import { Box } from "@chakra-ui/react";
import NavBar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Box pb={5}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;