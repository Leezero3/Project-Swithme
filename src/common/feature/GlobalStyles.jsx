import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html{
        font-family: 'Noto Sans KR', sans-serif;
    }
    body{
        font-family: 'Noto Sans KR', sans-serif;
        padding:0;
        margin:0;
    }
    a{
        font-family: 'Noto Sans KR', sans-serif;
        all : unset;
    }
    ul,ol,dl{
        font-family: 'Noto Sans KR', sans-serif;
        list-style:none;
    }
    button{
        font-family: 'Noto Sans KR', sans-serif;
        cursor:pointer;
    }
    input{
        font-family: 'Noto Sans KR', sans-serif;
    }

`
export default GlobalStyle;