import React from "react";
import styled from "styled-components";
import { Footer, Header } from ".";

function Layout({ children }) {
    return (
        <StLayout>
            <Header />
            {children}
            <Footer />
        </StLayout>
    );
}

export default Layout;

const StLayout = styled.div``;
