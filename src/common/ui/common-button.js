import React from "react";
import styled from "styled-components";
// import "material-icons/iconfont/material-icons.css"; - 아이콘 추가 항목 필요시 추가

const buttonSizes = {
    large: {
        fontWeight: "bold",
        minWidth: "300px",
        height: "45px",
    },
    medium: {
        fontWeight: "normal",
        minWidth: "150px",
        height: "45px",
    },
    small: {
        fontWeight: "normal",
        minWidth: "100px",
        height: "35px",
    },
    headerButton: {
        fontWeight: "normal",
        minWidth: "130px",
        height: "35px",
        padding: 0,
    },
    postDetailApplyButton: {
        fontWeight: "normal",
        minWidth: "110px",
        height: "110px",
        padding: 0,
    },
    postDetailCommentButton: {
        fontWeight: "normal",
        minWidth: "110px",
        height: "35px",
        padding: 0,
    },
    joinLoginButton: {
        fontWeight: "normal",
        minWidth: "250px",
        height: "40px",
        padding: 0,
    },
};

const ButtonStyle = styled.button`
    // size 버튼 사이즈별 props 전달 아래 3항목(font-weight, min-width, height)
    font-weight: ${(props) => buttonSizes[props.size].fontWeight};
    min-width: ${(props) => buttonSizes[props.size].minWidth};
    height: ${(props) => buttonSizes[props.size].height};

    font-size:18px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    color: #fff;
    background-color: #1369cf;
    transition: all 0.03s ease-out;
    &:hover {
        background-color: #1e88e5;
        box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
        /* hover background 추천 색깔 -  #1e88e5, #1976d2  */
    }

    /* 아이콘 스타일 - 필요시 추가 */
    /* gap: 20px; 텍스트와 아이콘 사이의 간격을 조절 */
    /* .material-icons {
        font-size: 14px;
        vertical-align: middle;
        margin-left: 5px;
    } */
`;

const CommonButton = ({ children, size = "medium", ...rest }) => {
    return (
        <ButtonStyle size={size} {...rest}>
            {children}
            {/* 아이콘 추가 항목 - 필요시 추가 */}
            {/* {icon && <span className="material-icons">{icon}</span>} */}
        </ButtonStyle>
    );
};

export default CommonButton;
