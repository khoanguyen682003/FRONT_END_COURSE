// components/button.jsx
import React from "react";

export function Button(props) {
    // Giải thích từng phần:
    // - Hàm Button nhận một object `props` từ component cha (ví dụ App).
    // - props có thể chứa: title, onClick, className, style, type, ... (tùy nơi gọi).
    //
    // Dòng giải cấu trúc props:
    const { title, onClick, className, type = "button", ...rest } = props;
    // - title: chuỗi sẽ hiển thị bên trong nút (ở project này title lấy từ buttonTitle array).
    // - onClick: hàm được gọi khi người dùng bấm nút; ở App ta truyền onClick={() => setFilter(...)}.
    // - className: tên class CSS nếu cần style riêng cho nút.
    // - type: kiểu button (mặc định là "button" để tránh submit form nếu nằm trong form).
    // - ...rest: gom các prop còn lại để chuyển tiếp (ví dụ data-*, aria-*, style,...).

    return (
        <button
            type={type}           // gán attribute type cho thẻ button (vd: "button", "submit")
            onClick={onClick}     // gán handler onClick từ props vào thẻ <button>
            className={className} // gán className (nếu có) để áp style
            {...rest}             // chuyển tiếp các prop khác (data-*, aria-*, style,...)
            style={{ cursor: "pointer", ...(props.style || {}) }} // style mặc định + merge nếu có props.style
        >
            {title}  {/* Nội dung hiển thị trong nút: chuỗi title truyền từ props */}
        </button>
    );
}

export default Button;
