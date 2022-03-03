import { useFetch } from "./fetch-Data";
import { WorkerList } from "./WorkersList";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

export const Home = () => {
    const navigate = useNavigate();
    const {
        data: workers,
        setRefresh,
        pending,
        error,
    } = useFetch("http://localhost:3000/workers/");

    const deleteBtn = (id) => {
        setRefresh(false);
        fetch("http://localhost:3000/workers/" + id, {
            method: "DELETE",
        }).then(() => {
            setRefresh(true);
            navigate("/");
        });
    };

    return (
        <>
            <button>
                <NavLink to="/create">Create post</NavLink>
            </button>
            <WorkerList workers={workers} deleteBtn={deleteBtn} />
        </>
    );
};
