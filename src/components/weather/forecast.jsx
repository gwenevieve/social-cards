import React from "react";
import { startCase } from "lodash";

const Weather = () => {
  const [weatherData, setWeatherData] = React.useState();
  const [city, setCity] = React.useState("");
  const [error, setError] = React.useState();
  const [userLocation, setUserLocation] = React.useState(false);

  const date = new Date();

  React.useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setUserLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      console.error("No access to geolocation.");
      setError("Couldn't retrieve weather");
    }
  }, []);

  React.useEffect(() => {
    if (userLocation.latitude && userLocation.longitude) {
      let reverseGeocodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${userLocation.longitude},${userLocation.latitude}.json?access_token=${process.env.REACT_APP_MAPBOX}`;
      fetch(reverseGeocodeURL)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            setError("Couldn't retrieve weather");
            throw new Error("Something went wrong ...");
          }
        })
        .then((data) => {
          data.features.forEach((feature) => {
            if (feature.place_type[0] === "place") {
              setCity(feature.text);
              let key = process.env.REACT_APP_WEATHERAPI;
              let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${key}`;
              fetch(url)
                .then((response) => {
                  if (response.ok) {
                    return response.json();
                  } else {
                    setError("Couldn't retrieve weather");
                    throw new Error("Something went wrong ...");
                  }
                })
                .then((data) => setWeatherData(data))
                .catch((error) => {
                  console.error(`Error! ${error}`);
                  setError("Couldn't retrieve weather");
                });
            }
          });
        })
        .catch((error) => {
          console.error(`Error! ${error}`);
          setError("Couldn't retrieve weather");
        });
    }
  }, [city, userLocation]);

  return (
    <div className="weather">
      {weatherData ? (
        <div>
          <div className="weather-location">
            <p>{weatherData.name}</p>
            <p>{date.getHours() + `:00`}</p>
            <p>{startCase(weatherData.weather[0].description)}</p>
          </div>
          <div className="weather-details">
            <span className="weather-temperature">
              {Math.floor(weatherData.main.temp)}
            </span>
            <span className="weather-unit">{`°C`}</span>
            <img
              src={
                `http://openweathermap.org/img/wn/` +
                weatherData.weather[0].icon +
                `@2x.png`
              }
              alt="weather symbol"
            />
          </div>
        </div>
      ) : (
        <div>
          {!error ? (
            <div className="loader"></div>
          ) : (
            <div>
              <p className="error-message">{error}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Weather;
