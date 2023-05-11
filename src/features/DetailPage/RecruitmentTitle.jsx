import React from "react";
import styled, { createGlobalStyle, css } from "styled-components";
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { deleteGroupPosting } from "api/todo";

function RecruitmentTitle({title, nickname, userId, boardId, createdAt}) {
    // 글 작성 날짜 form 수정해서 보여주기 yyyy-mm-dd 오후 hh:mm:ss
    const date = new Date(createdAt);
    const formattedDate = date.toLocaleString({timeZone: 'Asia/Seoul', hour12: true});
    
    const userid = Number(localStorage.getItem("userid"));
    // console.log("로그인 userid", typeof userid);
    // console.log("작성자 userId", typeof userId);
    const authorization = localStorage.getItem("access_token");

    // 현재 접속한 myId와 작성자의 userId가 일치하면 수정|삭제 가능하도록
    const AmIWriter = () => {
        if (userid === userId) {
            return true;
        } else {
            return false;
        }
    };

    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const mutation = useMutation(deleteGroupPosting, {
        onSuccess: () => {
          alert('모집 글이 삭제되었습니다!');
          navigate('/');
        },
        onError: (error) => {
            alert("글 삭제가 실패했습니다 ㅜㅠ");
        },
    });

    const removeHandler = () => {

        mutation.mutate({boardId, authorization});

    };

    return (
        <Container>
            <Title>{title}</Title>
            <PostMetaSectionWrapper>
                <AuthorWrapper>
                    <b>작성자</b>

                    <p>{nickname}</p>
                    <p>{formattedDate}</p>
                </AuthorWrapper>
                <ButtonWrapper show={AmIWriter()}>
                    <EditDeleteButton onClick={() => navigate('/new-post',{state: boardId})}>수정</EditDeleteButton>
                    <span> | </span>

                    <EditDeleteButton onClick={() => removeHandler()}>삭제</EditDeleteButton>
                </ButtonWrapper>
            </PostMetaSectionWrapper>
        </Container>
    );
}

export default RecruitmentTitle;

const Container = styled.div`
    width: 100%;
    min-height: 100px;
    /* border: 1px solid black; */
    padding: 50px 10px 10px;
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
    min-width: 700px;
    display: flex;
    align-items: center;
    b{
        margin-right:10px;
    }
    p {

        margin-right: 10px;
        color:#bbb;
    }
    p:last-child {
        color: #bbb;

    }
`;

const ButtonWrapper = styled.div`
    width: 110px;
    justify-content: space-between;
    align-items: center;
    ${props => 
    props.show === true ?
    css`
        display: flex;
    ` 
    : 
    css`
        display: none;
    `
    };
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
