import { useEffect, useState } from "react";
import EditProfileForm from "../components/EditProfileForm";
import userService from "../services/userService";
import User from "../models/user";

const EditProfilePage = () => {

    const [currentUser, setCurrentUser] = useState<User | null>(null); // State to store current user

    // Load user when component mounts
    useEffect(() => {
        loadUser();
    }, []);

    // Function to load current user
    const loadUser = async () => {
        try {
            const user = await userService.getCurrentUser();
            setCurrentUser(user);
        } catch (error) {
            console.error("Failed to load user", error);
        }
    };

    // Function to update a user
    const updateUser = async (id: string, fullname: string, email: string) => {
        try {
            const updatedUser = await userService.update(id, fullname, email);
            setCurrentUser(updatedUser);
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

    if (!currentUser) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <EditProfileForm user={currentUser} onUpdateUser={updateUser} onDeleteUser={deleteUser} />
        </>
    );
};

export default EditProfilePage;
