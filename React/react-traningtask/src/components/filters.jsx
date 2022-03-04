import { useState } from "react";

export const Filters = ({ workers, deleteBtn }) => {
    const [filterByPerson, setFilterByPerson] = useState("");
    const [filterByDepartment, setFilterByDepartment] = useState("");
    const [filterByMinSalary, setFilterByMinSalary] = useState(0);
    const [filterByMaxSalary, setFilterByMaxSalary] = useState(9999);

    const filterSalary = workers.filter((worker) => {
        const workerSal = worker.salaryAmount;
        return workerSal <= filterByMaxSalary && workerSal >= filterByMinSalary;
    });
    const filterDepartment = filterSalary.filter((worker) => {
        const workerDepartment = worker.department;
        return workerDepartment === filterByDepartment;
    });
    const filterPerson = filterDepartment.filter((worker) => {
        const workerName = `${worker.firstName}${worker.lastName}`;
        return workerName.toLowerCase().includes(filterByPerson.toLowerCase());
    });

    return (
        <>
            <form>
                <h2>Filter by: </h2>
                <label>Worker</label>
                <input
                    name="search"
                    value={filterByPerson}
                    placeholder="Write name ..."
                    onChange={(e) => {
                        setFilterByPerson(e.target.value);
                    }}
                ></input>
            </form>
            <form action="">
                <label htmlFor="Department">Department</label>
                <select
                    name="Department"
                    value={filterByDepartment}
                    id="Department"
                    onChange={(e) => {
                        setFilterByDepartment(e.target.value);
                    }}
                >
                    <option value="" placeholder="Choose one"></option>
                    <option value="IT">IT</option>
                    <option value="Sales">Sales</option>
                    <option value="Administration">Administration</option>
                </select>
            </form>
            <form
                action=""
                onSubmit={(e) => {
                    e.preventDefault();
                }}
            >
                <label>Min. Salary</label>
                <input
                    type="range"
                    min={1}
                    max={9999}
                    step={100}
                    name="minVal"
                    value={filterByMinSalary}
                    onChange={(e) => {
                        setFilterByMinSalary(e.target.value);
                    }}
                ></input>
                {filterByMinSalary}
                <label>Max. Salary</label>
                <input
                    type="range"
                    min={1}
                    max={9999}
                    step={100}
                    name="maxVal"
                    value={filterByMaxSalary}
                    onChange={(e) => {
                        setFilterByMaxSalary(e.target.value);
                    }}
                ></input>
                {filterByMaxSalary}
                {filterByMinSalary > filterByMaxSalary && (
                    <h3>Min. Salary amount can't be grater than Max.salary </h3>
                )}
            </form>

            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Department</th>
                        <th>Salary Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {filterByPerson.length > 0 ? (
                        <>
                            {filterPerson.map((worker) => {
                                return (
                                    <>
                                        <tr key={worker.id}>
                                            <td>{worker.firstName}</td>
                                            <td>{worker.lastName}</td>
                                            <td>{worker.department}</td>
                                            <td>{`${worker.salaryAmount} ${worker.currency}`}</td>
                                            <td>
                                                <button
                                                    onClick={() =>
                                                        deleteBtn(worker.id)
                                                    }
                                                >
                                                    Delete Worker
                                                </button>
                                            </td>
                                        </tr>
                                    </>
                                );
                            })}
                        </>
                    ) : filterByDepartment.length > 0 ? (
                        <>
                            {filterDepartment.map((worker) => {
                                return (
                                    <>
                                        <tr key={worker.id}>
                                            <td>{worker.firstName}</td>
                                            <td>{worker.lastName}</td>
                                            <td>{worker.department}</td>
                                            <td>{`${worker.salaryAmount} ${worker.currency}`}</td>
                                            <td>
                                                <button
                                                    onClick={() =>
                                                        deleteBtn(worker.id)
                                                    }
                                                >
                                                    Delete Worker
                                                </button>
                                            </td>
                                        </tr>
                                    </>
                                );
                            })}
                        </>
                    ) : (
                        <>
                            {filterSalary.map((worker) => {
                                return (
                                    <>
                                        <tr key={worker.id}>
                                            <td>{worker.firstName}</td>
                                            <td>{worker.lastName}</td>
                                            <td>{worker.department}</td>
                                            <td>{`${worker.salaryAmount} ${worker.currency}`}</td>
                                            <td>
                                                <button
                                                    onClick={() =>
                                                        deleteBtn(worker.id)
                                                    }
                                                >
                                                    Delete Worker
                                                </button>
                                            </td>
                                        </tr>
                                    </>
                                );
                            })}
                        </>
                    )}
                </tbody>
            </table>
        </>
    );
};
