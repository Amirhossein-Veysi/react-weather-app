import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import WeatherForm from "../Form";
import WeatherInfo from "../WeatherInfo";

const Weather = () => {
  const [city, setCity] = useState("");
  const [home, setHome] = useState("");
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(null);
  const [background, setBackground] = useState(
    `url('https://source.unsplash.com/1600x900/?${result?.name} ${
      result ? (result.weather[0].icon.includes("d") ? "Day" : "Night") : ""
    }`
  );

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
    if (city !== "") {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
      )
        .then((res) => res.json())
        .then((res) => {
          fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_API_KEY}`
          )
            .then((res2) => res2.json())
            .then((res2) => {
              res.precipitation = res2.list[res2.list.length - 1].pop;
              setResult(res);
              setLoading(false);
              setBackground(
                `url('https://source.unsplash.com/1600x900/?${res?.name} ${
                  res.weather[0].icon.includes("d") ? "Day" : "Night"
                }`
              );
            });
        });
    }
  }, [city]);

  const handleHomeClick = () => {
    setLoading(true);
    setCity(home);
  };

  const handleFormSubmit = (iCity) => {
    setLoading(true);
    setCity(iCity);
  };

  return (
    <Container fluid>
      <Row>
        <Col
          xs={{ span: 10, offset: 1 }}
          md={{ span: 8, offset: 2 }}
          lg={{ span: 6, offset: 3 }}
          className="weather mt-5 p-5 rounded-3 shadow"
        >
          <WeatherForm
            homeClick={handleHomeClick}
            formSubmit={handleFormSubmit}
          />
          <div
            className="background"
            style={{
              backgroundImage: background,
            }}
          ></div>
          {loading ? (
            <p className="h4 text-center text-white">Loading...</p>
          ) : (
            <WeatherInfo result={result} />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Weather;
