import React from "react";
import styled from "styled-components";
import { Layout } from "common/feature";
import { CommonButton, GoBackButton, JoinLoginInput } from "common/ui";

function Login() {
    return (
        <Layout>
            <Container>
                <HeadWrapper>
                    <StyledGoBackButton />
                    <SignUpTitle>로그인</SignUpTitle>
                </HeadWrapper>
                <SignUpWrapper>
                    <JoinLoginInput label="아이디" type="text" />
                    <JoinLoginInput label="패스워드" type="password" />
                    <CommonButton size="joinLoginButton">회원가입하기</CommonButton>
                </SignUpWrapper>
            </Container>
        </Layout>
    );
}

export default Login;

const Container = styled.div`
    margin-top: 4%;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
`;

const HeadWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 98%;
`;

const SignUpTitle = styled.div`
    margin: 0 0 5px 20px;
    font-size: 33px;
`;

const StyledGoBackButton = styled(GoBackButton)`
    padding: 100px;
`;

const SignUpWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 500px;
    height: 320px;
    border: 1px solid #c4c4c4;
    border-radius: 14px;
    padding: 20px;
    margin-top: 20px;
`;
