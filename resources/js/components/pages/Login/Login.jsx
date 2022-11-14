import React from "react";
import biggerDots from "../../assets/image/icons/bigger_dots.svg";
import loginImage from "../../assets/image/svgs/admin-image.svg";
import "../../assets/style/Login_style.css";
//import {Inertia} from '@iner'
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import { ChangeEvent, FormEvent, useState } from "react";

const Login = () => {
    const [form, setForm] = useState();
    //const { errors } = usePage().props;

    const handleChange = (event) => {
        const key = event.target.id;
        const value = event.target.value;

        setForm({
            ...form,
            [key]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        Inertia.post("/login", form);
    };

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
                    <form onSubmit={handleSubmit}>
                        <h4>Admin dashboard</h4>
                        <div className="error"></div>
                        <label>Login</label>
                        <input
                            type="text"
                            placeholder="Login"
                            id="name"
                            autoComplete="on"
                            value={form?.name}
                            onChange={handleChange}
                        />
                        <div></div>
                        <label>Heslo</label>
                        <input
                            type="password"
                            placeholder="Heslo"
                            id="password"
                            autoComplete="on"
                            value={form?.password}
                            onChange={handleChange}
                        />
                        <div></div>
                        <button type="submit" className="loginBtn button">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
