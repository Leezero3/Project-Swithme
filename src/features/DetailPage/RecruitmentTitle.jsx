import React from "react";
import styled from "styled-components";

function RecruitmentTitle({title, nickname}) {
    return (
        <Container>
            <Title>{title}</Title>
            <PostMetaSectionWrapper>
                <AuthorWrapper>
                    <p>작성자</p>
                    <p>{nickname}</p>
                </AuthorWrapper>
                <ButtonWrapper>
                    <EditDeleteButton>수정</EditDeleteButton>
                    <ButtonSeperator />
                    <EditDeleteButton>삭제</EditDeleteButton>
                </ButtonWrapper>
            </PostMetaSectionWrapper>
        </Container>
    );
}

export default RecruitmentTitle;

const Container = styled.div`
    width: 100%;
    min-height: 80px;
    /* border: 1px solid black; */
    padding: 10px;
`;

const Title = styled.div`
    width: 97%;
    font-size: 30px;
    font-weight: 600;
`;

const PostMetaSectionWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
`;

const AuthorWrapper = styled.div`
    font-size: 15px;
    min-width: 200px;
    display: flex;
    align-items: center;
    p:last-child {
        margin-left: 20px;
    }
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
