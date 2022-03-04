import styled from "styled-components";

export const SummaryContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    margin: 20px;
    padding: 20px;
    border-radius: 10px;
    width: -webkit-fill-available;
    box-shadow: 0px 0px 15px 0px #a6a6a6;
    & > :first-child {
        color: #0f7670;
        margin: 0;
        & > h2 {
            margin: 0;
            text-transform: uppercase;
        }
    }
`;

export const SinglePieChartBox = styled.div`
    box-shadow: 0px 0px 15px 0px #a6a6a6;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    margin: 10px;
    padding: 10px 40px;
`;

export const SummaryNumbers = styled.div`
    margin: 0px;
    font-size: medium;

    color: ${({ it, adm }) => (it ? "#0494c0" : adm ? "#961616" : "#03611f")};
    & > :last-child {
        font-weight: 600;
    }
`;
export const PieChartLegend = styled.div`
    width: 25px;
    height: 25px;
    background-color: ${({ it, adm }) =>
        it ? "#0494c0" : adm ? "#961616" : "#03611f"};
    border-radius: 50%;
`;
