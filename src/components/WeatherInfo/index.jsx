import React from "react";

const WeatherInfo = ({ result }) => {
  return (
    <React.Fragment>
      <div>
        <p className="h4 text-center text-white">{result.name}</p>
        <div className="d-flex justify-content-center mt-3">
          <p className="h5 text-white">{result.main.temp}</p>
          <img
            src={`http://openweathermap.org/img/w/${result.weather[0].icon}.png`}
            alt="temporary"
            style={{ width: 25, height: 35, marginTop: -15 }}
          />
        </div>
      </div>
      <div className="w-100 justify-content-around text-white mt-4 d-flex">
        <div>
          <p className="text-center">
            Wind now <br /> <span>{result.wind.speed}/KMH</span>
          </p>
        </div>
        <div>
          <p className="text-center">
            Humidity <br /> <span>{result.main.humidity}%</span>
          </p>
        </div>
        <div>
          <p className="text-center">
            Precipitation <br /> <span>{result.precipitation}</span>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default WeatherInfo;
