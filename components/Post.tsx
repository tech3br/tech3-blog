import React from "react";
import Router from "next/router";
import ReactMarkdown from "react-markdown";

export type PostProps = {
  id: number;
  title: string;
  author: {
    name: string;
    email: string;
  } | null;
  content: string;
  published: boolean;
};

const Post: React.FC<{ post: PostProps }> = ({ post }) => {
  const authorName = post.author ? post.author.name : "Unknown author";
  return (
    <div onClick={() => Router.push("/p/[id]", `/p/${post.id}`)}>
      <h2>{post.title}</h2>
      <small>By {authorName}</small>
      <style jsx>{`
        div {
          padding: 2rem;
          background: rgba(0, 0, 0);
          border: 1px solid rgba(230, 230, 230, 0.5);
          border-radius: 8px;

          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Post;
