import React from "react";
import styled from "styled-components";
import { IoLogoGoogle } from "react-icons/io";
import { ImFacebook } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import avatar from "../Component2/avatar.png";
import SignupPage from "../Component2/SignupPage";

const SignUp = () => {
  return (
    <Container>
      <Right>
        <Holder>
          <Image src="/images/10.png" />
          <Head>Sign up</Head>
          <Alt>
            Already have an account? <span>Sign in</span>
          </Alt>
          <Inputs>
            <Inputer>
              <span>Name</span>
              <Input />
            </Inputer>
            <Inputer>
              <span>Email</span>
              <Input />
            </Inputer>
            <Inputer>
              <span>Password</span>
              <Input />
            </Inputer>
            <Inputer>
              <span>Image upload</span>
              <Div>
                <ImageButton>Click to upload</ImageButton>
              </Div>
              <ImageInput>
                <ImageUpload src={avatar} />
              </ImageInput>
            </Inputer>
          </Inputs>
          <ButtonHolder>Sign up</ButtonHolder>
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

export default SignUp;

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

const ImageInput = styled.div`
  width: 350px;
  height: 250px;
  background: #e1e1e1;
  margin-top: 5px;
  border: 1px dashed rgba(0, 0, 0, 0.5);
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  @media screen and (max-width: 768px) {
    width: 290px;
  }
`;

const ImageUpload = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
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
const ImageButton = styled.div`
  width: 200px;
  height: 45px;
  display: flex;
  justify-content: center;
  background: #1c253c;
  align-items: center;
  color: white;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 50px;
  cursor: pointer;
  opacity: 1;
  transition: 250ms;
  :hover {
    opacity: 0.9;
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

const Div = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
`;

// const Holder = styled.div``
