import "../styles/Photos.css";
import SingleUserLogo from "../icons/user.svg";
import UsersLogo from "../icons/users.svg";
import PostLogo from "../icons/posts.svg";
import ToDoLogo from "../icons/todo.svg";
import HomePhoto from "../icons/home.svg";

export const SingleUserPhoto = () => {
  return <img className="single-photo" alt="userPhoto" src={SingleUserLogo} />;
};

export const PluralPhoto = () => {
  return <img className="plural-photo" alt="userPhoto" src={UsersLogo} />;
};

export const PostPhoto = () => {
  return <img className="plural-photo" alt="postPhoto" src={PostLogo} />;
};

export const ToDoPhoto = () => {
  return <img className="plural-photo" alt="todoPhoto" src={ToDoLogo} />;
};

export const HomPhoto = () => {
  return <img className="plural-photo" alt="homePhoto" src={HomePhoto} />;
};
