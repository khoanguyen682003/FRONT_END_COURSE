// src/components/city.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudMeatball } from '@fortawesome/free-solid-svg-icons';

export function City({ weatherData, loading }) {
  // Mặc định hiển thị mẫu nếu chưa có data
  const defaultCity = {
    name: 'Ho Chi Minh City',
    weatherMain: 'Fog',
    temp: '28'
  };

  const cityName = weatherData?.city?.name || defaultCity.name;
  const weatherMain = weatherData?.list?.[0]?.weather?.[0]?.main || defaultCity.weatherMain;
  // nhiệt độ lấy từ list[0].main.temp
  const temp = weatherData?.list?.[0]?.main?.temp ?? defaultCity.temp;

  return (
    <>
      <div id="city">
        <FontAwesomeIcon icon={faCloudMeatball} color="white" size="2x" />
        <h3>{weatherMain}</h3>
        <h4>{cityName}</h4>
        <h1>{Math.round(temp)}&deg;C</h1>
      </div>
    </>
  );
}
