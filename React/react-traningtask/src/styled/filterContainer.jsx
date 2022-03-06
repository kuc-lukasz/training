import styled from "styled-components";

export const FilterContainer = styled.div`
    margin: 20px;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0px 0px 15px 0px #a6a6a6;
    color: #0f7670;
    & > form {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: row;

        & > div {
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-direction: row;

            margin: 0 5px;
            & > label {
                margin: 0 5px 0 0;
                font-weight: 600;
                font-size: medium;
            }
            & > input[type="range"] {
                overflow: hidden;
                -webkit-appearance: none;
                background-color: #dbdbdb;
                min-width: 200px;
                min-height: 17px;
                border-radius: 10px;
                border: 1px solid #0b7981;
                color: #0b7981;
            }
            & > input[type="range"]::-webkit-slider-thumb {
                width: 14px;
                -webkit-appearance: none;
                height: 14px;
                border-radius: 50%;
                cursor: pointer;
                background: #0b7981;
            }
            & > span {
                width: 20px;
                margin: 0 0 0 5px;
                font-weight: 600;
                font-size: medium;
            }
        }
        @media screen and (max-width: 700px) {
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }
    }
    & > div {
        color: #0f7670;
        margin: 5px 10px 10px 25px;
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        flex-wrap: wrap;
        & > form {
            margin: 10px;
            padding: 5px;
            & > label {
                margin: 0 5px 0 0;
                font-weight: 600;
                font-size: medium;
            }
            & > input,
            select,
            option {
                min-width: 200px;
                min-height: 35px;
                border-radius: 10px;
                border: 1px solid #0b7981;
                text-align: center;
                outline: #0b7981;
                color: #0b7981;
                font-size: medium;
            }
        }
        @media screen and (max-width: 700px) {
            padding: 5px 15px;
        }
    }
    @media screen and (max-width: 700px) {
        padding: 10px;
    }
`;
