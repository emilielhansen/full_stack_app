// Login user form component
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Input, FormControl, FormLabel, Image, Center, Text, Link } from '@chakra-ui/react';

// Define the props for the LoginForm component
interface LoginFormProps {
  onLoginSuccess: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
  // Initialize state to manage form data
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // Handle input change event to update formData state
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  // Handle form submission event
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Perform the actual login logic when you have a backend
    // Simulate success
    onLoginSuccess();
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
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              variant='white'
            />
          </FormControl>
          {/* Password input field */}
          <FormControl mb={8}>
            <FormLabel color='white'>Password</FormLabel>
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
            <Button type="submit" variant="yellow">Login</Button>
            <Text color="gray">
              Don't have a user yet? <Link onClick={() => navigate('/signup')} textDecoration="underline">Signup!</Link>
            </Text>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default LoginForm;