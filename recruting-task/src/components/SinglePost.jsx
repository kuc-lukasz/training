import "../styles/SinglePost.css";

export const SinglePost = ({ userID, Title, Content }) => {
  return (
    <div className="posts">
      <h3>POST</h3>
      <h5>ID: {userID}</h5>
      <h4>Title: {Title}</h4>
      <p>{Content}</p>
    </div>
  );
};
