import React, { useState } from 'react';
import user from '../models/user';
import {
  Box,
  Button,
  Input,
  FormControl,
  FormLabel,
  Avatar,
  Center
} from '@chakra-ui/react';
import NavBar from './Navbar';

interface EditProfileFormProps {
  updateUserSuccess: () => void;
}

const EditProfileForm: React.FC<EditProfileFormProps> = ({ updateUserSuccess }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
  });

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};

const handleUpdate = (e: React.FormEvent) => {
  e.preventDefault();

  updateUserSuccess();
};

  return (
    <Box m="auto" mt={8} p={4} maxWidth="400px" >

      <Center>
        {/* Logo */}
        <Avatar boxSize="200px" src="https://via.placeholder.com/32" border={50}/>
      </Center>

      {/* LoginForm */}
      <Box>
        <form onSubmit={handleUpdate}>
          <FormControl mb={4}>
            <FormLabel fontFamily='Roboto'>Full name</FormLabel>
            <Input
              type="text"
              name="fullName"
              value="{user.fullName}"
              onChange={handleInputChange}
              required
              backgroundColor="white"
              color="black"
              borderRadius="2"
              fontFamily='Roboto'
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel fontFamily='Roboto'>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value="{user.email}"
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
            Update
          </Button>
          <Button  ml={4}
            type="submit"
            backgroundColor="#FB4027"
            colorScheme="red"
            color="black"
            borderRadius="20px"
            size = "lg"
            fontFamily = "Chakra Petch"
          >
            Delete
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default EditProfileForm;
