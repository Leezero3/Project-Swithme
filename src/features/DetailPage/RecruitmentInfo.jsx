import React from "react";
import styled from "styled-components";

function RecruitmentInfo({contents}) {
    return (
        <Container>
            {contents}
        </Container>
    );
}

export default RecruitmentInfo;

const Container = styled.div`
    width: 99%;
    min-height: 150px;
    /* border: 1px solid black; */
    font-size: 17px;
    padding: 20px;
    display: flex;
    align-items: center;
    white-space: pre-line;
`;
