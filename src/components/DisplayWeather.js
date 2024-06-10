import React from "react";
import "./displayweather.css";

/**
 * Component to display weather information.
 * @param {Object} props - The props object containing the weather data.
 * @returns {JSX.Element} - The JSX element representing the weather display.
 */
function DisplayWeather(props) {
  const { data } = props;
  const iconurl =
    "http://openweathermap.org/img/wn/" +
    `${data.cod != 404 ? data.weather[0].icon : null}` +
    ".png";
  return (
    <div className="displayweather">
      {data.cod != 404 ? (
        <React.Fragment>
          <div className="maincard">
            {/* Weather location and title */}
            <span className="cardtitle">
              {data.name} , {data.sys.country}. Weather
            </span>
            {/* Current time */}
            <span className="cardsubtitle">
              As of {new Date().toLocaleTimeString()}
            </span>

            {/* Current temperature */}
            <h1 className="sahi">
              {" "}
              {Math.floor(data.main.temp - 273.15)}
              <sup>o</sup>
              C
            </h1>
            {/* Weather icon */}
            <img className="weather-icon" src={iconurl} alt="" srcset="" />
            {/* Weather description */}
            <span className="weather-description">
              {" "}
              {data.weather[0].description}
            </span>
          </div>
          <div className="weatherdetails">
            <div className="section1">
              <table>
                <tr>
                  <td>
                    {/* High and low temperature */}
                    <h4>High/Low🔅</h4>
                  </td>
                  <td>
                    <span>
                      {Math.floor(data.main.temp_max - 273.15)}/
                      {Math.floor(data.main.temp_min - 273.15)}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    {/* Humidity */}
                    <h4>Humidity🥵</h4>
                  </td>
                  <td>
                    <span>{data.main.humidity} %</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    {/* Pressure */}
                    <h4>Pressure🪨</h4>
                  </td>
                  <td>
                    <span>{data.main.pressure} hPa</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    {/* Visibility */}
                    <h4>Visibility👀</h4>
                  </td>
                  <td>
                    <span>{data.visibility / 1000} Km</span>
                  </td>
                </tr>
              </table>
            </div>

            <div className="section2">
              <table>
                <tr>
                  <td>
                    {/* Wind speed */}
                    <h4>Wind💨</h4>
                  </td>
                  <td>
                    <span>{Math.floor((data.wind.speed * 18) / 5)} km/hr</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    {/* Wind direction */}
                    <h4>Wind Direction🌬️</h4>
                  </td>
                  <td>
                    <span>
                      {data.wind.deg}
                      <sup>o</sup> deg
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    {/* Sunrise time */}
                    <h4>Sunrise🌅</h4>
                  </td>
                  <td>
                    <span>
                      {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    {/* Sunset time */}
                    <h4>Sunset🌇</h4>
                  </td>
                  <td>
                    <span>
                      {new Date(data.sys.sunset * 1000).toLocaleTimeString()}
                    </span>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </React.Fragment>
      ) : (
        <div className="maincard">
          {/* Error message */}
          <h2>{data.message}</h2>
        </div>
      )}
    </div>
  );
}

export default DisplayWeather;
