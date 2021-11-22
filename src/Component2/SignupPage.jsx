import React from "react";
import styled from "styled-components";
import avatar from "./weather gif.gif";
import bby from "./bby.jpg";
import black from "./me.jpg";
import adult from "./adult.jpg";

const SignupPage = () => {
  return (
    <Holder>
      <Container>
        <Welcome>
          welcome to <br />
          our Community
        </Welcome>
        <Descriptio>
          heu irjehnfdyheds heyhejhjsjhs hshzdhjdyeua hehe,hhjhjehe
          jeakbdsh,hshzdhjdyeuahsdhds hdzkdshhjhd bgdsyghshjzhjkad
          dkahbdakhdkhda khdfxkbh
        </Descriptio>
        <br />
        <Imageholder>
          <Forimage1>
            <Img src={avatar} />
          </Forimage1>
          <Forimage2>
            <Img src={bby} />
          </Forimage2>
          <Forimage3>
            <Img src={black} />
          </Forimage3>
          <Forimage4>
            <Img src={adult} />
          </Forimage4>
        </Imageholder>
        <Text>More than 17k people joined us, its your Turn</Text>
      </Container>
    </Holder>
  );
};

export default SignupPage;

// const Div = styled.div``;
const Holder = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 50%;
  background-image: url("/images/Group 8.png");
  background-repeat: no-repeat;
  position: fixed;
  background-position: center;
  background-size: cover;
  /* flex: 1; */
`;
const Container = styled.div`
  display: flex;
  justify-content: center;

  align-items: center;
  flex-direction: column;
  margin: 10px;
  width: 400px;
  /* margin-right: 70px; */
`;
const Welcome = styled.div`
  color: white;
  font-size: 50px;
  font-weight: 600;
  line-height: 1.2;
  margin-left: -40px;
`;
const Descriptio = styled.div`
  margin-top: 25px;
  color: white;
  opacity: 0.5;
  line-height: 1.9;
`;
const Forimage1 = styled.div`
  height: 50px;
  width: 50px;
  /* background-co2or: alic #1c253c; */
  border-radius: 25px;
  margin-left: 90px;
  z-index: 100;
  position: absolute;
  border: 2px solid #1c253c;
`;
const Forimage2 = styled.div`
  height: 50px;
  width: 50px;
  /* background-color: red; */
  border-radius: 25px;
  margin-left: 60px;
  position: absolute;
  z-index: 10;
  border: 2px solid #1c253c;
`;
const Forimage3 = styled.div`
  height: 50px;
  width: 50px;
  /* background-color: green; */
  border-radius: 25px;
  margin-left: 35px;
  position: absolute;
  z-index: 1;
  border: 2px solid #1c253c;
`;
const Forimage4 = styled.div`
  height: 50px;
  width: 50px;
  /* background-color: pink; */
  border-radius: 25px;
  margin-left: 3px;
  position: absolute;
  border: 2px solid #1c253c;
`;
const Imageholder = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  margin-right: 400px;
  /* border: 2px solid #1c253c; */
`;
const Img = styled.img`
  height: 50px;
  width: 50px;
  object-fit: cover;
  border-radius: 25px;
`;
const Text = styled.div`
  margin-top: 15px;
  margin-left: 150px;
  color: white;
  opacity: 0.5;
  font-size: 12px;
`;
