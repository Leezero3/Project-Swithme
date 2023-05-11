import axios from "axios";

// 회원가입
const addUsers = async (newUserData) => {
    console.log(`asdfasdfasdfsadf`, newUserData);
    try {
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/users/signup`, newUserData, {
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        // return Promise.reject(error.response.data.message);
        return Promise.reject(error);
        // return alert(`회원가입에 실패했습니다.`);
        // return error;
    }
};

// 로그인
const userLogin = async (userLoginData) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/users/login`, userLoginData, {
            withCredentials: true,
        });
        const authToken = response.headers.authorization;

        return { data: response.data, token: authToken };
    } catch (error) {
        return Promise.reject(error);
        // return alert(`로그인에 실패했습니다.`);
    }
};

export { addUsers, userLogin };
