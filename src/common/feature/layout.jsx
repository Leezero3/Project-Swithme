import React from 'react'
import styled from 'styled-components';

function layout({children}) {
  return (
    <Layout>{children}</Layout>
  )
}

export default layout;

const Layout = styled.div`
    width:1200px;
    margin:0 auto;
`