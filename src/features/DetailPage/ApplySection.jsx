import React from "react";
import styled from "styled-components";
import { CommonButton } from "common/ui";

function ApplySection({date, totalMember, memberNum, applyUsers}) {
    return (
        <Container>
            <div>
                <RecruitmentDataWapper>
                    <RecruitmentText><b>모집 기한</b></RecruitmentText>
                    <RecruitmentText>{date}</RecruitmentText>
                </RecruitmentDataWapper>
                <RecruitmentDataWapper>
                    <RecruitmentText><b>모집 인원</b></RecruitmentText>
                    <RecruitmentText>{memberNum} / {totalMember}명</RecruitmentText>
                </RecruitmentDataWapper>
                <RecruitmentDataWapper>
                    <RecruitmentText><b>참여 인원</b></RecruitmentText>
                    <RecruitmentText>
                        {applyUsers}님이 신청중입니다.
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
    font-size: 17px;
`;
