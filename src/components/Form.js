import React from "react";
import { MDBContainer, MDBInputGroup } from "mdbreact";

class Form extends React.Component {
  render() {
    return (
      <MDBContainer>
        <MDBInputGroup containerClassName="mb-3" prepend="First Name" />
        <MDBInputGroup containerClassName="mb-3" prepend="Last Name" />
        <MDBInputGroup containerClassName="mb-3" prepend="Preferred Name" />
        <MDBInputGroup containerClassName="mb-3" prepend="Sex" />
        <MDBInputGroup containerClassName="mb-3" prepend="Street Address" />
        <MDBInputGroup containerClassName="mb-3" prepend="City" />
        <MDBInputGroup containerClassName="mb-3" prepend="State" />
        <MDBInputGroup containerClassName="mb-3" prepend="Zip" />
        <MDBInputGroup containerClassName="mb-3" prepend="Contact Number" />
      </MDBContainer>
    );
  }
}

export default Form;