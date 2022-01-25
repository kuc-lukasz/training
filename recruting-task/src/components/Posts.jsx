import "../styles/Posts.css";
import { useEffect, useState } from "react";
import { SingleComments } from "./SingleComment";
import { SinglePost } from "./SinglePost";
import { PostPhoto } from "./UserPhotos";

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
      <div className="post-and-comments">
        <PostPhoto />
        <div>
          {posts.map((post) => {
            let postId = post.id;
            console.log(postId);
            return (
              <>
                <SinglePost
                  userID={post.user_id}
                  Title={post.title}
                  Content={post.body}
                />
                <h4
                  style={{
                    margin: "0px 10px 10px 10px",
                    color: "black",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  Comments:
                </h4>
                {coments
                  .filter((coment) => {
                    return post.id === coment.post_id;
                  })
                  .map((coment) => {
                    return (
                      <SingleComments
                        Name={coment.name}
                        Email={coment.email}
                        Content={coment.body}
                      />
                    );
                  })}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
