import React from "react";
import styled from "styled-components";
import { CommonButton } from "common/ui";
import { applyGroupRequest } from "api/todo";

function ApplySection({date, totalMember, memberNum, applyUsers, nickname}) {
    const applyGroup = async () =>{
        try{
            // localstorage에 저장된 jwt token 값 가져와서 get요청에 담에 보내기
            const result = await applyGroupRequest(localStorage.getItem("access_token"));
            // 요청이 성공
            alert("신청이 완료되었습니다!")
        } catch(error){
            alert("신청이 실패하였습니다. ㅜㅠ")
        }
    }
    // const areYouParticipant = () =>{

    // }
    return (
        <Container>
            <div>
                <RecruitmentDataWapper>
                    <RecruitmentText><b>모집 기한</b></RecruitmentText>
                    <RecruitmentText>{date}</RecruitmentText>
                </RecruitmentDataWapper>
                <RecruitmentDataWapper>
                    <RecruitmentText><b>모집 인원</b></RecruitmentText>
                    <RecruitmentText>{memberNum} / <b>{totalMember}</b> 명</RecruitmentText>
                </RecruitmentDataWapper>
                <RecruitmentDataWapper>
                    <RecruitmentText><b>참여 인원</b></RecruitmentText>
                    <RecruitmentText>
                        {applyUsers}님이 신청중입니다.
                    </RecruitmentText>
                </RecruitmentDataWapper>
            </div>
            <CommonButton size="postDetailApplyButton" onClick={()=>applyGroup()}>신청하기</CommonButton>
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
    margin:5px 0;
`;

const RecruitmentText = styled.div`
    margin-right: 20px;
    font-size: 17px;
`;

