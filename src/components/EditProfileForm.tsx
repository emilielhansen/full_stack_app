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
  onDeleteUser: (id: string) => void;
}

const EditProfileForm = ({ user, onDeleteUser }: EditProfileFormProps) => {
  const [currentUserId, setCurrentUserId] = useState(user._id);
  const navigate = useNavigate();
  const { isLoggedIn, setUser } = useAuth();

  // Function to handle user deletion
  const handleDeleteUser = async () => {
    onDeleteUser(currentUserId);
    console.log('User deleted:', user);
    await UserService.logout();
    setUser(null);
    navigate('/login');
  };

  return (
    <Box m="auto" mt={8} mb={8} p={4} maxWidth="500px">
          {/* Delete button */}
          <Box textAlign="center">
          <Heading pb={2} fontFamily='Chakra Petch' fontSize={{ base: '20', md: '25', lg: '35' }}>
          Want to stop beeing you?</Heading>
            <Button variant="red" onClick={handleDeleteUser}>
              Delete Profile
            </Button>
          </Box>
      </Box>
  );
};

export default EditProfileForm;
