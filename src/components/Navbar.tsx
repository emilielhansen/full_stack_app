import React, { useState } from 'react';
import { Box, Flex, Link, Button, Avatar, Image, Menu, MenuButton, MenuList, MenuItem, MenuDivider, IconButton, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const NavBar: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true); //State is set to true to see the logged in state
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  // User logout function
  const handleLogout = () => {
    // Add some more, like removing session
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <Box as="nav" bg="#181818" p={4} color="white" boxShadow="md" zIndex={999}>
      <Flex justify="space-between" align="center">
        {/* Logo */}
        <Link onClick={() => navigate('/')} boxSize="50px" fontSize="xl" fontWeight="bold">
          <Image src="src/assets/logo_icon.png" />
        </Link>

        {/* Desktop Navigation */}
        <Flex align="center" display={{ base: 'none', md: 'flex' }}>
          {isLoggedIn ? (
            // Logged-in user avatar and dropdown menu
            <Menu>
              <MenuButton as={Button} backgroundColor="transparent" border="none" _hover={{ backgroundColor: 'transparent' }} _active={{ backgroundColor: 'transparent' }} p={0} m={0}>
                <Avatar size="sm" name="Username" src="https://via.placeholder.com/32" />
              </MenuButton>
              <MenuList color="white" borderRadius="8px" borderColor="transparent" mt={2}>
                <MenuItem icon={<FaUser />} onClick={() => navigate('/profile')}>Profile</MenuItem>
                <MenuItem icon={<FaCog />} onClick={() => navigate('/edit-profile')}>Settings</MenuItem>
                <MenuDivider />
                <MenuItem icon={<FaSignOutAlt />} onClick={handleLogout}>Logout</MenuItem>
              </MenuList>
            </Menu>
          ) : (
            // Buttons for not logged in users
            <>
              <Button onClick={() => navigate('/login')} variant='white' mr={6}>Login</Button>
              <Button onClick={() => navigate('/signup')} variant='yellow'>Sign up</Button>
            </>
          )}
        </Flex>

        {/* Mobile Navigation */}
        <IconButton aria-label="Open menu" icon={<HamburgerIcon color="#FBC027" boxSize={8} />} variant="unstyled" display={{ base: 'flex', md: 'none' }} onClick={onOpen} />
      </Flex>

      {/* Drawer for mobile navigation */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="#181818" color="white">
          <DrawerCloseButton />
          {/* Logged-in user header */}
          {isLoggedIn && (
            <DrawerHeader>
              <Flex align="center">
                <Avatar size="sm" name="Username" src="https://via.placeholder.com/32" mr={2} />
                <Box>Username</Box>
              </Flex>
            </DrawerHeader>
          )}
          <DrawerBody>
            {/* Drawer links and buttons */}
            {isLoggedIn ? (
              // Drawer links for logged-in users
              <>
                <Link onClick={() => { navigate('/profile'); onClose(); }} mb={4} display="block">
                  <Flex align="center">
                    <FaUser /><Box ml={2}>Profile</Box>
                  </Flex>
                </Link>
                <Link onClick={() => { navigate('/edit-profile'); onClose(); }} mb={4} display="block">
                  <Flex align="center">
                    <FaCog /><Box ml={2}>Settings</Box>
                  </Flex>
                </Link>
                <Link onClick={() => { handleLogout(); onClose(); }} mb={4} display="block">
                  <Flex align="center">
                    <FaSignOutAlt /><Box ml={2}>Logout</Box>
                  </Flex>
                </Link>
              </>
            ) : (
              // Drawer buttons for not logged in users
              <>
                <Button onClick={() => { navigate('/login'); onClose(); }} backgroundColor="#FFFFFF" colorScheme="gray" color="black" borderRadius="20px" size="md" fontFamily="Chakra Petch" mb={4} w="100%">Login</Button>
                <Button onClick={() => { navigate('/signup'); onClose(); }} backgroundColor="#FBC027" colorScheme="yellow" color="black" borderRadius="20px" size="md" fontFamily="Chakra Petch" w="100%">Sign up</Button>
              </>
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default NavBar;
