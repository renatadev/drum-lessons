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
          Lessons
          <br />
        </h1>
        <p>WITH MR JAMES</p>
        <SC.Button>BOOK A LESSON &#8594;</SC.Button>
      </SC.LandingText>
    </SC.Landing>
  );
};

export default LandingPage;
