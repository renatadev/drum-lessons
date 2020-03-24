import styled from "styled-components";
import bg from "../../assets/JG.svg";

const Landing = styled.div`
  top: 0;
  margin: 0 auto 0;
  height: 100vh;
  width: 100vw;
  background-image: url(${bg});
  background-position: center center;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-attachment: initial;
  display: flex;
`;

const LandingText = styled.div`
  font-family: Montserrat;
  text-shadow: 0px 6px 6px #000000;
  font-weight: 700;
  h1 {
    font-size: 6rem;
    margin: 4rem 2rem 0.5rem 2rem;
  }
  p {
    margin: 0 2rem 1rem 2rem;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  @media only screen and (max-width: 600px) {
    h1 {
      font-size: 3.5rem;
    }
  }
`;

const Button = styled.button`
  width: 18vw;
  height: 8vh;
  font-weight: 700;
  margin: 0 2rem 0 2rem;
  background-color: #fe8d08;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(239, 231, 231, 0.38);
  -webkit-box-shadow: 0px 4px 4px rgba(239, 231, 231, 0.38);
  -moz-box-shadow: 0px 4px 4px rgba(239, 231, 231, 0.38);
  color: #000000;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.5s;
  &:hover {
    background-color: #ffffff;
  }
  @media only screen and (max-width: 600px) {
    width: 35vw;
  }
`;

export { Landing, LandingText, Button };
