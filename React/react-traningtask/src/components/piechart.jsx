import { PieChart } from "react-minimal-pie-chart";
import { useState } from "react";

export const PieChartForDepartments = ({ dataToDisplay }) => {
    return (
        <>
            <PieChart
                style={{
                    width: "500px",
                    fontFamily:
                        '"Nunito Sans", -apple-system, Helvetica, Arial, sans-serif',
                    fontSize: "8px",
                }}
                data={dataToDisplay}
                radius={PieChart.defaultProps.radius - 15}
                lineWidth={60}
                rounded={false}
                label={
                    ({ dataEntry }) => {
                        return `
                        ${dataEntry.title}
                        ${parseFloat(dataEntry.value).toFixed(2)} 
                        (${Math.round(dataEntry.percentage)}%) 
                        `;
                    }
                    //  + "%"
                }
                labelPosition={90}
                labelStyle={{
                    fill: "#08a590",
                    opacity: 0.9,
                    pointerEvents: "none",
                    fontSize: "4",
                }}
                radius={30}
            />
        </>
    );
};
