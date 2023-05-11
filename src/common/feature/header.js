import CommonButton from "common/ui/common-button";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { token } from "redux/modules/user";
// import { token } from "redux/modules/user";

function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const tokenState = useSelector((state) => state.token.token);

    const handleLogoutClick = () => {
        localStorage.removeItem("access_token");
        dispatch(token(null));
    };

    useEffect(() => {
        // 새로고침시 로그인 상태 유지
        const tokenFromLocalStorage = localStorage.getItem("access_token");
        if (tokenFromLocalStorage) {
            dispatch(token(tokenFromLocalStorage));
        }
    }, [dispatch]);

    return (
        <Container>
            <Wrapper>
                <StyledLink to="/" title="메인페이지로 이동" className="logo">
                    📚 <span style={{ color: "#1369cf" }}>S</span>withMe
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

                    {tokenState ? (
                        <>
                            <StyledLink onClick={handleLogoutClick}>Logout</StyledLink>
                        </>
                    ) : (
                        <>
                            <StyledLink to="/login">Login</StyledLink>
                            <StyledLink to="/join">Sign up</StyledLink>
                        </>
                    )}
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
