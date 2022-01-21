import { useEffect, useState } from "react";
export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [coments, setComents] = useState([]);

  useEffect(() => {
    fetch("https://gorest.co.in/public/v1/posts")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPosts(data.data);
      });
  }, []);

  useEffect(() => {
    fetch("https://gorest.co.in/public/v1/comments")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setComents(data.data);
      });
  }, []);

  return (
    <>
      <div>
        <h2>Posts and coments</h2>
        {posts.map((post) => {
          return (
            <>
              <ul>
                <li key={post.id}>
                  <span>Id: {post.id}, </span>
                  <span>User id: {post.user_id}</span>
                  <span>Title: {post.title}</span>
                  {/* <span>Name: {post.body}</span> */}
                </li>
              </ul>
            </>
          );
        })}
      </div>
    </>
  );
};
