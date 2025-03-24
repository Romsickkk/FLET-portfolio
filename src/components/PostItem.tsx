import { Post, User } from "../types";
import { Link } from "react-router";

interface Props {
  post: Post;
  user?: User;
}

export default function PostItem({ post, user }: Props) {
  return (
    <div className="border p-4 rounded-xl shadow hover:bg-gray-50 transition">
      <h2 className="text-xl font-bold mb-1">{post.title}</h2>
      <p className="text-gray-600 mb-2">{post.body}</p>
      <p className="text-sm text-gray-500">
        Автор: {user?.name || "Неизвестен"}
      </p>
      <Link
        to={`/posts/${post.id}`}
        className="text-blue-600 hover:underline text-sm"
      >
        Читать далее →
      </Link>
    </div>
  );
}
