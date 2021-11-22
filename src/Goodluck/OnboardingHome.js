import React from "react";
import styled from "styled-components";
import Onboarding1 from "./Onboarding1";

const OnboardingHome = () => {
  return (
    <Container>
      <Onboarding1
        headDis
        title="PMS is a mangement webApp for companies and teams to work and
            collaborate"
        text="Note that the development build is not optimized. To create a
            production build, use npm run build. Note that the development build
            is not optimized. To create a production build, use npm run build.
            Note that the development build is not optimized. To create a
            production build, use npm run build. Note that the development build"
        ButtonText="Continue"
        image="/images/1.svg"
        opacity1
      />
      <Onboarding1
        title="PMS is a mangement webApp for companies and teams to work and
            collaborate"
        text="Note that the development build is not optimized. To create a
            production build, use npm run build. Note that the development build
            is not optimized. To create a production build, use npm run build.
            Note that the development build is not optimized. To create a
            production build, use npm run build. Note that the development build"
        ButtonText="Continue"
        image="/images/2.svg"
        opacity2
      />
      <Onboarding1
        title="PMS is a mangement webApp for companies and teams to work and
            collaborate"
        text="Note that the development build is not optimized. To create a
            production build, use npm run build. Note that the development build
            is not optimized. To create a production build, use npm run build.
            Note that the development build is not optimized. To create a
            production build, use npm run build. Note that the development build"
        ButtonText="Get started"
        image="/images/3.svg"
        bt
        opacity3
      />
    </Container>
  );
};

export default OnboardingHome;

const Container = styled.div``;
