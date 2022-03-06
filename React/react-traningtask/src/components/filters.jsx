import { useState } from "react";
import { FilterContainer } from "../styled/filterContainer";
import { Table } from "../styled/tableContainer";

export const Filters = ({ workers, deleteBtn }) => {
    const [filterByPerson, setFilterByPerson] = useState("");
    const [filterByDepartment, setFilterByDepartment] = useState("");
    const [filterByMinSalary, setFilterByMinSalary] = useState(0);
    const [filterByMaxSalary, setFilterByMaxSalary] = useState(99999);

    const filterSalary = workers.filter((worker) => {
        const workerSal = worker.salaryAmount;
        return workerSal >= filterByMinSalary && workerSal <= filterByMaxSalary;
    });
    const filterDepartment = filterSalary.filter((worker) => {
        const workerDepartment = worker.department;
        return workerDepartment === filterByDepartment;
    });
    const filterPerson = filterDepartment.filter((worker) => {
        const workerName = `${worker.firstName}${worker.lastName}`;
        return workerName.toLowerCase().includes(filterByPerson.toLowerCase());
    });
    const filterPersonNoDep = filterSalary.filter((worker) => {
        const workerName = `${worker.firstName}${worker.lastName}`;
        return workerName.toLowerCase().includes(filterByPerson.toLowerCase());
    });

    return (
        <>
            <FilterContainer>
                <div>
                    <form>
                        <label>Find worker</label>
                        <input
                            name="search"
                            value={filterByPerson}
                            placeholder="Write name ..."
                            onChange={(e) => {
                                setFilterByPerson(e.target.value);
                            }}
                        ></input>
                    </form>
                    <form>
                        <label htmlFor="Department">Department</label>
                        <select
                            name="Department"
                            value={filterByDepartment}
                            id="Department"
                            onChange={(e) => {
                                setFilterByDepartment(e.target.value);
                            }}
                        >
                            <option value="" placeholder=""></option>
                            <option value="IT">IT</option>
                            <option value="Sales">Sales</option>
                            <option value="Administration">
                                Administration
                            </option>
                        </select>
                    </form>
                </div>

                <form>
                    <div>
                        <label htmlFor="minVal">Min. Salary</label>
                        <input
                            type="range"
                            max={10000}
                            min={0}
                            step={100}
                            name="minVal"
                            value={filterByMinSalary}
                            onChange={(e) => {
                                setFilterByMinSalary(e.target.valueAsNumber);
                            }}
                        ></input>
                        <span>{filterByMinSalary}</span>
                    </div>
                    <div>
                        <label htmlFor="maxVal">Max. Salary</label>
                        <input
                            type="range"
                            max={10000}
                            min={0}
                            step={100}
                            name="maxVal"
                            value={filterByMaxSalary}
                            onChange={(e) => {
                                setFilterByMaxSalary(e.target.valueAsNumber);
                            }}
                        ></input>
                        <span>{filterByMaxSalary}</span>
                    </div>
                </form>
                {filterByMinSalary > filterByMaxSalary && (
                    <h3 style={{ color: "red" }}>
                        Min. Salary amount can't be grater than Max.salary
                    </h3>
                )}
            </FilterContainer>
            <Table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Department</th>
                        <th>Salary Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {filterByPerson.length > 0 &&
                    filterByDepartment.length > 0 ? (
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
                                                    X
                                                </button>
                                            </td>
                                        </tr>
                                    </>
                                );
                            })}
                        </>
                    ) : filterByPerson.length > 0 ? (
                        <>
                            {filterPersonNoDep.map((worker) => {
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
                                                    X
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
                                                    X
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
                                                    X
                                                </button>
                                            </td>
                                        </tr>
                                    </>
                                );
                            })}
                        </>
                    )}
                </tbody>
            </Table>
        </>
    );
};
