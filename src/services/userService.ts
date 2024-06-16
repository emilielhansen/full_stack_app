import axios, { AxiosResponse } from "axios";
import User from "../models/user";

class UserService {
  http = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
  });

  async getAll(): Promise<User[]> {
    const response = await this.http.get<User[]>("/users");
    return response.data;
  }

  async get(userId: string): Promise<User> {
    const response = await this.http.get<User>(`/users/${userId}`);
    return response.data;
  }

  async getCurrentUser(): Promise<User> {
    // replace 'currentUserId' with the actual current user's ID
    const currentUserId = 'currentUserId';
    return this.get(currentUserId);
  }

  async create(user: User): Promise<User> {
    const response = await this.http.post<User>("/users", user);
    return response.data;
  }

  async update(id: string, fullname: string, email: string): Promise<User> {
    const response = await this.http.put<User>(`/users/${id}`, {
      fullname: fullname,
      email: email
    });
    return response.data;
  }

  async delete(id: string): Promise<void> {
    await this.http.delete(`/users/${id}`);
  }

  async login(user:User): Promise<User> {
    return this.http.post('/users', user);
  }

}

export default new UserService();