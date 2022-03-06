import {
    AllSummary,
    DepartmentsLegend,
    PieChartLegend,
    SinglePieChartBox,
    SummaryContainer,
    SummaryNumbers,
} from "../styled/summaryContainer";
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
            color: "#0494c0",
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
            color: "#961616",
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
            color: "#03611f",
        });
        return salesSummary;
    };

    const itSummary = summaryITDepartment();
    const admSummary = summaryAdministrationDepartment();
    const salesSummary = summarySalesDepartment();

    return (
        <>
            <SummaryContainer>
                <h2>Salary Summary</h2>
                <AllSummary>
                    <DepartmentsLegend>
                        <SinglePieChartBox>
                            <SummaryNumbers it>
                                <p>IT</p>
                                <p>{itSummary}</p>
                            </SummaryNumbers>
                            <PieChartLegend it></PieChartLegend>
                        </SinglePieChartBox>
                        <SinglePieChartBox>
                            <SummaryNumbers>
                                <p>Sales</p>
                                <p>{salesSummary}</p>
                            </SummaryNumbers>
                            <PieChartLegend></PieChartLegend>
                        </SinglePieChartBox>
                        <SinglePieChartBox>
                            <SummaryNumbers adm>
                                <p>Administration</p>
                                <p>{admSummary}</p>
                            </SummaryNumbers>
                            <PieChartLegend adm></PieChartLegend>
                        </SinglePieChartBox>
                    </DepartmentsLegend>
                    <PieChartForDepartments dataToDisplay={arrayToPie} />
                </AllSummary>
            </SummaryContainer>
        </>
    );
};
