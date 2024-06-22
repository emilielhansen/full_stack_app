import { useEffect, useState } from "react";
import EditProfileForm from "../components/EditProfileForm";
import userService from "../services/userService";
import User from "../models/user";
import { useParams } from "react-router-dom";

const EditProfilePage = () => {
    const { userId } = useParams<{ userId: string }>(); // Extract userId from URL using useParams
    const [user, setUser] = useState<User | null>(null); // State to hold user data
    const [loading, setLoading] = useState<boolean>(true); // State to track loading state
    const [error, setError] = useState<string | null>(null); // State to store error messages

    // Load user when component mounts
    useEffect(() => {
    if (userId) {
        loadUser(userId); // Fetch user data when userId changes
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

    // Function to update a user
    const updateUser = async (id: string, fullname: string) => {
        try {
            const updatedUser = await userService.update(id, fullname);
            setUser(updatedUser);
        } catch (error) {
            console.error("Failed to update user", error);
        }
    };

    // Function to delete a user
    const deleteUser = async (id: string) => {
        try {
            await userService.delete(id);
            // Handle post-deletion logic here, e.g., redirecting to another page
        } catch (error) {
            console.error("Failed to delete user", error);
        }
    };

    return (
        <>
            <EditProfileForm user={user} onDeleteUser={deleteUser} />
        </>
    );
};

export default EditProfilePage;
