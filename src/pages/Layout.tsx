// Page layout
import { Box } from "@chakra-ui/react";
import NavBar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import App from "../App";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Box pb={5}>
      {/* placeholder for child component that will be rendered */}
        <Outlet />
        <App />
      </Box>
    </>
  );
};

export default Layout;