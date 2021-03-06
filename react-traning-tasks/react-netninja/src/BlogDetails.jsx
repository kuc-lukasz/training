import { useParams } from "react-router-dom";
import { useFetch } from "./useFetch";
import { useHistory } from "react-router-dom";

export const BlogDetails = () => {
    const history = useHistory();
    // Aby połapać konkretny id ścieżki z konkretnym blogiem używamy hooka z routera. Tutaj chcemy po ID łapać
    const { id } = useParams();
    const {
        data: blog,
        isPending,
      error,
    } = useFetch("http://localhost:8000/blogs/" + id);

    const handleDelete = (id) => {
        fetch("http://localhost:8000/blogs/" + id, {
            method: "DELETE",
        }).then(() => {
            console.log("Post został usunięty");
            history.push("/");
        });
    };

    return (
        <div className="blog-details">
            {error && <div>Nie możemy pobrać danych</div>}
            {isPending && <div>Loading ... </div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={() => handleDelete(blog.id)}>
                        Delete Post
                    </button>
                </article>
            )}
        </div>
    );
};
