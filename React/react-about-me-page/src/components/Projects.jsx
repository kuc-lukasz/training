import { SingleProject } from "./SingleProject";

import { useFetch } from "./useFetch";
import ProjectsStyles from "../styles/Projects.module.css";
import Navigation from "./Navigation";

export const Projects = () => {
    const {
        data: projects,
        isPending,
        error,
    } = useFetch("http://localhost:3005/Projects");

    return (
        <div className={ProjectsStyles.mainWindow}>
            {error && <div>Nie możemy pobrać danych</div>}
            {isPending && <div>Loading ... </div>}
            {projects && <SingleProject projects={projects} title="Projects" />}
            <Navigation />
        </div>
    );
};
