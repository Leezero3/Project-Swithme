import React from 'react'
import styled from 'styled-components';
import Header from './header';
import Footer from './footer';

function Layout({children}) {
  return (
    <StLayout>
      <Header />
      {children}
      <Footer />
    </StLayout>
  )
}

export default Layout;

const StLayout = styled.div`
`