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
  Center,
} from '@chakra-ui/react';
import axios from 'axios';

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('username', formData.username);
    formDataToSend.append('fullName', formData.fullName);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('password', formData.password);
    if (image) {
      formDataToSend.append('image', image);
    }

    try {
      await axios.post('http://localhost:5000/signup', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      onSignUpSuccess();
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault(); 
  //   // post: Perform the actual signup logic when you have a backend
  //   // For now, just simulate success
  //   onSignUpSuccess();
  // };

  // function handleOnChange(e: React.FormEvent<HTMLInputElement>) {
  //   const [file, setFile] = useState<File | undefined>();
  //   const target = e.target as HTMLInputElement & {
  //     files: FileList;
  //   }
  //   console.log('file', file)
  
  //   setFile(target.files[0]);
  // }

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
              backgroundColor="white"
              color="black"
              borderRadius="2"
              fontFamily='Roboto'
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel 
              fontFamily='Roboto'
              color='white'
              >Full Name</FormLabel>
            <Input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              backgroundColor="white"
              color="black"
              borderRadius="2"
              fontFamily='Roboto'
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
              backgroundColor="white"
              color="black"
              borderRadius="0"
              fontFamily='Roboto'
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
              backgroundColor="white"
              color="black"
              borderRadius="2"
              fontFamily='Roboto'
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
              backgroundColor="white"
              color="black"
              borderRadius="2"
              fontFamily='Roboto'

            />
          </FormControl>
          <FormControl>
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
          <Button mt={4}
            type="submit"
            backgroundColor="#FBC027"
            colorScheme="yellow"
            color="black"
            borderRadius="20"
            size = "lg"
            fontFamily = "Chakra Petch"
          >
            Sign Up
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default SignUpForm;