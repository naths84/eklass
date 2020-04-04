import React from "react";

import { Button } from "react-bootstrap";

import "./subjects.css";

const Subject = (props) => {
  return (
    <Button className="subject" variant="primary" size="lg">
      {props.children}
    </Button>
  );
};

const Subjects = (props) => {
  return (
    <div className="mb-2">
      <Subject>9e</Subject>
      <Subject>10e</Subject>
      <Subject>11e</Subject>
    </div>
  );
};

export default Subjects;
