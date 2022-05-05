import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PostForm from "../components/PostForm";
import UserAvatar from "../components/UserAvatar";

export default function UpdatePage() {
  const [post, setPost] = useState([]);
  const params = useParams();
  //   const navigate = useNavigate();
  //   navigate("/");
  const url = `http://localhost:3000/posts/?id=${params.postId}`;

  useEffect(() => {
    async function getPost() {
      const response = await fetch(url);
      const responseData = await response.json();

      setPost(responseData.data[0]);
    }
    getPost();
  }, [url]);
  console.log(post.image);
  let image = "";
  if (post.image != null) {
    image = require(`../assets/img/${post.image}`);
  }

  if (!post.uid) {
    return null;
  }
  return (
    <section className="page">
      <img src={image} alt={post.title} />
      <UserAvatar uid={post.uid} />
      <h1 className="text-center">{post.title}</h1>
      <p>{post.body}</p>
    </section>
  );
}
