import { useState } from "react";
import { useHistory } from "react-router-dom";

export const CreateBlog = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("Łukasz");
    const [ispending, setIsPending] = useState(true);
    const [info, setInfo] = useState(false);

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
        console.log(blog);

        setIsPending(false);

        fetch("http://localhost:8000/blogs", {
            //metoda wysyłania Post, Get, Put, Delete
            method: "POST",
            // mówimy serverowi jaki typ danych wysyłamy
            headers: {
                "Content-Type": "application/json",
            },
            //w body wstawiamy treść jaka ma być dodana do danych, opakowujemy to w JSON.Stringify( )
            body: JSON.stringify(blog),
        }).then(() => {
            console.log("Post added!!! ");
            setIsPending(true);
            setInfo(true);
            history.push("/");
        });
        setTitle("");
        setBody("");
        setAuthor("");
    };
    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="title">
                    Blog Title
                    <input
                        type="text"
                        // value={ }
                        required
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </label>

                <label htmlFor="body">
                    Blog Body
                    <textarea
                        name="body"
                        id=""
                        cols="30"
                        rows="10"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    ></textarea>
                </label>

                <label htmlFor="author">Blog Author</label>

                <select
                    name="author"
                    id="author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Łukasz">Łukasz</option>
                    <option value="Dominika">Dominika</option>
                </select>

                {!ispending ? (
                    <button>Adding ...</button>
                ) : (
                    <button>Add Blog</button>
                )}
                {!info ? "" : <h5 style={{ color: "green" }}>Post dodano!</h5>}
            </form>
        </div>
    );
};
