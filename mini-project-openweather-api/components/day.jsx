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
  faCloud
} from '@fortawesome/free-solid-svg-icons';

function mapWeatherToIcon(weather) {
  // weather: object từ OpenWeather (has id, main, icon, ...)
  if (!weather) return faCloud;

  const id = Number(weather.id);
  const iconCode = String(weather.icon || '');

  if (id >= 200 && id < 300) return faBolt;                // Thunderstorm
  if (id >= 300 && id < 600) {                             // Drizzle & Rain
    // heavier showers -> show showers icon
    if (id >= 520 && id < 600) return faCloudShowersHeavy;
    return faCloudRain;
  }
  if (id >= 600 && id < 700) return faSnowflake;           // Snow
  if (id >= 700 && id < 800) return faSmog;                // Atmosphere: mist, smoke...
  if (id === 800) {                                        // Clear (day/night)
    return iconCode.endsWith('n') ? faMoon : faSun;
  }
  if (id > 800 && id < 900) return faCloud;                // Clouds
  return faCloud;                                          // fallback
}

export function Day({ item, tzOffset = 0 }) {
  // Khi không có item, hiển thị placeholder (vẫn có 1 thẻ <p> trên cùng)
  if (!item) {
    return (
      <div id="day">
        <div id="weather-day">
          <p id="weather-day-icon">—</p>
          <p>—</p>
          <h1>--°C</h1>
          <p>Không có dữ liệu</p>
        </div>
      </div>
    );
  }

  // dùng offset chính xác (item.dt là unix seconds UTC)
  const localDate = new Date((item.dt + tzOffset) * 1000);
  const timeLabel = localDate.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
  });

  const temp = Math.round(item.main?.temp ?? NaN);
  const feels = Math.round(item.main?.feels_like ?? NaN);
  const desc = item.weather?.[0]?.description || '';

  // Chọn icon dựa trên item.weather[0]
  const weatherObj = item.weather?.[0];
  const chosenIcon = mapWeatherToIcon(weatherObj);

  return (
    <div id="day">
      <div id="weather-day">
        {/* THẺ P TRÊN CÙNG CHEN ICON THEO YÊU CẦU */}
        <p id="weather-day-icon">
          <FontAwesomeIcon icon={chosenIcon} size="2x" color="white" />
        </p>

        {/* Thông tin còn lại */}
        <p>{timeLabel}</p>
        <h2>{Number.isNaN(temp) ? '--' : `${temp}°C`}</h2>
        <p>Cảm nhận như {Number.isNaN(feels) ? '--' : `${feels}°C`} — {desc}</p>
      </div>
    </div>
  );
}

export default Day;
