// import { AboutMe } from "./AboutMe";
// import { Projects } from "./Projects";
// import { SingleProjectWindow } from "./SingleProjectWindow";

import { ImageProfile } from "./ImageProfile";
import { Link } from "react-router-dom";
import HP from "../styles/HomePage.module.css";

export const HomePage = () => {
    return (
        <div className={HP.mainHomePage}>
            <div className={HP.aboutme}>
                <div className={HP.personalInfo}>
                    <h2 className={HP.h2}>Łukasz Kuc</h2>
                    <h5 className={HP.h5}>Front-end developer</h5>
                    <p className={HP.p}>
                        html | css | javascript | react | typescript
                    </p>
                </div>
                <div className="HP.links">
                    <Link to="/aboutme" className={HP.a}>
                        About Me
                    </Link>
                    <Link to="/projects" className={HP.a}>
                        Projects
                    </Link>
                </div>
            </div>
            <div className={HP.imageProfile}>
                <ImageProfile />
            </div>
        </div>
    );
};
