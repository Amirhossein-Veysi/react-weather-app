import React, { useState } from "react";
import Form from "react-bootstrap/Form";
//Image
import { ReactComponent as HomeIMG } from "../../img/home.svg";

const WeatherForm = ({ homeClick, formSubmit }) => {
  const [city, setCity] = useState("");

  const inputChangeHandler = (e) => {
    setCity(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    formSubmit(city);
  };

  return (
    <Form onSubmit={formSubmitHandler}>
      <Form.Group className="mb-3 d-flex align-items-center">
        <HomeIMG role="button" onClick={homeClick} />
        <Form.Control
          placeholder="Enter the city"
          className="ms-3"
          onChange={inputChangeHandler}
        />
      </Form.Group>
    </Form>
  );
};

export default WeatherForm;
