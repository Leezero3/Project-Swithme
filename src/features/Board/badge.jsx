import React from 'react'
import styled, { css } from 'styled-components';

function Badge({children, ...rest}) {
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
    <CardBadge badgeOn={popular()} {...rest}>{children}</CardBadge>
  )
}

export default Badge;

const CardBadge = styled.span`
    /* position:absolute;
    top:40px;
    left: 40px; */
    background-color:#ffe8e8;
    color: #d43936;
    padding:5px 15px;
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
