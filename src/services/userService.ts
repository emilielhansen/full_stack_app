import axios, { AxiosInstance } from "axios";
const API_URL = 'http://localhost:3000/api';
import User from "../models/user";

class UserService {
  http: AxiosInstance;

  constructor() {
    this.http = axios.create({
      baseURL: import.meta.env.VITE_API_URL,
      withCredentials: true, // Inkluderer cookies med anmodninger
    });
  }

  async getAll(): Promise<User[]> {
    const response = await this.http.get<User[]>('/users');
    return response.data;
  }

  async get(userId: string): Promise<User> {
    const response = await this.http.get<User>(`/users/${userId}`);
    return response.data;
  }

  async getCurrentUser(): Promise<User | null> {
    try {
      const response = await this.http.get<User>('/users/current'); // Adjust endpoint as per your server setup
      return response.data as User; // Assuming your API returns user data
    } catch (error) {
      console.error('Error fetching current user:', error);
      throw error; // Optionally handle error or return null
    }
  };

  // signup - sender post anmodningen til api/users i userRouter
  async create(user: User): Promise<User> {
    const response = await this.http.post<User>('/users', user);
    return response.data;
  }

  async update(id: string, fullname: string): Promise<User> {
    const response = await this.http.put<User>(`/users/${id}`, {
      fullname});
    return response.data;
  }

  async delete(id: string): Promise<void> {
    await this.http.delete(`/users/${id}`);
  }

  async login(email: string, password: string): Promise<User | null> {
    try {
      const response = await this.http.post<User>('/users/login', { email, password });
      return response.data;
    } catch (error) {
      console.error('Login failed:', error);
      return null;
    }
  }

  async logout(): Promise<void> {
    try {
      await this.http.post('/users/logout');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  }
}

export default new UserService();