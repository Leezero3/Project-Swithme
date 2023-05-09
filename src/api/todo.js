import axios from "axios";

// Board : 스터디 그룹 정보 조회
const getStudyList = async () => {
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/boards`);
    return response.data;
};

// NewPost : 새로운 그룹 모집글 작성
const addNewGroupPosting = async (newPost) => {
    await axios.post(`${process.env.REACT_APP_SERVER_URL}/boards`,newPost);
};

// DetailPost : 상세페이지 정보 조회
const getDetailPage = async (id) => {
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/boards/${id}`);
    return response.data;
};

export { getStudyList, addNewGroupPosting, getDetailPage };

