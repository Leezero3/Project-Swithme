import CommonButton from "common/ui/common-button";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();

    return (
        <Container>
            <Wrapper>
                <StyledLink to="/" title="메인페이지로 이동" className="logo">
                📚 <span style={{color:"#1369cf"}}>S</span>withMe 
                </StyledLink>
                <StyledNav>
                    <CommonButton
                        size="headerButton"
                        onClick={() => {
                            navigate("/new-post");
                        }}
                    >
                        모임 만들기
                    </CommonButton>
                    <StyledLink to="/login">Login</StyledLink>
                    <StyledLink to="/join">Sign up</StyledLink>
                </StyledNav>
            </Wrapper>
        </Container>
    );
}

export default Header;

const Container = styled.div`
    box-shadow: rgba(0, 0, 0, 0.08) 0px 3px 5px;
`;

const Wrapper = styled.header`
    width: 95%;
    max-width: 1200px;
    margin: 0 auto;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & .logo {
        font-size: 30px;
        font-weight: 700;
    }
    & nav a:last-child {
        margin-left: 25px;
    }
`;

const StyledNav = styled.nav`
    & > * + * {
        margin-left: 20px;
    }
`;

const StyledLink = styled(Link)`
    cursor: pointer;
`;
