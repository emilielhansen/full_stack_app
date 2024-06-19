import LoginForm from "../components/LoginForm";
import { useNavigate } from 'react-router-dom';

// Implement an "onLogin" function

const Login = () => {

    const navigate = useNavigate();

    // Function to load current user
    const loginSuccess = async () => {
    };

    return (
        <>
        <LoginForm onLoginSuccess={loginSuccess} />
        </>
    );
  };
  
  export default Login;