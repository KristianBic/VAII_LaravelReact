import React from "react";
import { Link } from "react-router-dom";
import ContactUsImage from "../assets/image/images/contactUs.png";

const ContactUS = () => {
    return (
        <div className="contactUs">
            <img
                className="contactUs-image"
                src={ContactUsImage}
                alt="Kontaktujte nas"
            />
            <div className="contactUs-container">
                <div className="contactUs-content">
                    <h3>Oslovila Vás naša ponuka?</h3>
                    <p>
                        Ak áno, neváhajte nás kontaktovať a pridajte sa k viac
                        ako tisíc spokojným zákazníkom
                    </p>
                    <Link className="button" to="/kontakt">
                        Kontaktujte nás
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ContactUS;
