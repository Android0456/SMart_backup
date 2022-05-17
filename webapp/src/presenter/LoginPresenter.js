import React from "react";
import LoginInfo from "../container/Login/LoginInfo";

function LoginPresenter(props) {
    let email = "";
    let password = "";
    return (
        <div>
            {
                <LoginInfo
                    setEmail={(text) => (email = text)}
                    setPassword={(text) => (password = text)}
                    LoginUser={() => {
                        return props.model.LoginUser(email, password);
                    }}
                />
            }
        </div>
    );
}

export default LoginPresenter;
