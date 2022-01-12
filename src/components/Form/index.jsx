import React from "react";
import Form from "react-bootstrap/Form";
//Image
import { ReactComponent as HomeIMG } from "../../img/home.svg";

const WeatherForm = ({ homeClick, formChange }) => {
  return (
    <Form>
      <Form.Group className="mb-3 d-flex align-items-center">
        <HomeIMG role="button" onClick={homeClick} />
        <Form.Control
          id="disabledTextInput"
          placeholder="Disabled input"
          className="ms-3"
          onChange={formChange}
        />
      </Form.Group>
    </Form>
  );
};

export default WeatherForm;
