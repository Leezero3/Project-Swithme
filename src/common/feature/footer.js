import React from "react";
import styled from "styled-components";

function footer() {
    return (
        <Footer>
            <Container>
                <TextWrapper>(주) 스윗미</TextWrapper>
                <TextWrapper>
                    <p>{`스윗미 만든 사람들 👬👭👬 : 강준수🐺 김진영💀 유범모🐺 이승현🌺 이영은🦉 조양기🦇`}</p>
                </TextWrapper>
                <TextWrapper>
                    <p>Copyright © 15조 All rights reserved</p>
                </TextWrapper>
            </Container>
        </Footer>
    );
}

export default footer;

const Footer = styled.footer`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 120px;
    background-color: #e6e6e6;
    /* #d1d1d1; */
    /* #e6e6e6
#f2f2f2
#f7f7f7
#fafafa
#fcfcfc */
`;

const Container = styled.div`
    width: 80%;
    height: 100%;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    /* height: 60px; */
    /* align-items: center; */
`;

const TextWrapper = styled.div`
    font-weight: 600;
    margin: 3.5px;
    p {
        font-size: 11px;
        font-weight: 300;
        line-height: 1.4;
        margin: 0;
    }
`;
