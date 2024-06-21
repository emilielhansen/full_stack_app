import React, { useState } from 'react';

import { Box, Button, Input, FormControl, FormLabel, Avatar, Center, Heading } from '@chakra-ui/react';
import User from '../models/user';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hoc/authContext';
import UserService from '../services/userService';

// interface EditProfileFormProps {
//   user: User;
//   onUpdateUser: (id: string, fullname: string, email: string) => void; 
//   onDeleteUser: (id: string) => void;
// }

// const EditProfileForm = ({ user, onUpdateUser, onDeleteUser }: EditProfileFormProps) => {
//   const [formData, setFormData] = useState({
//     fullname: user.fullname,
//     email: user.email,
//   });

//   // Handle input change event to update formData state
//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   // Handle form submission event
//   const handleUpdateUser = (e: React.FormEvent) => {
//     e.preventDefault();
//     onUpdateUser(user._id, formData.fullname, formData.email);
//   };

//   // Function to handle user deletion
//   const handleDeleteUser = () => {
//     onDeleteUser(user._id);
//   };


interface EditProfileFormProps {
  user: User;
  onUpdateUser: (id: string, fullname: string) => void;
  onDeleteUser: (id: string) => void;
}

const EditProfileForm = ({ user, onUpdateUser, onDeleteUser }: EditProfileFormProps) => {
  const [editUser, setEditUser] = useState(user.fullname); // State to store the edited full name
  const [currentUserId, setCurrentUserId] = useState(user._id); // State to store the ID of the post being edited
  const navigate = useNavigate();
  const { isLoggedIn, setUser } = useAuth();

  // Function to handle edit button click
  const handleEdit = (user: User) => {
    setEditUser(user.fullname);
    setCurrentUserId(user._id);
  };

  // Handle form submission event
  const handleUpdateUser = () => {
    onUpdateUser(currentUserId, editUser);
    // Optionally reset the form or perform other actions after updating
  };

  // Function to handle user deletion
  const handleDeleteUser = async () => {
    onDeleteUser(currentUserId);
    await UserService.logout();
    setUser(null);
    navigate('/login');
  };

  return (
    <Box m="auto" mt={8} mb={8} p={4} maxWidth="500px">
      {/* Edit profile form */}
      <Box>
        <form onSubmit={handleUpdateUser}>
          {/* Full name input field */}
          <FormControl mb={4}>
            <FormLabel color='white'>Full name</FormLabel>
            <Input
              type="text"
              name="fullname"
              value={user.fullname}
              // onChange={handleInputChange}
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
              value={user.email}
              // onChange={handleInputChange}
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
          <Heading pb={2} fontFamily='Chakra Petch' fontSize={{ base: '20', md: '25', lg: '35' }}>
          Want to stop beeing you?</Heading>
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
