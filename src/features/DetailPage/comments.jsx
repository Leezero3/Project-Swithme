import React, { useState } from "react";
import styled from "styled-components";
import { CommonButton } from "common/ui";
import { useParams } from "react-router-dom";
import { useMutation, useQueryClient, useQuery } from "react-query";
import { addComments, getComments } from "api/comments";

// 구현 list 토큰으로 받아온 값 authorization 넣어서 api 로 전달
// 삭제, 수정,

function Comments() {
    const params = useParams();
    const boardId = Number(params.id);

    // comments 추가
    // const queryClient = useQueryClient();
    const mutation = useMutation(addComments, {
        onSuccess: () => {
            // queryClient.invalidateQueries("쿼리키 참조 필요"); // 쿼리키 - detailPost
            console.log("성공하였습니다.");
        },
    });

    // const { isLoading, isError, data } = useQuery("comments", getComments);
    const { isLoading, isError, data } = useQuery(["comments", boardId], () => getComments(boardId));

    // console.log(data);

    const [commentData, setCommentData] = useState({
        comment: "",
        boardId: boardId,
    });

    const handleCommentFormChange = (event) => {
        const { name, value } = event.target;
        setCommentData((prevCommentData) => ({
            ...prevCommentData,
            [name]: value,
        }));
    };

    const commentButtonHandler = (event) => {
        if (commentData.comment !== "") {
            event.preventDefault(); // 리랜더링 한번 더 확인 ✅
            alert(commentData.comment);
            mutation.mutate(commentData);
            setCommentData({ boardId: boardId, comment: "" });
        } else {
            alert("댓글을 작성해주세요!");
        }
    };

    return (
        <Container>
            <CommentForm>
                <StyledInput
                    placeholder="코멘트를 남겨주세요."
                    type="text"
                    name="comment"
                    value={commentData.comment}
                    onChange={handleCommentFormChange}
                />
                <CommonButton size="postDetailCommentButton" type="submit" onClick={commentButtonHandler}>
                    댓글달기
                </CommonButton>
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

const CommentForm = styled.form`
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
