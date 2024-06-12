import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams from react-router-dom
import MyProfile from "./MyProfile";
import userService from "../services/userService";
import User from "../models/user";

const UserContainer = () => {
    const { userId } = useParams<{ userId: string }>(); // Extract userId from URL
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (userId) {
            loadUser(userId);
        }
    }, [userId]);

    const loadUser = async (userId: string) => {
        try {
            const fetchedUser = await userService.get(userId);
            setUser(fetchedUser);
        } catch (error) {
            console.error("Failed to fetch user", error);
            setError("Failed to fetch user");
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

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
