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
  /* box-shadow: 0px 6px 6px rgba(254, 141, 8, 0.06);
  -webkit-box-shadow: 0px 6px 6px rgba(254, 141, 8, 0.06);
  -moz-box-shadow: 0px 6px 6px rgba(254, 141, 8, 0.06); */
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

  a.instr {
    text-decoration: none;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: #ffffff;
    margin-left: 2rem;
    position: relative;
  }

  a.instr:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #fe8d08;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out;
  }

  a.instr:hover:before {
    visibility: visible;
    transform: scaleX(1);
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
  margin: 0 2rem 1.5rem 2rem;
  background-color: #fe8d08;
  border: none;
  border-radius: 5px;
  box-shadow: 2px 2px 4px rgba(239, 231, 231, 0.38);
  -webkit-box-shadow: 2px 2px 4px rgba(239, 231, 231, 0.38);
  -moz-box-shadow: 2px 2px 4px rgba(239, 231, 231, 0.38);
  color: #000000;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.5s;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  &:hover {
    background-color: #ffc880;
  }
  @media only screen and (max-width: 600px) {
    width: 35vw;
    font-size: 0.8rem;
  }
`;

export { Landing, LandingText, Button };
