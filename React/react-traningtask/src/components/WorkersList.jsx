import { WorkersData } from "../data/db";

export const WorkerList = () => {
    const data = WorkersData();
    return (
        <>
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
                    {data.map((worker) => {
                        return (
                            <>
                                <tr key={worker.id}>
                                    <td>{worker.firstName}</td>
                                    <td>{worker.lastName}</td>
                                    <td>{worker.department}</td>
                                    <td>{`${worker.salaryAmount} ${worker.currency}`}</td>
                                </tr>
                            </>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};
