import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const withAuth = (Component: React.ComponentType) => {
  return (props: any) => {
    const { user, loading } = useAuth();

    if (loading) {
      return <div>Loading...</div>;
    }

    if (!user) {
      return <Navigate to="/login" />;
    }

    return <Component {...props} user={user} />;
  };
};

export default withAuth;