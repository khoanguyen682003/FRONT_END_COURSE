import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBolt,
  faCloudRain,
  faCloudShowersHeavy,
  faSnowflake,
  faSmog,
  faSun,
  faMoon,
  faCloud,
  faCloudMeatball
} from '@fortawesome/free-solid-svg-icons';

/**
 * Map weather object (from OpenWeather) -> FontAwesome icon
 */
function mapWeatherToIcon(weather) {
  if (!weather) return faCloudMeatball;

  const id = Number(weather.id || 0);
  const iconCode = String(weather.icon || '');

  if (id >= 200 && id < 300) return faBolt;                // Thunderstorm
  if (id >= 300 && id < 600) {                             // Drizzle & Rain
    if (id >= 520 && id < 600) return faCloudShowersHeavy; // heavier showers
    return faCloudRain;
  }
  if (id >= 600 && id < 700) return faSnowflake;           // Snow
  if (id >= 700 && id < 800) return faSmog;                // Atmosphere
  if (id === 800) {                                        // Clear (day/night)
    return iconCode.endsWith('n') ? faMoon : faSun;
  }
  if (id > 800 && id < 900) return faCloud;                // Clouds
  return faCloudMeatball;                                  // fallback
}

export function City({ weatherData, loading, children }) {
  const defaultCity = {
    name: 'Ho Chi Minh City',
    weatherMain: 'Fog',
    temp: '28'
  };

  const first = weatherData?.list?.[0];
  const cityName = weatherData?.city?.name || defaultCity.name;
  const weatherObj = first?.weather?.[0] || null;
  const weatherMain = weatherObj?.main || defaultCity.weatherMain;
  const tempRaw = first?.main?.temp ?? defaultCity.temp;
  const temp = Number.isFinite(Number(tempRaw)) ? Math.round(Number(tempRaw)) : Math.round(defaultCity.temp);

  const chosenIcon = mapWeatherToIcon(weatherObj);

  return (
    <>
      <div id="city">
        <p id="city-icon" aria-hidden="true">
          <FontAwesomeIcon icon={chosenIcon} color="white" size="2x" />
        </p>
        <h3>{weatherMain}</h3>
        <h4>{cityName}</h4>
        <h1>{Math.round(temp)}&deg;C</h1>
        {children}
      </div>
    </>
  );
}
