import SP from "../styles/SingleProject.module.css";
import { Link } from "react-router-dom";
export const SingleProject = ({ projects }) => {
    return (
        <>
            {projects.map((project) => {
                return (
                    <div className={SP.singleProjectWindow} key={project.title}>
                        <Link to={`/projects/${project.id}`} className={SP.a}>
                            <h4 className={SP.h4}>{project.title}</h4>
                            <div className={SP.img}>
                                <img src={project.img} alt="project-img" />
                            </div>
                            <div className={SP.language}>
                                {project.language.map((lang) => {
                                    return <p className={SP.p}>{lang}</p>;
                                })}
                            </div>
                        </Link>
                    </div>
                );
            })}
        </>
    );
};
