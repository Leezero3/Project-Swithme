import React from "react";
import styled from "styled-components";

function RecruitmentInfo() {
    return (
        <Container>
            {`리액트 숙련주차 과제를 하며 같이 강의 공부할 스터디원 구합니다~ 
            올나잇 에브리데이 행복하게 같이 할 사람 구해요. 

            웰컴 투 코딩 나이트.............😇`}
        </Container>
    );
}

export default RecruitmentInfo;

const Container = styled.div`
    width: 99%;
    min-height: 100px;
    /* border: 1px solid black; */
    font-size: 17px;
    padding: 20px;
    display: flex;
    align-items: center;
    white-space: pre-line;
`;
