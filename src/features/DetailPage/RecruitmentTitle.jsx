import React from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { deleteGroupPosting } from "api/todo";

function RecruitmentTitle({title, nickname, userId, boardId, createAt}) {
    const jwt = localStorage.getItem("access_token");
    // 현재 접속한 myId와 작성자의 userId가 일치하면 수정|삭제 가능하도록
    const AmIWriter = (userId) =>{
        const myId = localStorage.userID;
        if(myId === userId){
            return true;
        } else {
            return false;
        }
    };
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const mutation = useMutation(deleteGroupPosting,{
        onSuccess: () => {
          queryClient.invalidateQueries('todos');
          alert('모집 글이 삭제되었습니다!');
          navigate('/');
        },
        onError: (error) => {
          alert('글 삭제가 실패했습니다 ㅜㅠ');
        }
    });

    const removeHandler = () => {
        mutation.mutate({boardId, jwt});
    };
    
    return (
        <Container>
            <Title>{title}</Title>
            <PostMetaSectionWrapper>
                <AuthorWrapper>
                    <b>작성자</b>
                    <p>{nickname}</p>
                    <p> | {createAt}</p>
                </AuthorWrapper>
                <ButtonWrapper show={AmIWriter(userId)}>
                    <EditDeleteButton onClick={() => navigate('/new-post',{state: boardId})}>수정</EditDeleteButton>
                    <ButtonSeperator />
                    <EditDeleteButton onClick={() => removeHandler()}>삭제</EditDeleteButton>
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
    p{
        margin-right:15px;
    }
    p:last-child {
        color:#ccc;
    }
`;

const ButtonWrapper = styled.div`
    width: 110px;
    justify-content: space-between;
    display:${(props) => props.show? "flex": "none"};
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
