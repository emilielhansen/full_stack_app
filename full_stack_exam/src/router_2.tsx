//Router for SPA

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Edit from "./pages/EditProfilePage";
import Feed from "./pages/FeedPage";
import Login from "./pages/LoginPage";
import Profile from "./pages/ProfilePage";
import Signup from "./pages/SignupPage";


export default function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/editprofile" element={<Edit />} />
    </Routes>
  </Router>
  )
};