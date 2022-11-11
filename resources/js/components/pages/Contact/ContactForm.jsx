import React from "react";
import mail from "../../assets/image/svgs/mail.svg";

const ContactForm = () => {
    return (
        <div className="contact">
            <div className="contact-container">
                <div className="contact-container-left">
                    <img src={mail} className="mail one" alt="mail" />
                    <img src={mail} className="mail two" alt="mail" />
                    <img src={mail} className="mail three" alt="mail" />
                    <img src={mail} className="mail four" alt="mail" />
                    <h3>Kontaktné informácie</h3>
                    <p></p>
                    <ul>
                        <div className="li-group one">
                            <li className="li-caption">Sídlo firmy</li>
                            <li>Športová 3151, 02401 KNM</li>
                        </div>
                        <div className="li-group one">
                            <li className="li-caption">
                                Korešpondenčná adresa
                            </li>
                            <li>Štúrová 1211/63 02404 KNM</li>
                        </div>
                        <div className="li-group two">
                            <li className="li-caption">IBAN</li>
                            <li>SK66 1100 0000 0029 2888 9969</li>
                        </div>
                        <div className="li-group three">
                            <li className="li-caption">Konateľ firmy</li>
                            <li>Pavol Kubala</li>
                        </div>
                        <div className="li-group four">
                            <li className="li-caption">IČO</li>
                            <li>46947035</li>
                        </div>
                        <div className="li-group five">
                            <li className="li-caption">IČ DPH</li>
                            <li>SK20236669791</li>
                        </div>
                    </ul>
                </div>
                <div className="contact-container-right formContainer">
                    <div className="input-block one">
                        <label>Meno</label>
                        <input type="text" id="meno" placeholder="Vaše meno" />
                    </div>
                    <div className="input-block one">
                        <label>Priezvisko</label>
                        <input
                            type="text"
                            id="priezvisko"
                            placeholder="Vaše priezvisko"
                        />
                    </div>
                    <div className="input-block one">
                        <label>Tel. číslo</label>
                        <input
                            type="tel"
                            id="telefon"
                            placeholder="Váš telefón"
                        />
                    </div>
                    <div className="input-block one">
                        <label>Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Váš email"
                        />
                    </div>
                    <div className="input-block two">
                        <label>Predmet správy</label>
                        <input type="text" id="predmet" placeholder="Predmet" />
                    </div>
                    <div className="input-block two">
                        <label>Správa</label>
                        <textarea
                            type="text"
                            id="sprava"
                            placeholder="Vaša správa"
                        ></textarea>
                    </div>
                    <button className="form-button button sendEmailBtn">
                        Odoslať
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
