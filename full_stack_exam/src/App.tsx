import SignUpForm from "./components/SignUpForm";
import './App.css'
import { ChakraProvider } from '@chakra-ui/react';
import NavBar from "./components/NavBar";
import LoginForm from "./components/SignInForm";

function App() {

  const handleSignUpSuccess = () => {
    alert('Sign up successful!'); // You can replace this with any desired action
  };

  return (
    <ChakraProvider>
        <NavBar></NavBar>
        <SignUpForm onSignUpSuccess={handleSignUpSuccess} />
        <LoginForm></LoginForm>
    </ChakraProvider>
  )
}

export default App
