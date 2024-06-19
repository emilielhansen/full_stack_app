import React, { useState } from 'react';
import { Box, Button, Input, FormControl, FormLabel } from '@chakra-ui/react';
import User from '../models/user';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hoc/authContext';
import UserService from '../services/userService';

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
    <Box m="auto" mt={8} mb={8} p={4} maxWidth="400px">
      {/* Edit profile form */}
      <Box>
        <form onSubmit={handleUpdateUser}>
          {/* Full name input field */}
          <FormControl mb={4}>
            <FormLabel color='white'>Full name</FormLabel>
            <Input
              type="text"
              name="fullname"
              value={editUser}
              onChange={(e) => setEditUser(e.target.value)}
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
