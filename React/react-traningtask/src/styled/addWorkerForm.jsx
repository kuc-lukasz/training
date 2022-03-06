import styled from "styled-components";

export const AddWorkerForm = styled.div`
    margin: 20px auto;
    padding: 10px;
    border-radius: 10px;
    width: -webkit-fill-available;
    box-shadow: 0px 0px 15px 0px #a6a6a6;
    display: flex;
    align-items: center;
    flex-direction: column;
    max-width: 800px;
    color: #0b7981;
    & > h1 {
        margin: 5px 0 15px 0;
    }

    & > form {
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 30px;
        margin: 0 0 10px 0;
        box-shadow: 0px 0px 10px 5px #c1c1c1;
        border-radius: 10px;
    }
    & > form > label {
        margin: 15px 0 -10px 0;
        font-weight: 600;
        font-size: medium;
    }
    & > form > input,
    textarea,
    select {
        min-width: 300px;
        min-height: 35px;
        border-radius: 10px;
        border: 1px solid #0b7981;
        text-align: center;
        outline: #0b7981;
        color: #0b7981;
        margin: 5px;
    }
    & > form > input:focus,
    textarea:focus,
    select:focus {
        border: 2px solid #0b7981;
    }
    @media screen and (max-width:400px) {
        & > form{
            width: 295px;
        }
    }
        
    }
`;
