import {
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
                <div>
                    <h2>Salary Summary</h2>
                    <SinglePieChartBox>
                        <SummaryNumbers it>
                            <span>IT: </span>
                            <span>{itSummary}</span>
                        </SummaryNumbers>

                        <PieChartLegend it></PieChartLegend>
                    </SinglePieChartBox>
                    <SinglePieChartBox>
                        <SummaryNumbers adm>
                            <span>Administration: </span>
                            <span>{admSummary}</span>
                        </SummaryNumbers>

                        <PieChartLegend adm></PieChartLegend>
                    </SinglePieChartBox>
                    <SinglePieChartBox>
                        <SummaryNumbers>
                            <span>Sales: </span>
                            <span>{salesSummary}</span>
                        </SummaryNumbers>

                        <PieChartLegend></PieChartLegend>
                    </SinglePieChartBox>
                </div>

                <PieChartForDepartments dataToDisplay={arrayToPie} />
            </SummaryContainer>
        </>
    );
};
