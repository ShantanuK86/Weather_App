# Weather Forecast Application

## Table of Contents

- [About](#about)
- [Technologies Used](#technologies-used)
- [Running the Application Locally](#running-the-application-locally)
- [Approach](#approach)
- [Known Issues and Limitations](#known-issues-and-limitations)

## About

This is a simple weather forecast application built using React.js. The application allows users to search for the weather conditions of a specific city and country. It also provides a theme switch button to toggle between light and dark modes.

## Technologies Used

- **React.js**: A JavaScript library for building user interfaces.
- **OpenWeatherMap API**: A service that provides weather data, including current weather data, forecasts, and historical data to the developers of web services and mobile applications.
- **CSS**: Used for styling the components.

## Running the Application Locally

1. First, clone the repository to your local machine using `git clone`.
2. Navigate to the project directory.
3. Install the necessary dependencies with `npm install`.
4. Start the application with `npm start`.
5. Open your browser and visit `http://localhost:3000`.

## Approach

The application uses the OpenWeatherMap API to fetch weather data. The data is then passed to the `DisplayWeather` component to be displayed. The application also uses React Context to manage the theme state across the entire application.

## Known Issues and Limitations

- The application does not handle errors that may occur during the API call. For example, if the user enters an invalid city or country, the application will not provide any feedback.
- The application uses a single API key which is hardcoded into the application. This could lead to the key being overused if the application is used heavily.
- The application does not provide a detailed forecast, only the current weather conditions.

## LIVE LINK