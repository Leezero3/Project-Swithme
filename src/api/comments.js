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
const addComments = async (newComments) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/boards/comments`, newComments, {
            // header: { authorization: `Bearer ${authorization}` },
            withCredentials: true,

            // Bearer 토큰을 사용하여 인증하는 경우 withCredentials: true 옵션을 추가하지 않아도 됨, 그러나 요청에 쿠키를 포함하려면 해당 옵션을 추가해야 함..? 서버랑 체크해보기
        });
        return response.data;
    } catch (error) {
        return Promise.reject(error);
    }
};

export { addComments, getComments }; //
