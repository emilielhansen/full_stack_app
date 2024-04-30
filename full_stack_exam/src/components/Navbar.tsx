// Navigation bar

import React from 'react';
import { Box, Flex, Link, Button, Avatar, Image } from '@chakra-ui/react';

const NavBar: React.FC = () => {
  return (
    <Box as="nav" bg="#181818" p={4} color="white" boxShadow='md'>
      <Flex justify="space-between" align="center">
        {/* Logo (Replace with your actual logo) */}
          <Link boxSize="50px" href="#" fontSize="xl" fontWeight="bold">
            <Image src="src/assets/logo_icon.png"/>
          </Link>

        {/* User Profile */}
        <Flex align="center">

          {/* Replace the Avatar component with your actual user picture */}
          <Avatar size="sm" name="Username" src="https://via.placeholder.com/32" mr={2} />
        </Flex>
      </Flex>
    </Box>
  );
};

export default NavBar;