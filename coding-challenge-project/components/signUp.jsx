import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function SignUp() {
    return (
        <>
            <form action="#" id="form-signup">
                <h1>Sign Up</h1>
                <div id="div">
                    <p>Tên đăng nhập </p> 
                    <input type="text" name="username" placeholder="Insert name" />
                    <p>Mật khẩu </p>
                    <input type="password" name="password" placeholder="Nhập mật khẩu" />
                    <p>Xác nhận mật khẩu </p>
                    <input type="password" name="password" placeholder="Nhập mật khẩu" />
                </div>

                <fieldset style={{}}>
                    <input type="submit" value="Đăng ký" />  
                    <input type="reset" value="Nhập lại" />
                </fieldset>

                <a href="dangnhap.html" style={{ textDecoration: "none" }}>
                    <h4 style={{ textAlign: "center", textDecoration: "none", marginTop: "-1%" }}>
                        Đã có tài khoản ? Hãy đăng nhập
                    </h4>
                </a>    
            </form> 
        </>
    )
}
export default SignUp;
