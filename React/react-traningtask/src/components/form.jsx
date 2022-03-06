import { useState } from "react";
import { useNavigate } from "react-router";
import { AddWorkerForm } from "../styled/addWorkerForm";
import { ButtonToAddWorker } from "../styled/buttons";

export const AddNewWorker = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [department, setDepartment] = useState("IT");
    const [salaryAmount, setSalaryAmount] = useState(0);
    const [currency, setCurrency] = useState("USD");
    const [pending, isPending] = useState(true);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        isPending(false);
        const workerData = {
            firstName,
            lastName,
            department,
            salaryAmount,
            currency,
        };
        console.log(workerData);

        fetch(" http://localhost:3000/workers", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(workerData),
        }).then(() => {
            isPending(true);
            console.log("Worker added!!! ");
            navigate("/");
        });
    };
    return (
        <>
            <AddWorkerForm>
                <h1>Add Worker</h1>
                <form action="" onSubmit={handleSubmit}>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        minLength={2}
                        maxLength={20}
                        type="text"
                        name="firstName"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => {
                            setFirstName(e.target.value);
                        }}
                    />
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        minLength={2}
                        maxLength={20}
                        type="text"
                        name="lastName"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => {
                            setLastName(e.target.value);
                        }}
                    />
                    <label htmlFor="Department">Department</label>
                    <select
                        name="Department"
                        id="Department"
                        value={department}
                        onChange={(e) => {
                            setDepartment(e.target.value);
                        }}
                    >
                        <option value="IT">IT</option>
                        <option value="Sales">Sales</option>
                        <option value="Administration">Administration</option>
                    </select>

                    <label htmlFor="salaryAmount">Salary Amount</label>
                    <input
                        placeholder="Amount"
                        type="number"
                        step={0.01}
                        min={0.01}
                        max={9999}
                        name="salaryAmount"
                        id="salaryAmount"
                        value={salaryAmount}
                        onChange={(e) => {
                            setSalaryAmount(e.target.value);
                        }}
                    />
                    <label htmlFor="currency">Currency</label>
                    <select
                        name="currency"
                        id="currency"
                        value={currency}
                        onChange={(e) => {
                            setCurrency(e.target.value);
                        }}
                    >
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="PLN">PLN</option>
                    </select>
                    {pending ? (
                        <ButtonToAddWorker>Add Worker</ButtonToAddWorker>
                    ) : (
                        <ButtonToAddWorker>Adding ...</ButtonToAddWorker>
                    )}
                    <ButtonToAddWorker
                        cancel
                        onClick={() => {
                            navigate("/");
                        }}
                    >
                        Cancel
                    </ButtonToAddWorker>
                </form>
            </AddWorkerForm>
        </>
    );
};
