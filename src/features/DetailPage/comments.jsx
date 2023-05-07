import React from "react";
import styled from "styled-components";
import { CommonButton } from "common/ui";

function Comments() {
    return (
        <Container>
            <CommentForm>
                <StyledInput placeholder="코멘트를 남겨주세요." />
                <CommonButton size="postDetailCommentButton">댓글달기</CommonButton>
            </CommentForm>
            <CommentList>
                <div>리액트 스터디 참여하고 싶습니다. 추가 모집 안하나요?</div>
                <ButtonWrapper>
                    <EditDeleteButton>수정</EditDeleteButton>
                    <ButtonSeperator />
                    <EditDeleteButton>삭제</EditDeleteButton>
                </ButtonWrapper>
            </CommentList>
        </Container>
    );
}

export default Comments;

const Container = styled.div`
    width: 99%;
    margin: 30px 0 20px 0;
    min-height: 80px;
    display: flex;
    flex-direction: column;
    /* border: 1px solid black; */
    align-items: center;
`;

const CommentForm = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const StyledInput = styled.input`
    width: 910px;
    height: 25px;
    border-radius: 4px;
    font-size: 14px;
    border: 1px solid #c4c4c4;

    &::placeholder {
        text-indent: 5px;
    }
`;

const CommentList = styled.div`
    width: 100%;
    height: 30px;
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const ButtonWrapper = styled.div`
    width: 110px;
    justify-content: space-between;
    display: flex;
    align-items: center;
`;

const EditDeleteButton = styled.button`
    background-color: transparent;
    border: none;
    font-size: 16px;
    color: gray;
`;

const ButtonSeperator = styled.hr`
    border-left: 1.5px solid gray;
    height: 18px; /* hr의 원하는 높이값 */
`;
