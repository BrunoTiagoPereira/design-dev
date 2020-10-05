import styled from "styled-components";

export const Container = styled.div`
  & {
    background-color: #f0d3d3;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const DiffContainer = styled.div`
  & {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
  }

  @media (max-width: 900px) {
    & {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin-top: 0;
    }
  }
`;

export const DiffContainerTop = styled(DiffContainer)`
  & {
    margin-top: 30px;
  }

  @media (max-width: 900px) {
    & {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
  }
`;

export const Button = styled.button`
  & {
    width: 150px;
    height: 60px;
    border: none;
    outline: none;
    background-color: #046586;
    border-radius: 5px;
    -webkit-box-shadow: 0px 11px 17px -2px rgba(4, 102, 134, 0.44);
    -moz-box-shadow: 0px 11px 17px -2px rgba(4, 102, 134, 0.44);
    box-shadow: 0px 11px 17px -2px rgba(4, 102, 134, 0.44);
    color: white;
    font-family: "Poppins", sans-serif;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  &:hover {
    background: #838a9e;
  }
  @media (max-width: 900px) {
    & {
      margin: 0;
      margin-top: 30px;
    }
  }
`;

export const ButtonOutline = styled(Button)`
  & {
    width: 250px;
    height: 60px;
    border: 1px solid #cad6e4;
    background-color: white;
    color: #202020;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: none;
  }

  & + & {
    margin-left: 30px;
  }

  i {
    font-size: 2rem;
    margin-right: 15px;
  }

  @media (max-width: 900px) {
    & + & {
      margin: 0;
      margin-top: 30px;
    }
  }
`;

export const EmailFormStyled = styled.input`
  & {
    outline: none;
    border: 1px solid #cad6e4;
    border-radius: 5px;
    height: 70px;
    width: 100%;
    margin-top: 30px;
  }

  &::placeholder {
    font-size: 1.2rem;
    font-family: "Poppins", sans-serif;
  }

  & {
    padding-left: 30px;
    text-align: left;
    font-size: 1.2rem;
    font-family: "Poppins", sans-serif;
  }
  @media (max-width: 500px) {
    & {
      padding-left: 10px;
      text-align: left;
      font-size: 1.2rem;
      font-family: "Poppins", sans-serif;
    }
  }
`;
export const LinkStyled = styled.a`
  & {
    text-decoration: none;
    color: #046586;
    font-weight: 400;
  }
`;

export const DescriptionStyled = styled.h3`
  & {
    font-weight: 400;
    margin-top: 20px;
  }
`;
export const DescriptionStyledAlt = styled(DescriptionStyled)`
  & {
    margin-top: 100px;
    font-size: 1rem;
  }
  & a {
    margin-left: 5px;
  }

  @media (max-width: 900px) {
    & {
      margin: 0;
      margin-top: 30px;
    }
  }
`;
export const FormArea = styled.div`
  & {
    padding: 60px;
    width: 60%;
    height: 100%;
  }

  @media (max-width: 900px) {
    & {
      width: 100%;
    }
  }
`;

export const Line = styled.hr`
  & {
    margin-top: 60px;
    border: 0;
    height: 0;
    border-top: 1px solid #cad6e4;
    width: 100%;
  }
`;

export const ImageArea = styled.img`
  & {
    width: 40%;
    border-radius: 0px 20px 20px 0px;
  }

  @media (max-width: 900px) {
    & {
      display: none;
    }
  }
`;

export const Card = styled.div`
  & {
    display: flex;
    background: #ffffff;
    width: 1100px;
    height: 800px;
    border-radius: 20px;
  }

  @media (max-width: 900px) {
    & {
      width: 700px;
      height: 900px;
    }
  }
  @media (max-width: 500px) {
    & {
      width: 100%;
    }
  }
`;

export const DescriptionLogStyled = styled.span`
  & {
    font-size: 1.2rem;
    font-weight: 200;
    color: #838a9e;
  }
`;

export const FooterContainer = styled.div`
  & {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
  }

  @media (max-width: 900px) {
    & {
      margin: 0;
      margin-top: 30px;
    }
  }
`;
