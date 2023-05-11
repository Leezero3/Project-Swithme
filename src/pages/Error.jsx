import React from 'react'
import styled from 'styled-components';
import error from '../assets/error-alert.png';

function Error() {
  return (
    <ErrorPage>
        <img src={error} alt="에러이미지" className='error'/>
        <h1>오류가 발생 했습니다.</h1>
    </ErrorPage>
  )
}

export default Error;

const ErrorPage = styled.div`
    width:100%;
    height:200px;
    margin-top:100px;
    text-align:center;
    color:#2e58ff;
    font-size:1rem;
    font-weight:500;
    height:120px;
    height:120px;
    & > .error{
        width:150px;
        height:150px;
    }
`