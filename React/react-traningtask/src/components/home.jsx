import { useFetch } from "./fetch-Data";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import { Filters } from "./filters";
import { SummaryOfSalary } from "./summarySalary";

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

            <Filters workers={workers} deleteBtn={deleteBtn} />
            <SummaryOfSalary workers={workers} />
        </>
    );
};
