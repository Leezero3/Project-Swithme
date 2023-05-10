import React, { useState } from "react";
import styled from "styled-components";
import { Layout } from "common/feature";
import { useMutation } from "react-query";
import { CommonButton, GoBackButton, JoinLoginInput } from "common/ui";
import { useNavigate } from "react-router-dom";
import { addUsers } from "api/user";

function Join() {
    const navigate = useNavigate();
    const [signup, setSignup] = useState({
        username: "",
        nickname: "",
        password: "",
        verifyPassword: "",
    });

    // const { username, nickname, password } = signup;

    const inputHandleChange = (event) => {
        // console.log(event.target.value);
        setSignup({ ...signup, [event.target.name]: event.target.value });
        // console.log(signup);
    };

    const submitJoinHandler = (event) => {
        // const userSignupData = { // state로 관리되면 const로 선언 가능하다. <-- 서버랑 연결되면 체크해보기 for 불변성
        let userSignupData = {
            username: signup.username,
            nickname: signup.nickname,
            password: signup.password,
            verifyPassword: signup.verifyPassword,
        };

        // console.log(userSignupData);

        if (signup.password !== signup.verifyPassword) {
            event.preventDefault();
            alert("비밀번호가 다릅니다.");
        } else {
            event.preventDefault();
            mutation.mutate(userSignupData);
        }
    };

    const mutation = useMutation(addUsers, {
        onSuccess: () => {
            alert("회원가입이 완료되었습니다.");
            // navigate("/");
        },
        onError: (error) => {
            alert(error);
        },
    });

    return (
        <Layout>
            <Container>
                <HeadWrapper>
                    <StyledGoBackButton />
                    <SignUpTitle>회원가입</SignUpTitle>
                </HeadWrapper>
                <SignUpForm>
                    <JoinLoginInput
                        label="닉네임"
                        type="text"
                        name="nickname"
                        value={signup.nickname}
                        onChange={inputHandleChange}
                    />
                    <JoinLoginInput
                        label="아이디"
                        type="text"
                        name="username"
                        value={signup.username}
                        onChange={inputHandleChange}
                    />
                    <JoinLoginInput
                        label="패스워드"
                        type="password"
                        name="password"
                        autoComplete="new-password"
                        value={signup.password}
                        onChange={inputHandleChange}
                    />
                    <JoinLoginInput
                        label="패스워드 확인"
                        type="password"
                        autoComplete="new-password"
                        name="verifyPassword"
                        value={signup.verifyPassword}
                        x
                        onChange={inputHandleChange}
                    />

                    <CommonButton size="joinLoginButton" type="submit" onClick={submitJoinHandler}>
                        회원가입하기
                    </CommonButton>
                </SignUpForm>
            </Container>
        </Layout>
    );
}

export default Join;

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

const SignUpForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 500px;
    height: 420px;
    border: 1px solid #c4c4c4;
    border-radius: 14px;
    padding: 20px;
    margin-top: 20px;
`;
