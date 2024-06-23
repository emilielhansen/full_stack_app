import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignupPage";
import EditProfilePage from "./pages/EditProfilePage";
import ProfilePage from "./pages/ProfilePage";
import FeedPage from "./pages/FeedPage";

//Definere vores ruter 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, //Overordnet layout
    errorElement: <ErrorPage />, //hvis der opstår fejl bliver denne side vist
    children: [ //Alt det der bliver renderet inde i layout
        { path: "/", element: < IndexPage /> }, 
        { path: "/login", element: < LoginPage /> }, 
        { path: "/signup", element: < SignUpPage /> },
        { path: "/edit-profile/:userId", element: < EditProfilePage /> },
        { path: "/profile/:userId", element: < ProfilePage /> },
        { path: "/feed", element: < FeedPage /> },
    ],
  },
]);

export default router;