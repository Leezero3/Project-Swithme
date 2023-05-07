import { getStudyList } from 'api/todo';
import React from 'react'
import { useQuery } from 'react-query';
import { CiCircleChevRight } from "react-icons/ci";
import styled, { css } from 'styled-components';
import study from '../../assets/board-study-book.png';
import project from '../../assets/board-project-highfive.png';

function Board() {
    const { isLoading, isError, data } = useQuery("todos", getStudyList);
    console.log(data);

    if (isLoading) {
        return <h1>로딩중입니다...</h1>;
    }
    if (isError) {
        return <h1>오류가 발생하였습니다...</h1>;
    }
    //게시글 정원임박 뱃지
    const popular = (current, total) => {
        if(current - total === 1){
            return true;
        } else {
            return false;
        }
    };

    //게시글 날짜임박 뱃지
    const deadline = (date) => {
        let current = new Date();
        let dead = new Date(date);
        let calcDate = 0;

        if(dead > current){
            calcDate = dead.getTime() - current.getTime();
        } else {
            calcDate = current.getTime() - dead.getTime();
        }
        
        // 디데이 3일부터 마감임박 뱃지 부여
        if(Math.floor(calcDate / (1000*60*60*24)) < 4){
            return true;
        } else {
            return false;
        }
        
    }
    
    
  return (
    <CardContainer>
        {data.map((item) => 
            <Card key={item.id}>
                <CardTypeImg src={item.type === "프로젝트"? project : study} alt="게시물 타입"/>
                <CiCircleChevRight className='GoDetail'/>
                <CardTitle>{item.title}</CardTitle>
                <CardDate>마감 : {item.date}</CardDate>
                <CardMember>인원 : <b>{item.memberNum}</b> / {item.totalMember}</CardMember>
                {/* <CardContents>{item.contents}</CardContents> */}
                <BadgeArea>
                    <Badge color="red" badgeOn={popular(item.memberNum, item.totalMember)}>정원임박🔥</Badge>
                    <Badge color="green" badgeOn={deadline(item.date)}>마감임박⏱️</Badge>
                </BadgeArea>
            </Card>        
        )}
    </CardContainer>
  )
}

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
    min-width:300px;
    height:350px;
    border:1px solid #e7e7e7;
    padding: 40px 30px;
    box-sizing:border-box;
    border-radius:30px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    transition:.3s;

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
`
const CardTitle = styled.p`
    font-weight:700;
    font-size:22px;
    margin:20px 0;
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
    bottom:40px;
`
const BadgeStyle = {
    red:{
        color:"#d43936",
        backgroundColor:"#ffe8e8"
    },
    green:{
        color:"#3d630a",
        backgroundColor:"#c0de9a"
    }
}
const Badge = styled.span`
    background-color:${(props) => BadgeStyle[props.color].backgroundColor};
    color: ${(props) => BadgeStyle[props.color].color};
    padding:5px 10px;
    margin-right:5px;
    font-weight:bold;
    border-radius:15px;
    ${props => 
        props.badgeOn == true ? 
        css`
         display:"block";
        `
        : 
        css`
          display:"none";  
        `
    };
`
