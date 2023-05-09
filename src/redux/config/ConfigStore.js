//중앙 데이터 관리소(store)를 설정하는 부분
import { configureStore } from "@reduxjs/toolkit";
import editPostStore from "../modules/editPost";


// redux toolkit configureStore 메서드 사용
const store = configureStore({
    reducer:{
        editPostStore
    }
});

export default store;