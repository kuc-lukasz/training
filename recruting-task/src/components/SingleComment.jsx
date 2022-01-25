import "../styles/Comments.css";

export const SingleComments = ({ Name, Email, Content }) => {
  return (
    <>
      <ul className="comments">
        <h4>
          {Name} <span>({Email})</span>
        </h4>

        <p>{Content}</p>
      </ul>
    </>
  );
};
