import { Comment } from "../types";

export default function CommentItem({ comment }: { comment: Comment }) {
  return (
    <div className="border-l-4 border-blue-500 pl-4 mb-4">
      <p className="font-semibold">
        {comment.name} ({comment.email})
      </p>
      <p>{comment.body}</p>
    </div>
  );
}
