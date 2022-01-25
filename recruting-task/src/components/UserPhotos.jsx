import "../styles/Photos.css";
import SingleUserLogo from "../icons/user.svg";
import UsersLogo from "../icons/users.svg";
import PostLogo from "../icons/posts.svg";
import ToDoLogo from "../icons/todo.svg";

export const SingleUserPhoto = () => {
  return <img className="single-photo" alt="userPhoto" src={SingleUserLogo} />;
};

export const PluralPhoto = () => {
  return (
    <div>
      <img className="plural-photo" alt="userPhoto" src={UsersLogo} />
    </div>
  );
};

export const PostPhoto = () => {
  return <img className="plural-photo" alt="userPhoto" src={PostLogo} />;
};

export const ToDoPhoto = () => {
  return <img className="plural-photo" alt="userPhoto" src={ToDoLogo} />;
};
