import LoginForm from "../components/LoginForm";

// Implement an "onLogin" function

const Login = () => {
    return (
        <>
        <LoginForm onLoginSuccess={function (): void {
                throw new Error("Function not implemented.");
            } } />
        </>
    );
  };
  
  export default Login;