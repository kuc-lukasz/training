import { useEffect, useState } from "react";
import { BlogList } from "./BlogList";

export const Home = () => {
  const [name, setName] = useState(true);
  const [blogs, setBlogs] = useState([
    {
      title: "My new website",
      body: "lorem ipsum...",
      author: "mario",
      id: 1,
    },
    {
      title: "Welcome party!",
      body: "lorem ipsum...",
      author: "yoshi",
      id: 2,
    },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);
  useEffect(() => {
    console.log("use effect ! ");
  }, [name]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  return (
    <div className="home">
      <h2>Home page</h2>
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "mario")}
        title="Mario's Blogs "
      />
      <div>
        <button
          onClick={() => {
            setName(!name);
          }}
        >
          Zmiana imienia i render useEffect
        </button>
        <p>{name ? "Łukasz" : "Dominika"}</p>
      </div>
    </div>
  );
};
