// src/components/information.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { informationData } from "../components/informationData.js";

export function Information({ weatherData }) {
  // Lấy mục 0 (near-term) nếu có
  const first = weatherData?.list?.[0];

  // Nếu có weatherData, build dynamicData array; ngược lại dùng informationData như trước
  const dynamic = first ? [
    {
      icon: informationData[0].icon,
      infor: 'Humidity',
      stat: `${first.main.humidity}%`
    },
    {
      icon: informationData[1].icon,
      infor: 'Air Pressure',
      stat: `${first.main.pressure} hPa`
    },
    {
      icon: informationData[2].icon,
      infor: 'Chance of rain',
      // pop field can be 0..1 -> percent
      stat: `${Math.round((first.pop ?? 0) * 100)}%`
    },
    {
      icon: informationData[3].icon,
      infor: 'Wind speed',
      stat: `${first.wind.speed} m/s`
    },
  ] : informationData;

  const listToRender = dynamic;

  return (
    <>
      <div id="information">
        {listToRender.map(({ icon, infor, stat }, idx) => (
          <div key={idx} id="information-div">
            <div id="information-icon">
              <p><FontAwesomeIcon icon={icon} color="white" /></p>
            </div>
            <div id="information-stat">
              <p>{infor}</p>
              <h2>{stat}</h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default Information;
