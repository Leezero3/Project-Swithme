import React from "react";
import styled from "styled-components";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

function GobackButton() {
    const navigate = useNavigate();
    return (
        <GoBackButton onClick={() => navigate(-1)}>
            <AiOutlineArrowLeft />
        </GoBackButton>
    );
}

export default GobackButton;

const GoBackButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: transparent;
    border: 1px solid #c4c4c4;
    color: #7f7f7f;
    width: 40px;
    height: 40px;
    transition: all 0.3s ease;
    &:hover {
        border: 1px solid #7f7f7f;
        color: #8c8c8c;
    }
`;
