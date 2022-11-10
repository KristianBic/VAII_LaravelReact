import React from "react";
import biggerDots from "../../assets/image/icons/bigger_dots.svg";
import loginImage from "../../assets/image/svgs/admin-image.svg";
import "../../assets/style/Login_style.css";

const Login = () => {
    return (
        <div className="login-body">
            <img className="bigger-dots one" src={biggerDots} alt="dots" />
            <img className="bigger-dots two" src={biggerDots} alt="dots" />
            <img className="bigger-dots three" src={biggerDots} alt="dots" />
            <div className="admin-container">
                <div className="admin-container-left">
                    <img
                        className="admin-image"
                        src={loginImage}
                        alt="admin image"
                    />
                </div>
                <div className="admin-container-right">
                    <form>
                        <h4>Admin dashboard</h4>
                        <div className="error"></div>
                        <label>Login</label>
                        <input
                            type="text"
                            placeholder="Login"
                            id="login"
                            autoComplete="on"
                        />
                        <label>Heslo</label>
                        <input
                            type="password"
                            placeholder="Heslo"
                            id="password"
                            autoComplete="on"
                        />
                        <button className="loginBtn button">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
