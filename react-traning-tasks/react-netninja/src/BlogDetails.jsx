import { useParams } from "react-router-dom";
import { useFetch } from "./useFetch";

export const BlogDetails = () => {
  // Aby połapać konkretny id ścieżki z konkretnym blogiem używamy hooka z routera. Tutaj chcemy po ID łapać
  const { id } = useParams();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);

  return (
    <div className="blog-details">
      {error && <div>Nie możemy pobrać danych</div>}
      {isPending && <div>Loading ... </div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
        </article>
      )}
    </div>
  );
};
