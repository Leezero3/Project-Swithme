import React from 'react'
import styled from 'styled-components';
import loading from '../assets/loading-reload.png';

function Loading() {
  return (
    <LoadingAni>
        <img src={loading} alt="로딩이미지" className='loading'/>
        <h1>로딩중입니다</h1>
    </LoadingAni>
  )
};

export default Loading;

const LoadingAni = styled.div`
    width:100%;
    height:200px;
    margin-top:100px;
    text-align:center;
    /* color:#f85151; */
    font-size:1rem;
    font-weight:500;
    & > .loading{
        width:150px;
        height:150px;
        animation: loading 3s linear infinite;
        @keyframes loading {
            100% {
                transform:rotate(360deg);
            } 
        }
    }
`