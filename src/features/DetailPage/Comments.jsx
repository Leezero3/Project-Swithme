import React, { useState } from "react";
import styled from "styled-components";
import { CommonButton } from "common/ui";
import { useParams } from "react-router-dom";
import { useMutation, useQueryClient, useQuery } from "react-query";
import { addComments, deleteComment, getComments, updateComment } from "api/comments";

// 구현 list 토큰으로 받아온 값 authorization 넣어서 api 로 전달
// 삭제, 수정,

function Comments() {
    const params = useParams();
    const boardId = Number(params.id);

    const queryClient = useQueryClient();

    // comments 추가
    const addCommentMutation = useMutation(addComments, {
        onSuccess: (response) => {
            queryClient.invalidateQueries("comments");
        },
        onError: (error) => {
            alert(`${error} 댓글을 추가하는데 실패했습니다`);

        },
    });

    // comments 삭제
    const deleteCommentMutation = useMutation(deleteComment, {
        onSuccess: () => {
            queryClient.invalidateQueries("comments");
            alert("댓글이 삭제되었습니다.");
        },
        onError: () => {
            alert("댓글 삭제에 실패했습니다.");
        },
    });


    const { isLoading, isError, data } = useQuery("comments", () => getComments(boardId));

    // 댓글 추가시 서버로 보내는 state
    const [commentData, setCommentData] = useState({
        contents: "",
        boardId: boardId,
    });

    // 댓글 수정 중 추적되는 state
    const [editingCommentId, setEditingCommentId] = useState(null);

    // const handleCommentFormChange = (event, commentId) => {
    //     const { name, value } = event.target;
    //     setCommentData((prevCommentData) => ({
    //         ...prevCommentData,
    //         [name]: value,
    //         commentId
    //     }));
    // };

    const handleCommentFormChange = (event, commentId) => {
        const { name, value } = event.target;
        if (commentId) {
            setCommentData((prevCommentData) => ({
                ...prevCommentData,
                [name]: value,
            }));
        } else {
            setCommentData({
                ...commentData,
                [name]: value,
            });
        }
    };

    const token = localStorage.getItem("access_token");
    const commentButtonHandler = (event) => {
        if (commentData.contents !== "") {
            event.preventDefault(); // 리랜더링 한번 더 확인 ✅
            addCommentMutation.mutate({ commentData, token });
            setCommentData({ boardId: boardId, contents: "" });
        } else {
            alert("댓글을 작성해주세요!");
        }
    };

    // 수정 버튼 핸들러
    const handleEditButtonClick = (commentId, contents) => {
        setEditingCommentId(commentId);
        setCommentData({ contents, boardId });
    };

    const updateCommentMutation = useMutation(updateComment, {
        onSuccess: () => {
            queryClient.invalidateQueries("comments");
            alert("댓글이 수정되었습니다.");
            setEditingCommentId(null);
        },
        onError: () => {
            alert("댓글 수정에 실패했습니다.");
        },
    });

    const handleUpdateButtonClick = (commentId) => {
        if (commentData.contents !== "") {
            // event.preventDefault();
            updateCommentMutation.mutate({ commentId, contents: commentData.contents, boardId }); //token
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
                    name="contents"
                    value={commentData.contents}
                    onChange={handleCommentFormChange}
                />
                <CommonButton size="postDetailCommentButton" type="submit" onClick={commentButtonHandler}>
                    댓글달기
                </CommonButton>
            </CommentForm>
            {isLoading ? (
                <div>로딩중 입니다...</div>
            ) : isError ? (
                <div>댓글을 불러오는데 문제가 발생했습니다</div>
            ) : (
                <CommentContainer>
                    <>
                        {data.commentList.map((comment) => (
                            <CommentList>
                                <CommentWrapper>
                                    {editingCommentId === comment.commentId ? (
                                        <StyledInput
                                            placeholder="댓글을 수정해주세요."
                                            type="text"
                                            name="contents"
                                            value={commentData.contents}
                                            onChange={(event) => handleCommentFormChange(event, comment.commentId)}
                                        />
                                    ) : (
                                        <Comment key={comment.commentId}>
                                            [{comment.nickname}]&nbsp;&nbsp;{comment.contents}
                                        </Comment>
                                    )}
                                </CommentWrapper>
                                <ButtonWrapper>
                                    {editingCommentId === comment.commentId ? (
                                        <>
                                            <EditDeleteButton
                                                onClick={() => handleUpdateButtonClick(comment.commentId)}
                                            >
                                                확인
                                            </EditDeleteButton>
                                            <ButtonSeperator />
                                            <EditDeleteButton onClick={() => setEditingCommentId(null)}>
                                                취소
                                            </EditDeleteButton>
                                        </>
                                    ) : (
                                        <>
                                            <EditDeleteButton
                                                onClick={() =>
                                                    handleEditButtonClick(comment.commentId, comment.contents)
                                                }
                                            >
                                                수정
                                            </EditDeleteButton>
                                            <ButtonSeperator />
                                            <EditDeleteButton
                                                onClick={() => deleteCommentMutation.mutate(comment.commentId)}
                                            >
                                                삭제
                                            </EditDeleteButton>
                                        </>
                                    )}
                                </ButtonWrapper>
                            </CommentList>
                        ))}
                    </>
                </CommentContainer>
            )}
        </Container>
    );
}

export default Comments;

const Container = styled.div`
    width: 99%;
    margin: 30px 0 30px 0;
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
    width: 100%;
    height: 25px;
    margin-right: 30px;
    border-radius: 4px;
    font-size: 14px;
    border: 1px solid #c4c4c4;

    &::placeholder {
        text-indent: 5px;
    }
`;
const CommentContainer = styled.div`
    width: 100%;
    align-items: center;
    /* display: flex; */
    /* flex-direction: row; */
`;

const CommentWrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    /* border: 1px solid black; */
`;

const Comment = styled.div`
    width: 100%;
`;

const CommentList = styled.div`
    /* border: 1px solid black; */
    width: 100%;
    height: 30px;
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    /* align-items: center; */
    /* justify-content: space-between; */
`;

const ButtonWrapper = styled.div`
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
