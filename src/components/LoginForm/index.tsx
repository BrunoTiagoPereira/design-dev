import React from "react";
import {
  Container,
  FormArea,
  ImageArea,
  Card,
  DescriptionStyled,
  EmailFormStyled,
  LinkStyled,
  DiffContainer,
  Button,
  Line,
  FooterContainer,
  DescriptionLogStyled,
  ButtonOutline,
  DescriptionStyledAlt,
  DiffContainerTop,
} from "./styles";

import image from "../../assets/water.jpg";

const LoginForm = () => {
  return (
    <Container>
      <Card>
        <FormArea>
          <h1>Log In</h1>
          <DescriptionStyled>
            Log in to your account to upload or download pictures, videos or
            music.
          </DescriptionStyled>
          <EmailFormStyled
            type="email"
            placeholder="Enter your email address"
          />
          <DiffContainerTop>
            <LinkStyled href="#">Forgot password?</LinkStyled>
            <Button>Next</Button>
          </DiffContainerTop>
          <Line />
          <FooterContainer>
            <DescriptionLogStyled>Or log in with</DescriptionLogStyled>
            <DiffContainer>
              <ButtonOutline>
                <i className="fab fa-facebook-f"></i>
                Facebook
              </ButtonOutline>
              <ButtonOutline>
                <i className="fab fa-google"></i>
                Google
              </ButtonOutline>
            </DiffContainer>
            <DescriptionStyledAlt>
              Don't have an account yet?
              <LinkStyled href="#">Sing Up</LinkStyled>
            </DescriptionStyledAlt>
          </FooterContainer>
        </FormArea>
        <ImageArea src={image} />
      </Card>
    </Container>
  );
};

export default LoginForm;
