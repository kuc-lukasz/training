export const WorkerList = ({ workers, deleteBtn }) => {
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
                    {workers.map((worker) => {
                        return (
                            <>
                                <tr key={worker.id}>
                                    <td>{worker.firstName}</td>
                                    <td>{worker.lastName}</td>
                                    <td>{worker.department}</td>
                                    <td>{`${worker.salaryAmount} ${worker.currency}`}</td>
                                    <td>
                                        <button
                                            onClick={() => deleteBtn(worker.id)}
                                        >
                                            Delete Worker
                                        </button>
                                    </td>
                                </tr>
                            </>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};
