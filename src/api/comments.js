import axios from "axios";

// DetailPost : 댓글 조회
const getComments = async (boardId) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/boards/${boardId}`);
        return response.data;
    } catch (error) {
        return Promise.reject(error);
    }
};

// DetailPost: 댓글 달기
const addComments = async ({ commentData, token }) => {
    console.log(`댓글달기의 토큰 확인`, token);
    console.log(`aaaa`, commentData);
    try {
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/boards/comments`, commentData, {
            headers: { authorization: `${token}` },
        });
        return response.data;
    } catch (error) {
        return Promise.reject(error);
    }
};

const token = localStorage.getItem("access_token");

// DetailPost: 댓글 삭제
const deleteComment = async (commentId) => {
    try {
        const response = await axios.delete(`${process.env.REACT_APP_SERVER_URL}/boards/comments/${commentId}`, {
            headers: { authorization: `${token}` },
        });
        return response.data;
    } catch (error) {
        return Promise.reject(error);
    }
};

// DetailPost: 댓글 수정
const updateComment = async (editedData) => {
    const editedCommentData = { boardId: editedData.boardId, contents: editedData.contents };
    // console.log(`서버로 넘어오는 전체 데이터`, editedData);
    // console.log(`서버로 보내질`, editedCommentData);

    try {
        const response = await axios.put(
            `${process.env.REACT_APP_SERVER_URL}/boards/comments/${editedData.commentId}`,
            editedCommentData,
            {
                headers: { authorization: `${token}` },
            }
        );
        return response.data;
    } catch (error) {
        return Promise.reject(error);
    }
};

export { addComments, getComments, deleteComment, updateComment }; //
