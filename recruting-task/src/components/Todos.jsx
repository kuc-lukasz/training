import { useEffect, useState } from "react";
export const Posts = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetch("")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPosts(data);
      });
  }, []);

  return;
};
