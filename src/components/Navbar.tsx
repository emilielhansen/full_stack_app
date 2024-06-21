import React from 'react';
import { Box, Flex, Link, Button, Avatar, Image, Menu, MenuButton, MenuList, MenuItem, MenuDivider, IconButton, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import logo_icon from '../assets/logo_icon.png';
import UserService from '../services/userService';
import { useAuth } from '../hoc/authContext';
import User from '../models/user';

const NavBar: React.FC = () => {
  const { user, setUser } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure(); // Chakra UI hook to manage Drawer state
  const navigate = useNavigate();  // Hook to navigate between routes
  const isLoggedIn = !!user;
  //const { userId } = useParams<{ userId: string }>(); // Extract userId from URL using useParams


  // User logout function
  const handleLogout = async () => {
    await UserService.logout();
    setUser(null);
    navigate('/login');
  };

  // Navigate to user profile based on current user or logged-in user
  const handleNavigateToProfile = () => {
    console.log("NavBar user state:", user); // Debug log
    if (isLoggedIn && user?._id) {
      navigate(`/profile/${user._id}`);
    } else {
      navigate('/login');
    }
    onClose();
  };

  
  return (
    <Box as="nav" bg="black.900" p={4} color="white" boxShadow="md" zIndex={999}>
      <Flex justify="space-between" align="center">
        {/* Logo */}
        {isLoggedIn ? (
          <Link onClick={() => navigate('/feed')} boxSize="50px" fontSize="xl" fontWeight="bold">
            <Image src={logo_icon} />
          </Link>
        ) : (
          <Link onClick={() => navigate('/')} boxSize="50px" fontSize="xl" fontWeight="bold">
            <Image src={logo_icon} />
          </Link>
        )}
        {/* Desktop Navigation */}
        <Flex align="center" display={{ base: 'none', md: 'flex' }}>
          {isLoggedIn ? (
            // Logged-in user avatar and dropdown menu
            <Menu>
              <MenuButton as={Button} backgroundColor="transparent" border="none" _hover={{ backgroundColor: 'transparent' }} _active={{ backgroundColor: 'transparent' }} p={0} m={0}>
                <Avatar backgroundColor="yellow.900" boxSize={8}/>
              </MenuButton>
              <MenuList color="white" borderRadius="8px" borderColor="transparent" mt={2}>
                <MenuItem icon={<FaUser />} onClick={handleNavigateToProfile}>Profile</MenuItem>
                <MenuItem icon={<FaCog />} onClick={() => navigate(`/edit-profile/${user?._id}`)}>Settings</MenuItem>
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
        <DrawerContent bg="black.900" color="white" pl={10}>
          <DrawerCloseButton />
          {/* Hamburger menu icon for mobile */}
          <Flex justify="flex-end" py={2} pr={2}>
            <IconButton aria-label="Close menu" onClick={onClose} />
          </Flex>
          {/* Drawer links and buttons */}
          {isLoggedIn ? (
            // Drawer links for logged-in users
            <>
              <Link onClick={handleNavigateToProfile} mb={4} display="block">
                <Flex align="center">
                  <FaUser /><Box ml={2}>Profile</Box>
                </Flex>
              </Link>
              <Link onClick={() => navigate(`/edit-profile/${userId}`)} mb={4} display="block">
                <Flex align="center">
                  <FaCog /><Box ml={2}>Settings</Box>
                </Flex>
              </Link>
              <Link onClick={handleLogout} mb={4} display="block">
                <Flex align="center">
                  <FaSignOutAlt /><Box ml={2}>Logout</Box>
                </Flex>
              </Link>
            </>
          ) : (
            // Drawer buttons for not logged in users
            <>
              <Button onClick={() => navigate('/login')} variant="white" mt={7} mb={3} w="100%">Login</Button>
              <Button onClick={() => navigate('/signup')} variant="yellow" w="100%">Sign up</Button>
            </>
          )}
          <DrawerBody>
            {/* Drawer links and buttons */}
            {isLoggedIn ? (
              // Drawer links for logged-in users
              <>
                <Link onClick={handleNavigateToProfile} mb={4} display="block">
                  <Flex align="center">
                    <FaUser /><Box ml={2}>Profile</Box>
                  </Flex>
                </Link>
                <Link onClick={() => navigate(`/edit-profile/${user?._id}`)} mb={4} display="block">
                  <Flex align="center">
                    <FaCog /><Box ml={2}>Settings</Box>
                  </Flex>
                </Link>
                <Link onClick={handleLogout} mb={4} display="block">
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