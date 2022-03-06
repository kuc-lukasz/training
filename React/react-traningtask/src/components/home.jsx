import { useFetch } from "./fetch-Data";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import { Filters } from "./filters";
import { SummaryOfSalary } from "./summarySalary";
import { MainHomeContainer } from "../styled/homeContainer.jsx";
import { Button } from "../styled/buttons";

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
            pending(false);
        });
    };

    return (
        <>
            {error && <h3>We have some errors, try again later</h3>}
            {pending && <div>Loading...</div>}
            <MainHomeContainer>
                <Button>
                    <NavLink to="/create">Add new worker</NavLink>
                </Button>

                <Filters
                    workers={workers}
                    deleteBtn={deleteBtn}
                    key={workers.id}
                />
                <SummaryOfSalary workers={workers} />
            </MainHomeContainer>
        </>
    );
};
