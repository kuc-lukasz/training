// import { useState } from "react";
import { BlogList } from "./BlogList";
import { useFetch } from "./useFetch";
import { useHistory } from "react-router-dom";
import { useState } from "react";

export const Home = () => {
    const history = useHistory();
    const {
        data: blog,
        isPending,
        error,
        setRefresh,
    } = useFetch("http://localhost:8000/blogs");

    const handleDelete = (id) => {
        setRefresh(false);
        fetch("http://localhost:8000/blogs/" + id, {
            method: "DELETE",
        }).then(() => {
            console.log("Post został usunięty");
            history.push("/");
            setRefresh(false);
        });
    };

    return (
        <div className="home">
            <h2>Home page</h2>
            {error && <div>Nie możemy pobrać danych</div>}
            {isPending && <div>Loading ... </div>}
            {blog && (
                <BlogList
                    blogs={blog}
                    title="All Blogs"
                    handleDelete={handleDelete}
                />
            )}

            <div></div>
        </div>
    );
};
