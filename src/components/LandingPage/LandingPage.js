import React from "react";
import * as SC from "./LandingPage.style";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const LandingPage = () => {
  return (
    <SC.Landing>
      <SC.LandingText>
        <Logo alt="Online drum lessons logo" />
        <h1>
          Online <br />
          Drum <br />
          Lesson
          <br />
        </h1>
        <p>WITH MR JAMES</p>
        <a
          href="https://calendly.com/jamesgodfrey/drum-lesson"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SC.Button>BOOK A 30min LESSON</SC.Button>
        </a>
        <a
          href="https://calendly.com/jamesgodfrey/drums-lesson-15"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SC.Button>BOOK A 15min BOOSTER</SC.Button>
        </a>
        <br />
        <a className="instr" href="#instructions">
          See instructions &#8595;
        </a>
      </SC.LandingText>
    </SC.Landing>
  );
};

export default LandingPage;
