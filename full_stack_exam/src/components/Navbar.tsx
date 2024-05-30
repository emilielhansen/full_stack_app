// Navigation bar

import React, { useState } from 'react';
import { Box, Flex, Link, Button, Avatar, Image } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';


const NavBar: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  return (
    <Box as="nav" bg="#181818" p={4} color="white" boxShadow='md' zIndex={999} >
      <Flex justify="space-between" align="center">
          <Link onClick={() => navigate('/')} boxSize="50px" fontSize="xl" fontWeight="bold">
            <Image src="src/assets/logo_icon.png"/>
          </Link>

        <Flex align="center">
          {isLoggedIn ? (<Avatar size="sm" name="Username" src="https://via.placeholder.com/32" mr={2} />
          ) : (
            <>
              <Button onClick={() => navigate('/login')}
              backgroundColor="#FFFFFF"
              colorScheme="gray"
              color="black"
              borderRadius="20px"
              size = "md"
              fontFamily = "Chakra Petch"
              mr={6}
              >
                Login
              </Button>
              <Button onClick={() => navigate('/signup')} 
              backgroundColor="#FBC027"
              colorScheme="yellow"
              color="black"
              borderRadius="20px"
              size = "md"
              fontFamily = "Chakra Petch"
              >
              Sign up
              </Button>
            </>

        )}
          
        </Flex>
      </Flex>
    </Box>
  );
};

export default NavBar;