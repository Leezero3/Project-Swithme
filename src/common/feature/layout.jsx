import React from "react";
import styled from "styled-components";
import { Footer, Header } from ".";

function Layout({ children }) {
    return (
        <>
            <Header />
            <StLayout>{children}</StLayout>
            <Footer />
        </>
    );
}

export default Layout;

const StLayout = styled.div`
    max-width: 1200px;
    margin: 30px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    /* justify-content: space-between; */
`;
