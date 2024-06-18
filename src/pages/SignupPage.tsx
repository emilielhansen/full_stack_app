import SignUpForm from "../components/SignUpForm";
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const navigate = useNavigate();

    // Function to load current user
    const signupSuccess = async () => {
        navigate('/login');
    };

    
    return (
        <>
        <SignUpForm onSignUpSuccess={signupSuccess} />
        </>
    );
  };
  
  export default Signup;