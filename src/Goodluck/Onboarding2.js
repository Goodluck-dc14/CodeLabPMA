import React from "react";
import styled from "styled-components";

const Onboarding1 = () => {
  return (
    <Container>
      <Wrapper>
        <Holder>
          <Left>
            <MediumText>
              Keep track of work and task progress, never miss out on deadlines
              with our consistent task reminder
            </MediumText>
            <SmallerText>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam. Lorem ipsum dolor sit amet,
              consetetur
            </SmallerText>
            <ButtonHolder>
              <Button1>Skip</Button1>
              <Button>Continue</Button>
            </ButtonHolder>
          </Left>
          <Img src="/image/undraw_Collaborators_re_hont-removebg-preview.png" />
        </Holder>
      </Wrapper>
    </Container>
  );
};

export default Onboarding1;

const Container = styled.div`
  background-color: #fafafa;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  flex: 1;
  background: #ffffff 0% 0% no-repeat padding-box;
  opacity: 1;
  display: flex;
  align-items: center;
  border: 1px solid #e6e6e6;
  justify-content: center;
`;

const Holder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60%;
  @media screen and (max-width: 760px) {
    display: flex;
    align-items: center;
    flex-direction: column-reverse;
  }
`;

const Left = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-left: 20px;
  width: 80%;
  @media screen and (max-width: 760px) {
    display: flex;
    align-items: center;
  }
`;

const MediumText = styled.div`
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 10px;
  color: #091e42;
  width: 330px;
  @media screen and (max-width: 760px) {
    width: 320px;
    text-align: center;
  }
`;

const SmallerText = styled.div`
  font-size: 12px;
  width: 380px;
  color: #091e42;
  @media screen and (max-width: 760px) {
    text-align: center;
    width: 350px;
  }
`;

const ButtonHolder = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-top: 50px;
`;

const Button = styled.div`
  height: 40px;
  width: 150px;
  color: white;
  background-color: #377dff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin-left: 50px;
  @media screen and (max-width: 760px) {
    width: 100px;
  }
`;
const Button1 = styled.div`
  height: 40px;
  width: 150px;
  color: white;
  background-color: #091e42;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  @media screen and (max-width: 760px) {
    width: 100px;
  }
`;

const Img = styled.img`
  width: 50%;
  @media screen and (max-width: 760px) {
    width: 70%;
    margin-bottom: 20px;
  }
`;
