import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hoc/authContext';
import { Box, Spinner } from '@chakra-ui/react';

const RequireAuth: React.FC = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <Box textAlign="center" mt={10}>
        <Spinner size="xl" />
      </Box>
    );
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default RequireAuth;
