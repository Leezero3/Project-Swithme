import React, { useState } from "react";
import styled from "styled-components";
import { useMutation } from "react-query";
import { Layout } from "common/feature";
import { CommonButton, GoBackButton, JoinLoginInput } from "common/ui";
import { userLogin } from "api/user";

function Login() {
    const [loginFormData, setloginFormData] = useState({
        username: "",
        password: "",
    });

    const handleLoginFormChange = (event) => {
        console.log(event.target.value);
        setloginFormData({ ...loginFormData, [event.target.name]: event.target.value });
        console.log(loginFormData);
    };

    const loginButtonHandler = (event) => {
        if (loginFormData.username !== "" && loginFormData.password !== "") {
            event.preventDefault();
            mutation.mutate(loginFormData);
        } else {
            alert("ID와 PASSWORD를 모두 입력하셔야 합니다!");
        }
    };

    const mutation = useMutation(userLogin, {
        // onSuccess: (response) => {
        //     dispatch(token(response.token));
        //     localStorage.setItem("access_token", response.token);
        //     console.log("성공");
        //     navigate("/");
        // },

        onError: (error) => {
            alert(error);
        },
    });

    return (
        <Layout>
            <Container>
                <HeadWrapper>
                    <StyledGoBackButton />
                    <SignUpTitle>로그인</SignUpTitle>
                </HeadWrapper>
                <LoginForm>
                    <JoinLoginInput label="아이디" type="text" name="username" onChange={handleLoginFormChange} />
                    <JoinLoginInput label="패스워드" type="password" name="password" onChange={handleLoginFormChange} />
                    <CommonButton size="joinLoginButton" type="submit" onClick={() => loginButtonHandler()}>
                        회원가입하기
                    </CommonButton>
                </LoginForm>
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

const LoginForm = styled.form`
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
