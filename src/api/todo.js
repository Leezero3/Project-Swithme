import axios from "axios";

// Board : 스터디 그룹 정보 조회
const getStudyList = async () => {
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/studyGroup`)
    return response.data;
};

export { getStudyList };

