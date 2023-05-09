import { Layout } from 'common/feature/index'
import AddNewGroup from 'features/NewPost/AddNewGroup'
import React from 'react'
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

function NewPost() {
  const location = useLocation();
  console.log(location);
  
  return (
    <>
      <Layout>
        <Container>
          <h1 style={{fontSize: "24px",width:"100%",display:"block"}}>📘 내 모임 만들기</h1>
          <AddNewGroup editState={location.state}/>
        </Container>
      </Layout>
    </>
    
  )
}

export default NewPost;

const Container = styled.div`
  width:100%;
`

