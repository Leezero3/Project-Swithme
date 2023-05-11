import React from "react";
import styled from "styled-components";
import { CommonButton } from "common/ui";
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { applyGroupRequest,cancelApplyGroupRequest } from "api/todo";

function ApplySection({date, totalMember, memberNum, applyUsers, applyUserId}) {
    // 이 글의 boardId 값 가져와서 신청하기 버튼 클릭 시 get 요청에 boardId와 token값 보내주기
    const params = useParams();
    const boardId = Number(params.id);
    const authorization = localStorage.getItem("access_token");
    // 지금 접속한 나의 userid 가져오기
    // 게시글 data에 담긴 userId는 Number타입이라 맞춰주기 위해 Number사용
    const userid = Number(localStorage.getItem("userid"));

    // 마감된 공고인지 이미 신청한 공고인지 확인하기
    const isFull = totalMember === memberNum;
    const isApplied = applyUserId.includes(userid);
    console.log("나 이미 신청했니?", isApplied);
    
    const applyGroup = async (boardId, authorization) => {
        try{
            if (isApplied) {
              // 이미 신청한 경우 신청 취소 요청을 보냅니다.
              console.log('신청 취소 요청')
              await cancelApplyGroupRequest({boardId, authorization});
              alert("신청이 취소되었습니다.");
            } else {
              // 아직 신청하지 않은 경우 신청 요청을 보냅니다.
              console.log('신청 요청')
              await applyGroupRequest({boardId, authorization});
              alert("신청이 완료되었습니다!");
            }
          } catch(error){
              alert("요청이 실패하였습니다. ㅜㅠ")
          }
    };
    
    return (
        <Container>
            <div>
                <RecruitmentDataWapper>
                    <RecruitmentText><b>모집 기한</b></RecruitmentText>
                    <RecruitmentText>{date} 까지</RecruitmentText>
                </RecruitmentDataWapper>
                <RecruitmentDataWapper>
                    <RecruitmentText><b>모집 인원</b></RecruitmentText>
                    <RecruitmentText><b>{totalMember}</b> / {memberNum} 명</RecruitmentText>
                </RecruitmentDataWapper>
                <RecruitmentDataWapper>
                    <RecruitmentText><b>참여 인원</b></RecruitmentText>
                    <RecruitmentText>
                        {applyUsers.map((user)=> `${user} . `)}님이 신청중입니다.
                    </RecruitmentText>
                </RecruitmentDataWapper>
            </div>
            <CommonButton size="postDetailApplyButton" onClick={()=>applyGroup(boardId, authorization)}>
                {isFull ? '마감' : (isApplied ? '신청 취소' : '신청하기')}
            </CommonButton>
        </Container>
    );

    };
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

