import { Comment } from "../types";
import { useQuery } from "@tanstack/react-query";
import { ClipLoader } from "react-spinners";
import { useParams, Link } from "react-router";
import { postQueries, commentQueries } from "../api/api";

import CommentItem from "../components/CommentItem";

export default function PostDetailsPage() {
  const { id } = useParams<{ id: string }>();

  const {
    data: post,
    isLoading: isPostLoading,
    isError: isPostError,
  } = useQuery(postQueries.byId(id!));

  const {
    data: comments,
    isLoading: isCommentsLoading,
    isError: isCommentsError,
  } = useQuery<Comment[]>(commentQueries.byPostId(id!));

  const isLoading = isPostLoading || isCommentsLoading;
  const isError = isPostError || isCommentsError;

  if (isLoading) {
    return (
      <div className="flex flex-1 justify-center items-center min-h-screen">
        <ClipLoader color="#3B82F6" size={80} />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center py-10 text-red-500">
        Произошла ошибка при загрузке данных
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 min-h-screen flex flex-col">
      <Link to="/" className="text-blue-600 hover:underline mb-4 inline-block">
        ← Назад
      </Link>

      <h1 className="text-2xl font-bold mb-2">{post?.title}</h1>
      <p className="mb-6">{post?.body}</p>

      <h2 className="text-xl font-semibold mb-4">Комментарии:</h2>
      {comments && comments.length > 0 ? (
        comments.map((c) => <CommentItem key={c.id} comment={c} />)
      ) : (
        <p>Комментариев пока нет.</p>
      )}
    </div>
  );
}
