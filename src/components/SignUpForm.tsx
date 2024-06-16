// Signup Form component
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Input, Button, Center, Image, Link, Text, useToast, FormControl, FormLabel } from '@chakra-ui/react';
import UserService from '../services/userService';
import User from '../models/user';
import { Validation } from '../validation/validate';

// Interface for SignUpForm props
interface SignUpFormProps {
  onSignUpSuccess: () => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ onSignUpSuccess }) => {
  // State to manage form data
  const [formData, setFormData] = useState({
    username: '',
    fullname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // State to manage the selected profile image
  const [image, setImage] = useState<File | null>(null);

  // State to manage form validation errors
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Hook to display toast notifications
  const toast = useToast();

  // Hook to navigate to different routes
  const navigate = useNavigate();

  // Function to handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to handle profile image change
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  // Function to validate form data
  const validateForm = () => {
    let valid = true;
    let newErrors: { [key: string]: string } = {};

    // Define validators for each field
    const validators: { [key: string]: Validation.Validator[] } = {
      username: [{ validatorType: Validation.ValidationType.REQUIRED, message: 'Username is required' }],
      fullname: [{ validatorType: Validation.ValidationType.REQUIRED, message: 'Full name is required' }],
      email: [
        { validatorType: Validation.ValidationType.REQUIRED, message: 'Email is required' },
        { validatorType: Validation.ValidationType.EMAIL, message: 'Invalid email address' }
      ],
      password: [
        { validatorType: Validation.ValidationType.REQUIRED, message: 'Password is required' },
        { validatorType: Validation.ValidationType.MIN, message: 'Password must be at least 6 characters', props: { min: 6 } }
      ],
      confirmPassword: [
        { validatorType: Validation.ValidationType.REQUIRED, message: 'Password confirmation is required' },
        { validatorType: Validation.ValidationType.EQUAL, message: 'Passwords do not match', props: { equal: formData.password } }
      ]
    };

    // Validate each field and collect errors
    (Object.keys(formData) as (keyof typeof formData)[]).forEach((field) => {
      const response = Validation.validate(formData[field], validators[field]);
      if (!response.valid) {
        valid = false;
        newErrors[field] = response.errors[0].message;
      }
    });

    setErrors(newErrors);
    return valid;
  };

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      // Create new user object from form data
      const newUser: Partial<User> = {
        username: formData.username,
        fullname: formData.fullname,
        email: formData.email,
        password: formData.password,
        image: image ? URL.createObjectURL(image) : '', // Convert image file to a URL string
        createdAt: new Date().toISOString(), // Set the creation date
      };

      // Call the create user API
      const createdUser = await UserService.create(newUser as User);

      // Show success toast notification
      toast({
        title: "Account created.",
        description: "We've created your account for you.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });

      // Call the success callback and navigate to login page
      onSignUpSuccess();
      navigate('/login');

    } catch (error) {
      // Set general error message if account creation fails
      console.error("Error creating account:", error);
      toast({
        title: "Failed to create account.",
        description: "Please try again later.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

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
            <FormLabel color='white'>Username</FormLabel>
            <Input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              required
              variant='white'
            />
            {errors.username && <Text color="red.500">{errors.username}</Text>}
          </FormControl>
          <FormControl mb={4}>
            <FormLabel color='white'>Full Name</FormLabel>
            <Input
              type="text"
              name="fullname"
              value={formData.fullname}
              onChange={handleInputChange}
              required
              variant='white'
            />
            {errors.fullname && <Text color="red.500">{errors.fullname}</Text>}
          </FormControl>
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
            {errors.email && <Text color="red.500">{errors.email}</Text>}
          </FormControl>
          <FormControl mb={4}>
            <FormLabel color='white'>Password</FormLabel>
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              variant='white'
            />
            {errors.password && <Text color="red.500">{errors.password}</Text>}
          </FormControl>
          <FormControl mb={4}>
            <FormLabel color='white'>Confirm Password</FormLabel>
            <Input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
              variant='white'
            />
            {errors.confirmPassword && <Text color="red.500">{errors.confirmPassword}</Text>}
          </FormControl>
          <FormControl mb={8}>
            <FormLabel color='white'>Upload profile image</FormLabel>
            <Input
              ml={-5}
              type="file"
              color='white'
              border={0}
              onChange={handleImageChange}
            />
          </FormControl>
          <Box textAlign="center" mb={4}>
            <Button type="submit" variant='yellow'>
              Sign up
            </Button>
            {errors.general && <Text color="red.500" mt={2}>{errors.general}</Text>}
            <Text color="gray">
              Already have a user? <Link onClick={() => navigate('/login')} textDecoration="underline">Log in!</Link>
            </Text>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default SignUpForm;
