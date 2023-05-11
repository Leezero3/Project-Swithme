import { Layout } from "common/feature/index";
import React from "react";
import styled from "styled-components";
import notFound from "../assets/not-found-404-error.png"

function NotFound() {
    return (
        <Notfound>
            <img src={notFound} alt="404error" className="notfound"/>
            <h1>존재하지 않는 페이지 입니다.</h1>
        </Notfound>
    );
}

export default NotFound;

const Notfound = styled.div`
    width:100%;
    height:200px;
    margin-top:100px;
    text-align:center;
    color:#2e58ff;
    font-size:1rem;
    font-weight:500;
    height:150px;
    height:150px;
    & > .notfound{
        width:150px;
        height:150px;
    }
`