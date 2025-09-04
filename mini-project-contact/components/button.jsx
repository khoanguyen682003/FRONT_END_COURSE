// components/button.jsx
import React from "react";

export function Button({ title, onClick, ...rest }) {
  return (
    // Trả về một thẻ <button> HTML
    // - onClick={onClick}: gắn sự kiện click từ props
    // - {...rest}: "trải" các prop còn lại xuống <button>
    //   => giúp nút linh hoạt (có thể thêm className, style, disabled,… từ nơi gọi)
    <button onClick={onClick} {...rest}>
      {title}
    </button>
  );
}

export default Button;
