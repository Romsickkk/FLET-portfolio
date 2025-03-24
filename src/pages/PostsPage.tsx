import PostItem from "../components/PostItem";
import { postQueries, userQueries } from "../api/api";
import { useQuery } from "@tanstack/react-query";
import { ClipLoader } from "react-spinners";

export default function PostsPage() {
  const {
    data: posts,
    isLoading: isPostsLoading,
    error: postsError,
  } = useQuery(postQueries.all());

  const {
    data: users,
    isLoading: isUsersLoading,
    error: usersError,
  } = useQuery(userQueries.all());

  if (isPostsLoading || isUsersLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <ClipLoader color="#3B82F6" size={80} />
      </div>
    );
  }

  if (postsError || usersError) {
    return (
      <div className="text-red-500 text-center py-10">
        Ошибка загрузки данных: {postsError?.message || usersError?.message}
      </div>
    );
  }

  // Создаем lookup-объект для быстрого поиска пользователей
  const usersMap = users?.reduce((acc, user) => {
    acc[user.id] = user;
    return acc;
  }, {});

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Список сообщений</h1>
      <div className="space-y-4">
        {posts?.map((post) => (
          <PostItem key={post.id} post={post} user={usersMap?.[post.userId]} />
        ))}
      </div>
    </div>
  );
}
