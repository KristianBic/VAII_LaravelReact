import React from "react";
import biggerDots from "../../assets/image/icons/bigger_dots.svg";
import loginImage from "../../assets/image/svgs/admin-image.svg";
import "../../assets/style/Login_style.css";
import { useRef, useState, useEffect, useContext } from "react";
import Swal from "sweetalert2";
import { USER_REGEX, PWD_REGEX } from "./Regex";
import AuthContext from "../../auth/AuthProvider";
import { Navigate } from "react-router-dom";

const Login = () => {
    const userRef = useRef();
    const errRef = useRef();
    const [user, setUser] = useState("");
    const [pwd, setPwd] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);
    const { setAuth } = useContext(AuthContext);

    // State events
    useEffect(() => {
        userRef.current.focus();
    }, []);
    useEffect(() => {
        setErrMsg("");
    }, [user, pwd]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        //TODO: redex prerobit
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        if (!v1) {
            setErrMsg("Invalid Entry user");
            return;
        } else if (!v2) {
            setErrMsg("Invalid Entry pwd");
            return;
        }

        const data = {
            name: user,
            password: pwd,
        };

        await axios
            .post("/login", data)
            .then(function (response) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Hurray!!",
                    text: "Uspesne prihlasenie",
                    showConfirmButton: false,
                    timer: 1500,
                });
                const accessToken = response?.data?.accessToken;
                const roles = response?.data?.roles;
                setAuth({ user, pwd, roles, accessToken });
                setUser("");
                setPwd("");
                setSuccess(true);
            })
            .catch(function (err) {
                if (!err?.response) {
                    setErrMsg("No Server Response");
                } else if (err.response?.status === 400) {
                    setErrMsg("Missing Username or Password");
                } else if (err.response?.status === 401) {
                    setErrMsg("Unauthorized");
                } else {
                    setErrMsg("Login Failed");
                }
                errRef.current.focus();
            });
    };

    return (
        <>
            {success ? (
                <section>
                    <Navigate to="/nastavenia" />
                </section>
            ) : (
                <div className="login-body">
                    <img
                        className="bigger-dots one"
                        src={biggerDots}
                        alt="dots"
                    />
                    <img
                        className="bigger-dots two"
                        src={biggerDots}
                        alt="dots"
                    />
                    <img
                        className="bigger-dots three"
                        src={biggerDots}
                        alt="dots"
                    />
                    <div className="admin-container">
                        <div className="admin-container-left">
                            <img
                                className="admin-image"
                                src={loginImage}
                                alt="admin image"
                            />
                        </div>
                        <div className="admin-container-right">
                            <p
                                ref={errRef}
                                className={errMsg ? "errmsg" : "offscreen"}
                                aria-live="assertive"
                            >
                                {errMsg}
                            </p>
                            <form onSubmit={handleSubmit}>
                                <h4>Admin dashboard</h4>
                                <div className="error"></div>
                                <label htmlFor="name">Login</label>
                                <input
                                    type="text"
                                    placeholder="Meno"
                                    id="name"
                                    ref={userRef}
                                    onChange={(e) => setUser(e.target.value)}
                                    value={user}
                                    required
                                />
                                <div></div>
                                <label>Heslo</label>
                                <input
                                    type="password"
                                    placeholder="Heslo"
                                    id="password"
                                    onChange={(e) => setPwd(e.target.value)}
                                    value={pwd}
                                    required
                                />
                                <div></div>
                                <button
                                    type="submit"
                                    className="loginBtn button"
                                >
                                    Login
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Login;
