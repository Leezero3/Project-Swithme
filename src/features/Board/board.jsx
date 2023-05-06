import React from 'react'
import styled from 'styled-components'

function Board() {
    
  return (
    <CardContainer>
        {/* {data.map((item) => {
            <Card key={item.id}>
                <p>{item.title}</p>
                <p>{item.contents}</p>
                <p>{item.date}</p>
                <p>{item.memberNum}</p>
            </Card>        
        })} */}
    </CardContainer>
  )
}

export default Board

const CardContainer = styled.section`
    width:100%;
    display:flex;
    flex-wrap:nowrap;
`

const Card = styled.div`
    width:30%;
    height:300px;
    overflow:hidden;
`