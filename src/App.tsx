import { QueryClientProvider } from "@tanstack/react-query";

import { Routes, Route } from "react-router";
import PostsPage from "./pages/PostsPage";
import PostDetailsPage from "./pages/PostDetailsPage";
import { queryClient } from "./lib/react-query"; // Импортируем созданный QueryClient

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<PostsPage />} />
        <Route path="/posts/:id" element={<PostDetailsPage />} />
      </Routes>
    </QueryClientProvider>
  );
}
