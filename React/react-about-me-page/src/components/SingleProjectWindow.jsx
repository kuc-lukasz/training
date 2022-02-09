import { useFetch } from "./useFetch";
import { useParams } from "react-router-dom";
import SPW from "../styles/SingleProjectWindow.module.css";
import Navigation from "./Navigation";

export const SingleProjectWindow = () => {
    const { id } = useParams();
    const {
        data: projects,
        isPending,
        error,
    } = useFetch("http://localhost:3005/Projects/" + id);

    return (
        <>
            {error && <div>Nie możemy pobrać danych</div>}
            {isPending && <div>Loading ... </div>}
            {projects && (
                <div key={projects.id} className={SPW.mainWindow}>
                    <h2 className={SPW.title}>{projects.title}</h2>
                    <div className={SPW.vidAndAbout}>
                        <iframe
                            src={projects.videoSrc}
                            title={projects.title}
                            className={SPW.video}
                        ></iframe>

                        <div className={SPW.projectDescribe}>
                            <h3 className={SPW.projectDescribeTitle}>
                                About Project
                            </h3>
                            <p className={SPW.projectDescribeContent}>
                                {projects.describe}
                            </p>
                        </div>
                    </div>

                    <a href={projects.github} className={SPW.a} target="_blank">
                        <img src={projects.githubIcon} alt="githubIcon" />
                        <p className={SPW.githubText}>GITHUB CODE</p>
                    </a>
                </div>
            )}
            <Navigation />
        </>
    );
};

export default SingleProjectWindow;
