import styled from "styled-components";

export const SummaryContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    margin: 20px;
    padding: 20px;
    border-radius: 10px;
    width: -webkit-fill-available;
    box-shadow: 0px 0px 15px 0px #a6a6a6;
    color: #0f7670;
    & > h2 {
        margin: 0;
        text-transform: uppercase;
    }

    @media screen and (max-width: 700px) {
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 290px;
    }
`;

export const AllSummary = styled.div`
    width: -webkit-fill-available;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;

    @media screen and (max-width: 700px) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`;

export const DepartmentsLegend = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: min-content;
    @media screen and (max-width: 700px) {
        order: 1;
    }
`;

export const SinglePieChartBox = styled.div`
    box-shadow: 0px 0px 15px 0px #a6a6a6;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    margin: 10px;
    padding: 5px 40px;
    min-width: 200px;
`;

export const SummaryNumbers = styled.div`
    margin: 0px 10px 0 0;

    text-align: left;

    color: ${({ it, adm }) => (it ? "#0494c0" : adm ? "#961616" : "#03611f")};
    & > :first-child {
        margin: 0;
        font-size: medium;
        font-weight: 600;
    }
    & > :last-child {
        margin: 0;
        font-weight: 600;
        font-size: large;
    }
`;
export const PieChartLegend = styled.div`
    width: 25px;
    height: 25px;
    background-color: ${({ it, adm }) =>
        it ? "#0494c0" : adm ? "#961616" : "#03611f"};
    border-radius: 50%;
    @media screen and (max-width: 700px) {
        order: 0;
    }
`;
