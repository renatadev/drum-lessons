import styled from "styled-components";

const Instructions = styled.h1`
  font-size: 3rem;
  text-align: center;
  text-decoration: underline;
  -webkit-text-decoration-color: #fe8d08;
  text-decoration-color: #fe8d08;

  @media only screen and (max-width: 600px) {
    font-size: 2rem;
  }
`;

const Steps = styled.div`
  font-size: 1.1rem;
  text-align: justify;
  margin: 5rem;
  span {
    font-size: 2.2rem;
    color: #fe8d08;
  }
  a.instr {
    text-decoration: none;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: #fe8d08;
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
}
  @media only screen and (max-width: 600px) {
    margin: 3rem;
  }
`;

export { Instructions, Steps };
