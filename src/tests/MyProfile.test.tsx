//Render test for MyProfile component with User data
import '@testing-library/jest-dom';
import { describe, it  } from "vitest";
import { render, screen } from '@testing-library/react';
import MyProfile from '../components/MyProfile';
import User from '../models/user';
import { format } from 'date-fns';
import { da } from 'date-fns/locale';

describe('MyProfile component', () => {
  // Define a test case for rendering with user data
  it('renders correctly with given user data', () => {
    //Create user object with our properties from models/user
    const user: User = {
      _id: '1',
      fullname: 'Test User',
      username: 'testuser',
      createdAt:  new Date().toISOString(),
      email: 'test@user.com',
      password: 'Test123'
    };

    //Render MyProfile component with the user props
    render(<MyProfile user={user} />);
    
    const sanitizedFullName = 'Test User';
    const sanitizedUsername = 'testuser';
    const sanitizedCreatedAt =  format(new Date(user.createdAt), 'dd. MMM yyyy', { locale: da });
    
    // Check that the sanitized constants is rendered in the document
    expect(screen.getByText(`${sanitizedFullName}`)).toBeInTheDocument();
    expect(screen.getByText(`@${sanitizedUsername}`)).toBeInTheDocument();
    expect(screen.getByText(`Member since ${sanitizedCreatedAt}`)).toBeInTheDocument();
  });
});