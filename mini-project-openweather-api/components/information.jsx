// src/components/information.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { informationData } from "../components/informationData.js";

/**
 * Nếu informationData export icon dưới dạng { faWater } (object 1 key),
 * hàm này lấy giá trị thực (IconDefinition). Nếu icon đã đúng, trả về luôn.
 */
function resolveIcon(icon) {
  if (!icon) return null;
  if (typeof icon === 'object' && !Array.isArray(icon)) {
    const vals = Object.values(icon);
    if (vals.length === 1) return vals[0];
  }
  return icon;
}

export function Information() {
  // Lấy trực tiếp dữ liệu từ informationData (không lặp, không tạo dynamic)
  const listToRender = informationData.map(item => ({
    ...item,
    _icon: resolveIcon(item.icon) // giữ nguyên data gốc nhưng thêm _icon đã resolve để render
  }));

  return (
    <div id="information">
      {listToRender.map(({ _icon, infor, stat }, idx) => (
        <div key={idx} id="information-div">
          <div id="information-icon">
            <p>
              {_icon ? <FontAwesomeIcon icon={_icon} color="white" /> : null}
            </p>
          </div>
          <div id="information-stat">
            <p>{infor}</p>
            <h2>{stat}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Information;
