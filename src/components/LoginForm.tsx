// LoginForm.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Input, FormControl, FormLabel, Image, Center, Text, Link } from '@chakra-ui/react';
import UserService from '../services/userService';
import { useAuth } from '../hoc/authContext';

  const LoginForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { setUser } = useAuth();
  
    const handleSubmit = async (event: React.FormEvent) => {
      event.preventDefault();
      try {
        const user = await UserService.login(email, password);
        if (user && user._id) {
          setUser(user);
          console.log('User logged in:', user);
          navigate(`/profile/${user._id}`);
        } else {
          console.log('Invalid credentials or user not found');
        }
      } catch (error) {
        console.error('Error logging in:', error);
      }
    };


  return (
    <Box m="auto" mt={8} p={4} maxWidth="400px">
      {/* Logo */}
      <Link onClick={() => navigate('/')} boxSize="50px" fontSize="xl" fontWeight="bold">
        <Center>
          <Image boxSize="200px" src="/src/assets/logo.png" alt="Logo" />
        </Center>
      </Link>

      {/* LoginForm */}
      <Box>
        <form onSubmit={handleSubmit}>
          {/* Email input field */}
          <FormControl mb={4}>
            <FormLabel color='white'>Email</FormLabel>
            <Input
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              variant='white'
            />
          </FormControl>
          {/* Password input field */}
          <FormControl mb={8}>
            <FormLabel color='white'>Password</FormLabel>
            <Input
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              variant='white'
            />
          </FormControl>
          <Box textAlign="center" mb={4}>
            <Button type="submit" variant="yellow">Login</Button>           
            <Text
              color="gray">
              Don't have a user yet? <Link onClick={() => navigate('/signup')} textDecoration="underline">Signup!</Link>
            </Text>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default LoginForm;