import React from "react";
import { Layout } from "common/feature";
import styled from "styled-components";
import { RecruitmentTitle, ApplySection, RecruitmentInfo, Comments } from "features/DetailPage";

function DetailPost() {
    return (
        <Layout>
            <Container>
                <RecruitmentTitle />
                <StyledHr />
                <ApplySection />
                <StyledHr />
                <RecruitmentInfo />
                <StyledHr />
                <Comments />
            </Container>
        </Layout>
    );
}

const Container = styled.div`
    width: 90%;
    min-height: 600px;
    /* border: 1px solid black; */
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const StyledHr = styled.hr`
    border: none;
    border-top: 1px solid black;
    margin: 10px 0;
    width: 100%;
    /* height: 1px; */
`;

export default DetailPost;
