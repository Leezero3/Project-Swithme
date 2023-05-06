import { getStudyList } from "api/todo";
import React from "react";
import { useQuery } from "react-query";
import styled, { css } from "styled-components";
import study from "../../assets/board-study-book.png";
import project from "../../assets/board-project-highfive.png";

function Board() {
    const { isLoading, isError, data } = useQuery("todos", getStudyList);
    console.log(data);

    if (isLoading) {
        return <h1>로딩중입니다...</h1>;
    }
    if (isError) {
        return <h1>오류가 발생하였습니다...</h1>;
    }

    return (
        <CardContainer>
            {data.map((item) => (
                <Card key={item.id}>
                    <ImgBox type={item.type}>
                        <img src={item.type === "프로젝트" ? project : study} alt="게시물 타입" />
                    </ImgBox>
                    <p>{item.title}</p>
                    <p>{item.contents}</p>
                    <p>{item.date}</p>
                    <p>{item.memberNum}</p>
                </Card>
            ))}
        </CardContainer>
    );
}

export default Board;

const CardContainer = styled.section`
    width: 1200px;
    margin: 50px auto;
    display: flex;
    gap: 30px;
`;

const Card = styled.div`
    width: 30%;
    height: 300px;
    border: 1px solid #ccc;
    padding: 30px;
    border-radius: 30px;
`;
const ImgBox = styled.div`
    width: 70px;
    height: 70px;
    border-radius: 20px;
    ${(props) =>
        props.type === "프로젝트"
            ? css`
                  background-color: #83c9df;
              `
            : css`
                  background-color: #ffd789;
              `}
    & img {
        width: 50px;
        height: 50px;
    }
`;
