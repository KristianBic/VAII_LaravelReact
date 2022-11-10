import React from "react";
import { Link } from "react-router-dom";
import mainLogo from "../assets/image/images/marpal_png.png";

import "../assets/style/Footer_style.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <Link className="footer-logo" to="/">
                    <img src={mainLogo} alt="Marpal logo" />
                </Link>
                <div className="footer-columnOfLinks">
                    <h4>Odkazy</h4>
                    <ul>
                        <li>
                            <Link className="link" to="/galeria">
                                Galéria
                            </Link>
                        </li>
                        <li>
                            <Link className="link" to="/referencie">
                                Referencie
                            </Link>
                        </li>
                        <li>
                            <Link className="link" to="/kontakt">
                                Kontakt
                            </Link>
                        </li>

                        <li>
                            <Link className="link" to="/login">
                                Prihlásenie
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-columnOfLinks">
                    <h4>Naše služby</h4>
                    <ul>
                        <li>
                            <Link className="link" to="/">
                                Vrtné práce
                            </Link>
                        </li>
                        <li>
                            <Link className="link" to="/">
                                Stavebné práce
                            </Link>
                        </li>
                        <li>
                            <Link className="link" to="/">
                                Zemné a výkopové práce
                            </Link>
                        </li>
                        <li>
                            <Link className="link" to="/">
                                Hydraulická ruka
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-columnOfLinks">
                    <h4>Sociálne siete</h4>
                    <ul>
                        <li>
                            <a
                                className="link"
                                href="https://www.instagram.com/_vrtanie_studni_/"
                            >
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a
                                className="link"
                                href="https://www.facebook.com/Marpal-102560028949170"
                            >
                                Facebook
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer-copyright">
                    <p>2022 Marpal s.r.o. © Všetky práva vyhradené.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
