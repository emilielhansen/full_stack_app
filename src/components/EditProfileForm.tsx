import React, { useState } from 'react';
import user from '../../full_stack_api/models/user';
import {
  Box,
  Button,
  Input,
  FormControl,
  FormLabel,
  Avatar,
  Center
} from '@chakra-ui/react';

interface EditProfileFormProps {
  updateUserSuccess: () => void; // Function to update user data
}

const EditProfileForm: React.FC<EditProfileFormProps> = ({ updateUserSuccess }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
  });

  // Function to handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    updateUserSuccess();
  };

  return (
    <Box m="auto" mt={8} mb={8} p={4} maxWidth="400px">

      {/* Centered profilepicture */}
      <Center>
        <Avatar boxSize={{md: "150px", base:"120px"}} src="https://via.placeholder.com/32" border={50} />
      </Center>

      {/* Edit profile form */}
      <Box>
        <form onSubmit={handleUpdate}>
          {/* Full name input field */}
          <FormControl mb={4}>
            <FormLabel 
            fontFamily='Roboto'
            color='white'>
            Full name
            </FormLabel>
            <Input
              type="text"
              name="fullName"
              value={"user.fullName"} // Value from user model
              onChange={handleInputChange}
              required
              backgroundColor="white"
              color="black"
              borderRadius="2"
              fontFamily='Roboto'
            />
          </FormControl>
          {/* Email input field */}
          <FormControl mb={8}>
            <FormLabel 
              fontFamily='Roboto'
              color='white'>
              Email
            </FormLabel>
            <Input
              type="email"
              name="email"
              value={"user.email"} // Value from user model
              onChange={handleInputChange}
              required
              backgroundColor="white"
              color="black"
              borderRadius="2"
              fontFamily='Roboto'
            />
          </FormControl>
          {/* Update button */}
          <Box textAlign="center" mb={4}>
            <Button
              type="submit"
              backgroundColor="#FBC027"
              colorScheme="yellow"
              color="black"
              borderRadius="20px"
              size = "lg"
              fontFamily = "Chakra Petch"
              width = "50%"
              height="40px">
              Update Profile
            </Button>
          </Box>
          {/* Delete button */}
          <Box textAlign="center">
            <Button
              type="submit"
              backgroundColor="#FB4027"
              colorScheme="red"
              color="black"
              borderRadius="20px"
              size="lg"
              fontFamily="Chakra Petch"
              display="inline-block"
              width="50%"
              height="40px">
              Delete Profile
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default EditProfileForm;

