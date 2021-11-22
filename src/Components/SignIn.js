import React from "react";
import styled from "styled-components";
import { IoLogoGoogle } from "react-icons/io";
import { ImFacebook } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import SignupPage from "../Component2/SignupPage";

const SignIn = () => {
  return (
    <Container>
      <Right>
        <Holder>
          <Image src="/images/10.png" />
          <Head>Sign in</Head>
          <Alt>
            Don't have an account? <span>Sign up</span>
          </Alt>
          <Inputs>
            <Inputer>
              <span>Email</span>
              <Input placeholder="example@gmail.com" />
            </Inputer>
            <Inputer>
              <span>Password</span>
              <Input placeholder="*************" />
            </Inputer>
          </Inputs>
          <ButtonHolder>Sign in</ButtonHolder>
          <Span>
            <span>Or continue with</span>
            <Line />
          </Span>
          <Provider>
            <Hold
              style={{
                background: "red",
                color: "white",
              }}
            >
              <IoLogoGoogle />
            </Hold>
            <Hold
              style={{
                background: "#2b4996",
                color: "white",
              }}
            >
              <ImFacebook />
            </Hold>
            <Hold
              style={{
                background: "#0b2054",
                color: "white",
              }}
            >
              <FaGithub />
            </Hold>
          </Provider>
        </Holder>
      </Right>
      <Left>
        <SignupPage />
      </Left>
    </Container>
  );
};

export default SignIn;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #1c253c;
  height: 100%;
  display: flex;
`;

const Right = styled.div`
  width: 50%;
  min-height: 100vh;
  height: 100%;
  background: white;
  display: flex;
  justify-content: center;
  padding-bottom: 20px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Holder = styled.div`
  /* background: green; */
  width: auto;
  /* width: 70%; */
  height: auto;
  padding-top: 20px;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Image = styled.img`
  height: 50px;
`;

const Head = styled.div`
  margin-top: 15px;
  font-size: 35px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.6);
`;

const Alt = styled.div`
  color: rgba(0, 0, 0, 0.6);
  font-weight: 500;
  font-size: 16px;
  margin-top: 5px;
  span {
    color: #377dff;
    cursor: pointer;
  }
`;

const Inputs = styled.div`
  margin-top: 10px;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Inputer = styled.div`
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  span {
    font-size: 13px;
    color: rgba(0, 0, 0, 0.6);
    font-weight: 500;
  }
`;

const Input = styled.input`
  width: 350px;
  height: 45px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin-top: 5px;
  background: transparent;
  padding-left: 10px;
  outline: none;
  @media screen and (max-width: 768px) {
    width: 290px;
  }
`;

const ButtonHolder = styled.div`
  width: 363px;
  height: 45px;
  display: flex;
  justify-content: center;
  background: #1c253c;
  align-items: center;
  color: white;
  margin-top: 50px;
  border-radius: 50px;
  cursor: pointer;
  opacity: 1;
  transition: 250ms;
  :hover {
    opacity: 0.9;
  }
  @media screen and (max-width: 768px) {
    width: 290px;
  }
`;

const Span = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  position: relative;

  span {
    position: absolute;
    background: white;
    color: rgba(0, 0, 0, 0.5);
    top: 2px;
    padding-left: 5px;
    padding-right: 5px;
  }
`;

const Line = styled.div`
  height: 1px;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
`;

const Provider = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
`;

const Hold = styled.div`
  width: 80px;
  height: 100%;
  /* background: lavender; */
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
  /* border: 1px solid rgba(0, 0, 0, 0.5); */
`;

const Left = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

// const Holder = styled.div``
