import React from "react";
import { Field } from "react-final-form";
import { Link as Scrolllink } from "react-scroll";

const EmailQuestion = () => {
  return (
    <div id="emailQuestion">
      <Field name="email" component="input" type="text" placeholder="Email" />
      <br />
      <Scrolllink
        id="emailBack"
        to="nameQuestion"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-250}
        duration={1500}
      >
        Back
      </Scrolllink>
      <Scrolllink
        to="telephoneQuestion"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-250}
        duration={1500}
      >
        Next
      </Scrolllink>
    </div>
  );
};

export default EmailQuestion;