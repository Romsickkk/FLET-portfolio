import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const apiClient = axios.create({
  baseURL: BASE_URL,
});

export const postQueries = {
  all: () => ({
    queryKey: ["posts"],
    queryFn: () => apiClient.get("/posts").then((res) => res.data),
  }),
  byId: (id: string) => ({
    queryKey: ["posts", id],
    queryFn: () => apiClient.get(`/posts/${id}`).then((res) => res.data),
  }),
};

export const commentQueries = {
  byPostId: (postId: string) => ({
    queryKey: ["comments", postId],
    queryFn: () =>
      apiClient
        .get("/comments", { params: { postId } })
        .then((res) => res.data),
  }),
};

export const userQueries = {
  all: () => ({
    queryKey: ["users"],
    queryFn: () => apiClient.get("/users").then((res) => res.data),
  }),
};
