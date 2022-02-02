import { useState } from "react";
import { BlogList } from "./BlogList";
import { useFetch } from "./useFetch";

export const Home = () => {
  const [name, setName] = useState(true);

  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  const handleDelete = (id) => {
    // const newBlogsArray = blogs.filter((blog) => blog.id !== id);
  };

  return (
    <div className="home">
      <h2>Home page</h2>
      {error && <div>Nie możemy pobrać danych</div>}
      {isPending && <div>Loading ... </div>}
      {blogs && (
        <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      )}

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
