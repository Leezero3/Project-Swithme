import React from 'react'
import styled from 'styled-components';
import loading from '../assets/loading-hourglass.png';

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
    color:#2e58ff;
    font-size:1rem;
    font-weight:500;
    & > .loading{
        width:120px;
        height:120px;
        animation: loading 5s ease-in-out infinite;
        @keyframes loading {
            50%{
                transform:rotate(180deg);
            }
            100%{
                transform:rotate(0deg);
            } 
        }
    }
`