// A form to sign into the page

// LoginForm.tsx
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import {
  Box,
  Button,
  Input,
  FormControl,
  FormLabel,
  Image,
  Center,
  Text,
  Link
} from '@chakra-ui/react';

interface LoginFormProps {
  onLoginSuccess: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // post: Perform the actual login logic when you have a backend
    // Simulate success
    onLoginSuccess();
  };


  return (
    <Box m="auto" mt={8} p={4} maxWidth="400px" >

      <Center>
        {/* Logo */}
        <Image boxSize="200px" src="/src/assets/logo.png" alt="Logo" />
      </Center>

      {/* LoginForm */}
      <Box>
        <form onSubmit={handleSubmit}>
          <FormControl mb={4}>
            <FormLabel 
              fontFamily='Roboto'
              color='white'>
              Email
            </FormLabel>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              variant='white'
            />
          </FormControl>
          <FormControl mb={8}>
            <FormLabel 
              fontFamily='Roboto'
              color='white'>
              Password
            </FormLabel>
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              variant='white'
            />
          </FormControl>
          {/* Submit button */}
          <Box textAlign="center" mb={4}>
          <Button 
            type="submit"
            variant="yellow">
            Login
          </Button>
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
