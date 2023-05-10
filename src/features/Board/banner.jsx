import React from "react";
import styled from "styled-components";
import peopleImg from "../../assets/home-banner-people.png";

function Banner() {
    return (
        <BannerContainer>
            <div className="center-wrapper">
                <div className="banner-text-contents">
                    <h1>너 내 동료가 되라!</h1>
                    <p>스윗미에서 당신의 코딩 동료를 찾아보세요 🔍</p>
                </div>
                <img src={peopleImg} alt="메인 배너 인물이미지" />
            </div>
        </BannerContainer>
    );
}

export default Banner;

const BannerContainer = styled.section`
    width: 100%;
    height: 300px;
    background-color: #c8e3ff;
    & .center-wrapper {
        width: 1000px;
        height: 300px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    & h1 {
        font-size: 35px;
        margin: 0;
    };
    & p {
        font-size: 25px;
        margin: 0;
    };
    & img {
        width: 350px;
    };

    @media screen and (max-width: 1199px) {
        & .center-wrapper {
        width: 90%;
        
        }
        & .banner-text-contents {
        }
        & h1 {
            font-size: 22px;
            margin: 0;
        }
        & p {
            font-size: 18px;
            margin: 0;
        }
        & img {
            width: 250px;
        }
    };
    @media screen and (max-width: 700px) {
        height:400px;
        & .center-wrapper {
            width: 90%;
            height:400px;
            flex-direction: column;
            justify-content: space-evenly;
        }
        & .banner-text-contents {
        }
        & h1 {
            font-size: 22px;
            margin: 0;
        }
        & p {
            font-size: 18px;
            margin: 0;
        }
        & img {
            width: 80%;
        }
    }
`;
