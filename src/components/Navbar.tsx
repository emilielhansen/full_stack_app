// Navbar component
import React, { useState } from 'react';
import { Box, Flex, Link, Button, Avatar, Image, Menu, MenuButton, MenuList, MenuItem, MenuDivider, IconButton, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import logo_icon from '../assets/logo_icon.png';

const NavBar: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // State to manage login status
  const { isOpen, onOpen, onClose } = useDisclosure(); // Chakra UI hook to manage Drawer state
  const navigate = useNavigate(); // Hook to navigate between routes

  // User logout function
  const handleLogout = () => {
    // Add some more, like removing session
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <Box as="nav" bg="black.900" p={4} color="white" boxShadow="md" zIndex={999}>
      <Flex justify="space-between" align="center">
        {/* Logo */}
        <Link onClick={() => navigate('/')} boxSize="50px" fontSize="xl" fontWeight="bold">
          <Image src={logo_icon} />
        </Link>

        {/* Desktop Navigation */}
        <Flex align="center" display={{ base: 'none', md: 'flex' }}>
          {isLoggedIn ? (
            // Logged-in user avatar and dropdown menu
            <Menu>
              <MenuButton as={Button} backgroundColor="transparent" border="none" _hover={{ backgroundColor: 'transparent' }} _active={{ backgroundColor: 'transparent' }} p={0} m={0}>
                <Avatar size="sm" name="Username" src="https://via.placeholder.com/" />
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
        <IconButton aria-label="Open menu" icon={<HamburgerIcon color="yellow.900" boxSize={8} />} variant="unstyled" display={{ base: 'flex', md: 'none' }} onClick={onOpen} />
      </Flex>

      {/* Drawer for mobile navigation */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="black.900" color="white">
          <DrawerCloseButton />
          {/* Logged-in user header */}
          {isLoggedIn && (
            <DrawerHeader>
              <Flex align="center">
                <Avatar size="sm" name="Username" src="https://via.placeholder.com/" mr={2} />
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
                <Button onClick={() => { navigate('/login'); onClose(); }} variant="white" mt={7} mb={3} w="100%">Login</Button>
                <Button onClick={() => { navigate('/signup'); onClose(); }} variant="yellow" w="100%">Sign up</Button>
              </>
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default NavBar;
