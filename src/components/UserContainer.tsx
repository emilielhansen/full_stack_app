// User profile container component
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MyProfile from "./MyProfile";
import userService from "../services/userService"; 
import User from "../models/user";

const UserContainer = () => {
    const { userId } = useParams<{ userId: string }>(); // Extract userId from URL using useParams
    const [user, setUser] = useState<User | null>(null); // State to hold user data
    const [loading, setLoading] = useState<boolean>(true); // State to track loading state
    const [error, setError] = useState<string | null>(null); // State to store error messages

    useEffect(() => {
        if (userId) {
            loadUser(userId); // Fetch user data when userId changes
        } else {
            loadCurrentUser(); // Fetch user data from session if no userId in URL
        }
    }, [userId]);

    const loadUser = async (userId: string) => {
        try {
            const fetchedUser = await userService.get(userId); // Fetch user data from userService
            setUser(fetchedUser); // Set fetched user data to state
        } catch (error) {
            console.error("Failed to fetch user", error);
            setError("Failed to fetch user"); // Set error state if user fetching fails
        } finally {
            setLoading(false); // Set loading state to false after fetching user data
        }
    };

    const loadCurrentUser = async () => {
        try {
            const currentUser = await userService.getCurrentUser(); // Fetch current user data from session
            setUser(currentUser); // Set fetched user data to state
        } catch (error) {
            console.error("Failed to fetch current user", error);
            setError("Failed to fetch current user"); // Set error state if fetching fails
        } finally {
            setLoading(false); // Set loading state to false after fetching user data
        }
    };

    // Render loading message while fetching user data
    if (loading) {
        return <p>Loading...</p>;
    }

    // Render error message if there's an error fetching user data
    if (error) {
        return <p>{error}</p>;
    }

    // Render message if user is not found
    if (!user) {
        return <p>User not found</p>;
    }

    return (
        <>
            <MyProfile user={user} />
        </>
    );
};

export default UserContainer;
