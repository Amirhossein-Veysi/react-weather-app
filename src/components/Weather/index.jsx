import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import WeatherForm from "../Form";

const Weather = () => {
  const [city, setCity] = useState("");
  const [home, setHome] = useState("");
  const [result, setResult] = useState(null);

  useEffect(() => {
    fetch("https://ipinfo.io?token=bf002711d48d64")
      .then((res) => res.json())
      .then((res) => {
        setCity(res.city);
        setHome(res.city);
      });
  }, []);

  useEffect(() => {
    setCity(home);
  }, [home]);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    )
      .then((res) => res.json())
      .then((res) => {
        setResult(res);
      });
  }, [city]);

  const handleHomeClick = () => {
    setCity(home);
  };

  const handleFormChange = (e) => {
    setCity(e.currentTarget.value);
  };

  return (
    <Container fluid>
      <Row>
        <Col
          xs={{ span: 10, offset: 1 }}
          md={{ span: 8, offset: 2 }}
          lg={{ span: 6, offset: 3 }}
          className="weather mt-5 p-5"
        >
          <p className="h3 text-center text-white">Weather in {city}</p>
          <WeatherForm
            homeClick={handleHomeClick}
            formChange={handleFormChange}
          />
          {console.log(result)}
        </Col>
      </Row>
    </Container>
  );
};

export default Weather;
