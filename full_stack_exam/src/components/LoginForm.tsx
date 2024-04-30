// A form to sign into the page

// LoginForm.tsx

import React, { useState } from 'react';
import {
  Box,
  Button,
  Input,
  FormControl,
  FormLabel,
  Image,
  Center
} from '@chakra-ui/react';

interface LoginFormProps {
  onLoginSuccess: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
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

    // TODO: Perform the actual login logic when you have a backend
    // For now, just simulate success
    onLoginSuccess();
  };

  return (
    <Box m="auto" mt={8} p={4} maxWidth="400px">

      <Center>
        {/* Logo */}
        <Image boxSize="200px" src="/src/assets/logo.png" alt="Logo" />
      </Center>

      {/* LoginForm */}
      <Box>
        <form onSubmit={handleSubmit}>
          <FormControl mb={4}>
            <FormLabel fontFamily='Roboto'>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              backgroundColor="white"
              color="black"
              borderRadius="2"
              fontFamily='Roboto'
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel fontFamily='Roboto'>Password</FormLabel>
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              backgroundColor="white"
              color="black"
              borderRadius="2"
              fontFamily='Roboto'
            />
          </FormControl>
          <Button
            type="submit"
            backgroundColor="#FBC027"
            colorScheme="yellow"
            color="black"
            borderRadius="20px"
            size = "lg"
            fontFamily = "Chakra Petch"
          >
            Login
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default LoginForm;
