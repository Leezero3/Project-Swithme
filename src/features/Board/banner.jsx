import React from 'react'
import styled from 'styled-components'
import peopleImg from '../../assets/home-banner-people.png'

function Banner() {
  return (
    <BannerContainer>
        <div className='center-wrapper'>
            <div className='banner-text-contents'>
                <h1>너 내 동료가 되라!</h1>
                <p>OO에서 당신의 코딩 동료를 찾아보세요 🔍</p>
            </div>
            <img src={peopleImg} alt="메인 배너 인물이미지" />
        </div>
    </BannerContainer>
  )
}

export default Banner;

const BannerContainer = styled.section`
    width:100%;
    height:300px;
    background-color: #C8E3FF;
    & .center-wrapper{
        width:1000px;
        height:300px;
        margin:0 auto;
        display:flex;
        justify-content:space-between;
        align-items:center;
    }
    & .banner-text-contents{
    }
    & h1{
        font-size:35px;
        margin:0;
    }
    & p{
        font-size:25px;
        margin:0;
    }
    & img{
        width:350px;
    }
`