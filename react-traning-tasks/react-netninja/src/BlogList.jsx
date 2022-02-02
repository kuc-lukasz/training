import { Link } from "react-router-dom";

export const BlogList = ({ blogs, title, handleDelete }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>Title: {blog.title}</h2>
            <p>Author: {blog.author}</p>
          </Link>

          <button onClick={() => handleDelete(blog.id)}>Delete blog</button>
        </div>
      ))}
    </div>
  );
};
