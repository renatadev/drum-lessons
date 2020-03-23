import styled from "styled-components";
import bg from "../../assets/JG.svg";

const Landing = styled.div`
  top: 0;
  margin: 0 auto 0;
  height: 100vh;
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
  h1 {
    font-size: 6rem;
    font-weight: 700;
    margin: 4rem 2rem 0.5rem 2rem;
  }
  p {
    margin: 0 2rem 1rem 2rem;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

const Button = styled.button`
  width: 14vw;
  height: 8vh;
  margin: 0 2rem 0 2rem;
  font-weight: 700;
  background-color: #fe8d08;
  border: none;
  box-shadow: 0px 4px 4px rgba(239, 231, 231, 0.38);
  border-radius: 5px;
  color: #000000;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background-color: #ffffff;
    /* box-shadow: 0px 4px 4px #fe8d08; */
  }
`;
export { Landing, LandingText, Button };
