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
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    width:300px;
    height:300px;
    text-align:center;
    /* color:#f85151; */
    font-size:1.5rem;
    font-weight:500;
    & > .loading{
        width:50px;
        height:50px;
        animation: loading 3s linear infinite;
        @keyframes loading {
            100% {
                transform:rotate(360deg);
            } 
        }
    }
`