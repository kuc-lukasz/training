import styled from "styled-components";

export const Table = styled.table`
    margin: 20px;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0px 0px 15px 0px #a6a6a6;
    color: #0f7670;
    text-align: center;

    th {
        font-size: large;
    }
    th,
    tr {
        padding: 20px;
        text-align: center;
    }
    td {
        padding: 3px;
        border: none;
        & > button {
            border: none;
            background-color: white;
            font-size: large;
            font-weight: 800px;
            color: red;
            cursor: pointer;
        }
    }
    tr:nth-child(even) {
        color: #01b9ad;
    }

    @media screen and (max-width: 600px) {
        padding: 2px;
    }
    @media screen and (max-width: 500px) {
        & > thead > tr {
            padding: 2px;
            & > th {
                font-size: small;
                padding: 5px 15px;
            }
        }

        & > tbody > tr {
            padding: 0px;
            & > td {
                font-size: small;
                padding: 0px;
            }
        }
    }
`;
