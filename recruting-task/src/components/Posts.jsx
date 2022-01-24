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

  //   const displayData = (posts, coments) => {
  //     console.log(posts);
  //     console.log(coments);
  //     return <></>;
  //   };

  return (
    <>
      <div>
        <h2>Posts and coments</h2>

        {posts.map((post) => {
          let postId = post.id;
          console.log(postId);
          return (
            <>
              <ul>
                <li>
                  <span>Post ID: {post.id}</span> <p>Title: {post.title}</p>
                  <p>{post.body}</p>
                  <p>
                    Comments:
                    {coments
                      .filter((coment) => {
                        console.log(coment.post_id);
                        console.log(post.id);
                        return post.id === coment.post_id;
                      })
                      .map((coment) => {
                        return <span>{coment.body}</span>;
                      })}
                  </p>
                </li>
              </ul>
            </>
          );
        })}
      </div>
    </>
  );
};
