export const SummaryOfSalary = ({ workers }) => {
    const arrayToSummary = [...workers];

    const summaryITDepartment = () => {
        const itDepartmentList = arrayToSummary.filter(
            (worker) => worker.department === "IT"
        );
        const itDepartmentArr = itDepartmentList.map(
            (worker) => worker.salaryAmount
        );
        const itSummary = itDepartmentArr.reduce((prev, cur) => {
            return (Number.parseFloat(prev) + Number.parseFloat(cur)).toFixed(
                2
            );
        }, 0);

        return itSummary;
    };

    const summaryAdministrationDepartment = () => {
        const administrationDepartmentList = arrayToSummary.filter(
            (worker) => worker.department === "Administration"
        );
        const administrationDepartmentArr = administrationDepartmentList.map(
            (worker) => worker.salaryAmount
        );
        const administratioSummary = administrationDepartmentArr.reduce(
            (prev, cur) => {
                return (
                    Number.parseFloat(prev) + Number.parseFloat(cur)
                ).toFixed(2);
            },
            0
        );

        return administratioSummary;
    };

    const summarySalesDepartment = () => {
        const salesDepartmentList = arrayToSummary.filter(
            (worker) => worker.department === "Sales"
        );
        const salesDepartmentListDepartmentArr = salesDepartmentList.map(
            (worker) => worker.salaryAmount
        );
        const salesSummary = salesDepartmentListDepartmentArr.reduce(
            (prev, cur) => {
                return (
                    Number.parseFloat(prev) + Number.parseFloat(cur)
                ).toFixed(2);
            },
            0
        );

        return salesSummary;
    };

    console.log(summaryITDepartment(arrayToSummary));
    console.log(summaryAdministrationDepartment(arrayToSummary));
    console.log(summarySalesDepartment(arrayToSummary));

    return (
        <>
            <h1>IT Salary: {summaryITDepartment(arrayToSummary)}</h1>
            <h1>
                Administration Salary:
                {summaryAdministrationDepartment(arrayToSummary)}
            </h1>
            <h1>Sales Salary: {summarySalesDepartment(arrayToSummary)}</h1>
        </>
    );
};
