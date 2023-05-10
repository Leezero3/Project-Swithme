import axios from "axios";

// Board : 스터디 그룹 정보 조회
const getStudyList = async () => {
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/boards`);
    return response.data;
};

// NewPost : 새로운 그룹 모집글 작성
const addNewGroupPosting = async ({newPost, authorization}) => {
 
    await axios.post(`${process.env.REACT_APP_SERVER_URL}/boards`,newPost,{
        headers: {authorization: `${authorization}`}
    });
};

// NewPost : 그룹 모집글 수정하기
const editGroupPosting = async ({editPost, authorization}) => {
    await axios.put(`${process.env.REACT_APP_SERVER_URL}/boards/${editPost.id}`, editPost,{
        headers: {authorization: `${authorization}`}
    });
}; 

// NewPost : 그룹 모집글 삭제하기
const deleteGroupPosting = async ({boardId, authorization}) => {
    await axios.delete(`${process.env.REACT_APP_SERVER_URL}/boards/${boardId}`,{
        headers: {authorization: ` ${authorization}`}
    });
};

// DetailPost : 상세페이지 정보 조회
const getDetailPage = async (id) => {
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/boards/${id}`);
    return response.data;
};

// DetailPost : 모임 신청하기
const applyGroupRequest = async ({boardId, authorization}) => {
    console.log("APIboardId",boardId)
    try{
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/applicants`, 
            { boardId },
            { headers: { authorization: `${authorization}`}}
        );
        return response;
    } catch(error){
        return Promise.reject(error.reponse);
    }
};

// DetailPost : 모임 신청 취소하기
const cancelApplyGroupRequest = async (authorization) => {
    try{
        const response = await axios.delete(`${process.env.REACT_APP_SERVER_URL}/applicants`,{
            headers: { authorization: `${authorization}`}
        });
        return response;
    } catch(error){
        return Promise.reject(error.reponse);
    }

}

export { getStudyList, addNewGroupPosting, editGroupPosting, deleteGroupPosting, getDetailPage, applyGroupRequest, cancelApplyGroupRequest };

