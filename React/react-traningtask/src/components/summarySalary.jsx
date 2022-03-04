import { PieChartForDepartments } from "./piechart";

export const SummaryOfSalary = ({ workers }) => {
    const arrayToSummary = [...workers];
    const arrayToPie = [];

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

        arrayToPie.push({
            title: "IT",
            value: parseFloat(itSummary),
            color: "#E38627",
        });
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
        arrayToPie.push({
            title: "Administration",
            value: parseFloat(administratioSummary),
            color: "#85480b",
        });
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
        arrayToPie.push({
            title: "Sales",
            value: parseFloat(salesSummary),
            color: "#3b2106",
        });
        return salesSummary;
    };

    const itSummary = summaryITDepartment();
    const admSummary = summaryAdministrationDepartment();
    const salesSummary = summarySalesDepartment();

    return (
        <>
            <PieChartForDepartments dataToDisplay={arrayToPie} />
            <h1>IT Salary: {itSummary}</h1>
            <h1>
                Administration Salary:
                {admSummary}
            </h1>
            <h1>Sales Salary: {salesSummary}</h1>
        </>
    );
};
