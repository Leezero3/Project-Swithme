import React from "react";
import styled from "styled-components";
// 배너를 위해서 Header와 Footer는 shared/Router에서 호출

function Layout({ children }) {
    return (
        <>
            <StLayout>{children}</StLayout>
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
