import styled, { css } from "styled-components";

const sharedStyles = css`
    box-shadow: 0px 0px 2px 0px black;
    border-radius: 10px;
    border: none;
    font-weight: 600;
    text-transform: uppercase;
    cursor: pointer;
    margin: 15px;
`;

export const Button = styled.button`
    ${sharedStyles}
    background-color: #03611f;
    width: 200px;
    height: 70px;
    & > a {
        text-decoration: none;
        color: white;
        font-size: large;
    }
`;

export const ButtonToAddWorker = styled.button`
    ${sharedStyles}
    width:${({ cancel }) => (cancel ? "120px" : "200px")};
    height: 50px;
    background-color: ${({ cancel }) => (cancel ? "#961616" : "#0b7981")};
    color: white;
    margin-top: ${({ cancel }) => cancel && "0"};
`;
