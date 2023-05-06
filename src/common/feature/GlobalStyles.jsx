import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{

    }
    a{
        all : unset;
    }
    ul,ol,dl{
        list-style:none;
    }
    button{
        cursor:pointer;
    }

`
export default GlobalStyle;