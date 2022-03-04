import { PieChart } from "react-minimal-pie-chart";

export const PieChartForDepartments = ({ dataToDisplay }) => {
    return (
        <div>
            <PieChart
                style={{
                    width: "300px",
                    fontFamily:
                        '"Nunito Sans", -apple-system, Helvetica, Arial, sans-serif',
                    fontSize: "8px",
                }}
                data={dataToDisplay}
                lineWidth={70}
                rounded={false}
                label={({ dataEntry }) => {
                    return `                                                ${Math.round(
                        dataEntry.percentage
                    )}% 
                        `;
                    // ${dataEntry.title}
                }}
                labelPosition={60}
                labelStyle={{
                    fill: "#ffffff",
                    textShadow: "1px 1px #000000",
                    pointerEvents: "none",
                    fontSize: "7",
                    fontWeight: "600",
                }}
                radius={40}
            />
        </div>
    );
};
