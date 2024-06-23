import axios from "axios";
import Post from "../models/post";

class PostService {
  http = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
  });

  async getAll(): Promise<Post[]> {
    const response = await this.http.get<Post[]>("/posts");
    return response.data;
  }

  async get(id: string): Promise<Post> {
    const response = await this.http.get<Post>(`/posts/${id}`);
    return response.data;
  }

  async create(content: string) {
    const response = await this.http.post<Post>("/posts", { content: content });
    return response.data;
  }

  async update(id: string, content: string): Promise<Post> {
    const response = await this.http.put<Post>(`/posts/${id}`, { content });
    return response.data;
  }

  async delete(id: string): Promise<void> {
    await this.http.delete(`/posts/${id}`);
  }
}

export default new PostService();