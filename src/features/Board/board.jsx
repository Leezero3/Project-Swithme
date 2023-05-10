import { getStudyList } from 'api/todo';
import React, { useEffect } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { CiCircleChevRight } from "react-icons/ci";
import styled, { css } from 'styled-components';
import study from '../../assets/board-study-book.png';
import project from '../../assets/board-project-highfive.png';
import Badge from './badge';
import { useNavigate } from 'react-router-dom';
import Loading from 'pages/Loading';

function Board() {
    const { isLoading, isError, data } = useQuery("getStudy", getStudyList);
    const navigate = useNavigate();
    
    console.log(data);

    if (isLoading) {
        return <Loading />;
    };
    if (isError) {
        return <h1>오류가 발생하였습니다...</h1>;
    };
    const goDetailPage = (item) =>{
        // console.log(state)
        navigate(`/detail/${item.boardId}`);
    };

  return (
    <CardContainer>
        {data.map((item) => {
            const isClosed = item.totalMember === item.memberNum || new Date(item.date) < new Date();
            return (
            <Card key={item.boardId} onClick={() => goDetailPage(item)} className={isClosed ? "closed" : ""}>
                <CardTypeImg src={item.type === "project"? project : study} alt="게시물 타입"/>
                <CiCircleChevRight className='GoDetail'/>
                <CardTitle>{item.title}</CardTitle>
                <CardDate>마감 : {item.date}</CardDate>
                <CardMember>인원 : <b>{item.totalMember}</b> / {item.memberNum}</CardMember>
                {/* <CardContents>{item.contents}</CardContents> */}
                <BadgeArea>
                    <Badge type="groupType" groupType={item.type}>{item.type}</Badge>
                    <Badge type="closeMember" memberNum={item.memberNum} totalMemberNum={item.totalMember}>정원임박🔥</Badge>
                    <Badge type="closeDate" closeDate={item.date}>마감임박⏱️</Badge>
                </BadgeArea>
            </Card>
            )        
        })}
    </CardContainer>
  );
};

export default Board;

const CardContainer = styled.section`
    width:100%;
    max-width:1200px;
    margin:50px auto;
    display:flex;
    flex-direction: row;
    flex-wrap:wrap;
    gap:30px;
`
const Card = styled.div`
    position:relative;
    width:30%;
    min-width:345px;
    height:350px;
    border:1px solid #e7e7e7;
    padding: 40px 30px;
    box-sizing:border-box;
    border-radius:30px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    transition:.3s;
    cursor:pointer;

    & > .GoDetail{
        position:absolute;
        top:40px;
        right:30px;
        font-size:50px;
        color:#aaa;
    }

    &:hover{
        transform:scale(1.03);
    }

    &.closed{
        background-color:#ccc;
        color:#777;
        &>img{
            filter: grayscale(100%);
        }
        &>div p{
            filter: grayscale(100%);
            color:#777;
            background-color:#aaaaaa;
        }
        &:after{
            content:"closed";
            position:absolute;
            top:50%;
            left:48%;
            display:block;
            font-size:80px;
            font-weight:900;
            color:#333;
            transform:translate(-50%, -50%) rotate(-30deg);
        }
    }
`
const CardTitle = styled.p`
    font-weight:700;
    font-size:22px;
    margin:12px 0;
    width:100%;
    overflow:hidden;
    text-overflow:ellipsis;
    word-break: break-word;
    display: -webkit-box; 
    -webkit-line-clamp: 2; 
    -webkit-box-orient: vertical;

`
const CardContents = styled.p`
    
`
const CardDate = styled.p`
    margin:5px 0;
`
const CardMember = styled.p`
    margin:5px 0;
`
const CardTypeImg = styled.img`
    width:60px;
    height:60px;S
    
`
const BadgeArea = styled.div`
    position:absolute;
    bottom:30px;
`


