import React from "react";
import styled from "styled-components";
import { CommonButton } from "common/ui";

function ApplySection() {
    return (
        <Container>
            <div>
                <div>
                    <RecruitmentText>모집 기한</RecruitmentText>
                    <RecruitmentText>2023. 05. 05 - </RecruitmentText>
                </div>
                <RecruitmentDataWapper>
                    <RecruitmentText>모집 인원</RecruitmentText>
                    <RecruitmentText>4 / 5명</RecruitmentText>
                </RecruitmentDataWapper>
                <RecruitmentDataWapper>
                    <RecruitmentText>참여 인원</RecruitmentText>
                    <RecruitmentText>
                        14기 강준수,14기 이승현, 14기 유범모, 14기 조양기 님이 신청중입니다.
                    </RecruitmentText>
                </RecruitmentDataWapper>
            </div>
            <CommonButton size="postDetailApplyButton">신청하기</CommonButton>
        </Container>
    );
}

export default ApplySection;

const Container = styled.div`
    width: 99%;
    min-height: 80px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const RecruitmentDataWapper = styled.div`
    display: flex;
`;

const RecruitmentText = styled.div`
    margin-right: 20px;
    font-size: 15px;
`;
