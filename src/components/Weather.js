import React, { useState } from "react";
import DisplayWeather from "./DisplayWeather";
import { useContext } from "react";
import "./weather.css";
import { ThemeContext } from "./AppContextProvider";
import Button from "./Button";
/**
 * Weather component displays a weather forecast form and fetches weather data from an API.
 */
function Weather() {
  // Use the ThemeContext to access the current theme and toggle function
  const val = useContext(ThemeContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Initialize state variables
  const [weather, setWeather] = useState([]);
  const [form, setForm] = useState({
    city: "",
    country: "",
  });

  // API key for OpenWeatherMap API
  const APIKEY = "9286b547ac677704de8851b9cfd85943";

  /**
   * Fetches weather data from the OpenWeatherMap API based on the form inputs.
   * @param {Event} e - The form submit event.
   */
  async function weatherData(e) {
    e.preventDefault();
    if (form.city === "") {
      alert("Add values");
    } else {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&APPID=${APIKEY}`
      )
        .then((res) => res.json())
        .then((data) => data);

      setWeather({ data: data });
    }
  }

  /**
   * Updates the form state based on the input field changes.
   * @param {Event} e - The input change event.
   */
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "city") {
      setForm({ ...form, city: value });
    }
    if (name === "country") {
      setForm({ ...form, country: value });
    }
  };

  return (
    <div
      className="weather"
      style={{
        background: theme === "dark" ? "black" : "white",
        color: theme === "dark" ? "White" : "black",
      }}
    >
      <span className="title">Weather Forecast🌞</span>
      <br />
      <form>
        <input
          type="text"
          placeholder="city"
          name="city"
          onChange={(e) => handleChange(e)}
        />
        &nbsp; &nbsp; &nbsp;&nbsp;
        <input
          type="text"
          placeholder="Country"
          name="country"
          onChange={(e) => handleChange(e)}
        />
        <button className="getweather" onClick={(e) => weatherData(e)}>
          Search
        </button>
      </form>

      {/* Button component to toggle theme */}
      <Button onClick={toggleTheme} btnText="Switch Modes" />

      {/* Display weather data if available */}
      {weather.data !== undefined ? (
        <div>
          <DisplayWeather data={weather.data} />
        </div>
      ) : null}
    </div>
  );
}

export default Weather;
