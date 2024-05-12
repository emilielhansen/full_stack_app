import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import EditProfile from "./components/EditProfile";
import ProfilePage from "./components/Profile";
import Login from "./pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
        { path: "/", element: < LoginForm /> }, 
        { path: "/signup", element: < SignUpForm /> }, 
        { path: "/edit-profile", element: < EditProfile /> },
        { path: "/profile", element: < ProfilePage /> },
    ],
  },
]);

export default router;