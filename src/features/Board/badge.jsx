import React from 'react'
import styled from 'styled-components';

function Badge({children, type, memberNum, totalMemberNum, closeDate, ...rest}) {
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
        console.log(dead);
        if(dead > current){
            calcDate = dead.getTime() - current.getTime();
        } else {
            calcDate = current.getTime() - dead.getTime();
        }
        
        // 디데이 3일부터 마감임박 뱃지 부여
        if(Math.floor(calcDate / (1000*60*60*24)) < 4){
            console.log('close', 'true');
            return true;
        } else {
            console.log(Math.floor(calcDate / (1000*60*60*24)));
            // console.log('close', 'false');
            return false;
        }
        
    };

    if(type === "closeMember"){
        return (<CardBadge type={type} badgeOn={popular(memberNum,totalMemberNum)} {...rest}>{children}</CardBadge>);
    } else if(type === "closeDate") {
        return (<CardBadge type={type} badgeOn={deadline(closeDate)} {...rest}>{children}</CardBadge>);
    } else{
        return (<CardBadge type={type} badgeOn={true} {...rest}>{children}</CardBadge>);
    }
};

export default Badge;

const BadgeStyle = {
    groupType:{
        color:"#ba6701",
        backgroundColor:"#ffe070"
    },
    closeMember:{
        color:"#d43936",
        backgroundColor:"#ffe8e8"
    },
    closeDate:{
        color:"#3d630a",
        backgroundColor:"#c0de9a"
    },
};

const CardBadge = styled.p`
    display:${(props) => props.badgeOn === true? "inline-block" : "none"};
    background-color:${(props) => BadgeStyle[props.type].backgroundColor};
    color: ${(props) => BadgeStyle[props.type].color};
    padding:5px 15px;
    margin-right:7px;
    font-weight:bold;
    border-radius:15px;
`
