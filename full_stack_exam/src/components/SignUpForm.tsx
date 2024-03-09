// A form to sign up/make a user

// SignUpForm.tsx
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

interface SignUpFormProps {
  onSignUpSuccess: () => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ onSignUpSuccess }) => {
  const [formData, setFormData] = useState({
    username: '',
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
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

    // TODO: Perform the actual signup logic when you have a backend
    // For now, just simulate success
    onSignUpSuccess();
  };

  return (
    <Box m="auto" mt={8} p={4} maxWidth="400px">

      <Center>
        {/* Logo */}
        <Image boxSize="200px" src="/src/assets/logo.png" alt="Logo" />
      </Center>

      {/* SignUpForm */}
      <Box>
        <form onSubmit={handleSubmit}>
          <FormControl mb={4}>
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              required
              backgroundColor="white"
              borderRadius="0"
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Full Name</FormLabel>
            <Input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              backgroundColor="white"
              borderRadius="0"
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              backgroundColor="white"
              borderRadius="0"
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              backgroundColor="white"
              borderRadius="0"
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Confirm Password</FormLabel>
            <Input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
              backgroundColor="white"
              borderRadius="0"
            />
          </FormControl>
          <Button
            type="submit"
            backgroundColor="#FBC027"
            colorScheme="yellow"
            color="black"
            borderRadius="20px"
            size = "lg"
          >
            Sign Up
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default SignUpForm;