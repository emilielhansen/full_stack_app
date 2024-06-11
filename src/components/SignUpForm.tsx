// A form to sign up/make a user

// SignUpForm.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Input,
  FormControl,
  FormLabel,
  Image,
  Center,
  Link,
  Text
} from '@chakra-ui/react';
import axios from 'axios';

interface SignUpFormProps {
  onSignUpSuccess: () => void;
}


const SignUpForm: React.FC<SignUpFormProps> = ({ onSignUpSuccess }) => {

  const [formData, setFormData] = useState({
    username: '',
    fullname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [image, setImage] = useState<File | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
    // post: Perform the actual signup logic when you have a backend
    // For now, just simulate success
    onSignUpSuccess();
  };

  function handleOnChange(e: React.FormEvent<HTMLInputElement>) {
    const [file, setFile] = useState<File | undefined>();
    const target = e.target as HTMLInputElement & {
      files: FileList;
    }
    console.log('file', file)
  
    setFile(target.files[0]);
  }

  const navigate = useNavigate();

  return (
    <Box m="auto" mt={8} p={4} maxWidth="400px">

      {/* Logo */}
      <Link onClick={() => navigate('/')} boxSize="50px" fontSize="xl" fontWeight="bold">
          <Center>
            <Image boxSize="200px" src="/src/assets/logo.png" alt="Logo" />
          </Center>
        </Link>

      {/* SignUpForm */}
      <Box>
        <form onSubmit={handleSubmit}>
          <FormControl mb={4}>
            <FormLabel 
            fontFamily='Roboto'
            color='white'
            >Username</FormLabel>
            <Input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              required
              variant='white'
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel 
              fontFamily='Roboto'
              color='white'
              >Full Name</FormLabel>
            <Input
              type="text"
              name="fullname"
              value={formData.fullname}
              onChange={handleInputChange}
              required
              variant='white'
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel 
              fontFamily='Roboto'
              color='white'
            >Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              variant='white'
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel 
              fontFamily='Roboto'
              color='white'
              >Password</FormLabel>
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              variant='white'
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel 
              fontFamily='Roboto'
              color='white'
              >Confirm Password</FormLabel>
            <Input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
              variant='white'
            />
          </FormControl>
          <FormControl mb={8}>
            <FormLabel 
              fontFamily='Roboto'
              color='white'
              >Upload profile image</FormLabel>
            <Input ml={-5}
              type="file"
              color='white'
              border={0}
              onChange={handleImageChange}/>
          </FormControl>
          <Box textAlign="center" mb={4}>
            <Button 
              type="submit"
              variant='yellow'>
              Sign up
            </Button>
            <Text
                color="gray">
                Already have a user? <Link  onClick={() => navigate('/login')} textDecoration="underline">Log in!</Link>
            </Text>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default SignUpForm;