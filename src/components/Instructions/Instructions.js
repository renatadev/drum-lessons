import React from "react";
import * as SC from "./Instructions.style";

const Instructions = () => {
  return (
    <>
      <SC.Instructions id="instructions">Instructions</SC.Instructions>
      <SC.Steps>
        <p>
          1. You need to get a free zoom account - https://zoom.us – ideally on
          an ipad (its an app) or laptop (you’ll need to download a bit of
          software) and not a mobile phone if possible. It is a very simple and
          quick process to sign up for with an email address. Then perhaps test
          it, and familiarise yourself and maybe your child with it a little.
        </p>
        <p>
          2.Sign up for a 30 min lesson time through the link on this website
          above – these are scheduled in 30 minute increments - and we are both
          notified of the booked slot – when you confirm you are attending it
          shows on my calendar. Availability is shown in real time – so we can’t
          double book.{" "}
        </p>
        <p>
          3. At the start of the day you will be emailed by me an invite link to
          the zoom lesson.
        </p>
        <p>
          4. A few minutes before your allocated time get set up! Position the
          device for the zoom lesson so the drum kit can be seen – remember the
          drum kit needs to be heard also – I will have emailed how to do this..{" "}
        </p>
        <p>5. Make sure the volume of the device is turned up.</p>
        <p>
          6. Make sure that any sheet music / note book needed is there ready.
        </p>
        <p>7. Sticks at the ready too!</p>
        <p>
          8. In the few minutes before the lesson click on the zoom link that
          was emailed to you – this will take you to a virtual waiting room – so
          that you are ready. I will be able to see that you are logged on and
          ready.{" "}
        </p>
        <p>
          9. Please do adhere to timings – it is quite likely I will have back
          to back drum lessons booked in – so you will lose time if you are late
          logging in.
        </p>
        <p>
          10. At the time of your lesson I will make the link to open and start
          the lesson – and that’s it… we’re off.
        </p>
      </SC.Steps>
    </>
  );
};

export default Instructions;
