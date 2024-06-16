// Update user profile form component
import React, { useState } from 'react';
import { Box, Button, Input, FormControl, FormLabel, Avatar, Center } from '@chakra-ui/react';
import User from '../models/user';

interface EditProfileFormProps {
  user: User;
  onUpdateUser: (id: string, fullname: string, email: string) => void; 
  onDeleteUser: (id: string) => void;
}

const EditProfileForm = ({ user, onUpdateUser, onDeleteUser }: EditProfileFormProps) => {
  const [formData, setFormData] = useState({
    fullname: user.fullname,
    email: user.email,
  });

  // Handle input change event to update formData state
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission event
  const handleUpdateUser = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateUser(user._id, formData.fullname, formData.email);
  };

  // Function to handle user deletion
  const handleDeleteUser = () => {
    onDeleteUser(user._id);
  };

  return (
    <Box m="auto" mt={8} mb={8} p={4} maxWidth="400px">
      {/* Centered profile picture */}
      <Center>
        <Avatar boxSize={{ md: "150px", base:"120px" }} src={user.image} border={50} />
      </Center>

      {/* Edit profile form */}
      <Box>
        <form onSubmit={handleUpdateUser}>
          {/* Full name input field */}
          <FormControl mb={4}>
            <FormLabel color='white'>Full name</FormLabel>
            <Input
              type="text"
              name="fullname"
              value={formData.fullname}
              onChange={handleInputChange}
              required
              variant='white'
            />
          </FormControl>
          {/* Email input field */}
          <FormControl mb={8}>
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
          {/* Update button */}
          <Box textAlign="center" mb={4}>
            <Button type="submit" variant="yellow">
              Update Profile
            </Button>
          </Box>
          {/* Delete button */}
          <Box textAlign="center">
            <Button variant="red" onClick={handleDeleteUser}>
              Delete Profile
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default EditProfileForm;
