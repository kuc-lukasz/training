import { useEffect, useState } from "react";

export const SinglePageElement = () => {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    fetch(
      "https://content-eu-4.content-cms.com/api/859f2008-a40a-4b92-afd0-24bb44d10124/delivery/v1/content/db4930e9-7504-4d9d-ae6c-33facca754d1"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setArticle(data);
        console.log(data);
      });
  }, []);

  return (
    <>
      <div>
        <ul></ul>
      </div>
    </>
  );
};
