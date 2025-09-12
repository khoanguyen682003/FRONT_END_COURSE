import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function SignIn() {
    return (
        <>
            <form action="#" id="form-signin">
                <h1>Sign In</h1>
                <div id="div">
                    <p>Tên đăng nhập </p> 
                    <input type="text" name="username" placeholder="Insert name" />
                    <p>Mật khẩu </p>
                    <input type="password" name="password" placeholder="Nhập mật khẩu" />
                    <div id="checked">
                        <input type="checkbox" />
                        <p>Remember Me </p>
                    </div>
                    <fieldset>
                        <input type="submit" value="Đăng nhập" />  
                        <input type="reset" value="Nhập lại" />
                    </fieldset>
                    <a href="dangky.html" style={{ textDecoration: "none" }}>
                        <h4 style={{ textDecoration: "none", marginTop: "-1%", fontWeight: 500, textAlign: "center" }}>
                            Chưa có tài khoản ? Đăng kí tài khoản mới
                        </h4>
                    </a>    
                </div>
            </form> 
        </>
    )
}
export default SignIn
