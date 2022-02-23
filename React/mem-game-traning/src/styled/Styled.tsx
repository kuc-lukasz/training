import React from "react";
import styled, { css } from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100vw;
    height: 100vh;
`;

export const SingleCard = styled.div`
    width: 150px;
    height: 150px;
    border: 1px solid black;
    margin: 5px;
    position: relative;
`;

const stylesCSSforImages = css`
    width: 100%;
    height: 100%;
`;

interface Props {
    isFlipped: boolean;
}

export const FrontImg = styled.img<Props>`
    ${stylesCSSforImages};
    z-index: ${({ isFlipped }) => (isFlipped ? 2 : 1)};
    position: absolute;
    top: 0;
    left: 0;
`;
export const BackImg = styled.img<Props>`
    ${stylesCSSforImages};
    z-index: ${({ isFlipped }) => (isFlipped ? 1 : 2)};
    position: absolute;
    top: 0;
    left: 0;
`;
