import { useNavigate } from "react-router-dom";
import Nav from "../styles/Navigation.module.css";
export const Navigation = () => {
    const navigate = useNavigate();
    return (
        <div className={Nav.mainContainer}>
            <button onClick={() => navigate("/")} className={Nav.btn}>
                Home /
            </button>
            <button onClick={() => navigate("/aboutme")} className={Nav.btn}>
                Aboute Me /
            </button>
            <button onClick={() => navigate("/projects")} className={Nav.btn}>
                Projects /
            </button>
        </div>
    );
};

export default Navigation;
