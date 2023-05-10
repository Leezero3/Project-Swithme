//중앙 데이터 관리소(store)를 설정하는 부분
import { configureStore } from "@reduxjs/toolkit";
import editPostStore from "../modules/editPost";
import token from "../modules/user";


// redux toolkit configureStore 메서드 사용
const store = configureStore({
    reducer:{
        editPostStore,token
    }
});

export default store;

