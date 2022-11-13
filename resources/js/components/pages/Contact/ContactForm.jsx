import React from "react";
import mail from "../../assets/image/svgs/mail.svg";
import axios from "axios";
import Swal from "sweetalert2";
//import v from "../../../../../routes/api/kontakt";
class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.addData = this.addData.bind(this);
    }
    addData(event) {
        event.preventDefault();
        const formData = new FormData();
        formData.append("firstName", this.firstName.value);
        formData.append("surname", this.surname.value);
        formData.append("telephone", this.telephone.value);
        formData.append("email", this.email.value);
        formData.append("subject", this.subject.value);
        formData.append("message", this.message.value);

        axios
            .post("/formSubmit", formData)
            .then(function (response) {
                console.log(response.data);

                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Hurray!!",
                    text: "Mail sa odoslal spravne",
                    showConfirmButton: false,
                    timer: 1500,
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
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
                    <form className="contact-container-right formContainer">
                        <div className="input-block one">
                            <label>Meno</label>
                            <input
                                type="text"
                                id="meno"
                                placeholder="Vaše meno"
                                ref={(firstName) => {
                                    this.firstName = firstName;
                                }}
                            />
                        </div>
                        <div className="input-block one">
                            <label>Priezvisko</label>
                            <input
                                type="text"
                                id="priezvisko"
                                placeholder="Vaše priezvisko"
                                ref={(surname) => {
                                    this.surname = surname;
                                }}
                            />
                        </div>
                        <div className="input-block one">
                            <label>Tel. číslo</label>
                            <input
                                type="tel"
                                id="telefon"
                                placeholder="Váš telefón"
                                ref={(telephone) => {
                                    this.telephone = telephone;
                                }}
                            />
                        </div>
                        <div className="input-block one">
                            <label>Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Váš email"
                                ref={(email) => {
                                    this.email = email;
                                }}
                            />
                        </div>
                        <div className="input-block two">
                            <label>Predmet správy</label>
                            <input
                                type="text"
                                id="predmet"
                                placeholder="Predmet"
                                ref={(subject) => {
                                    this.subject = subject;
                                }}
                            />
                        </div>
                        <div className="input-block two">
                            <label>Správa</label>
                            <textarea
                                type="text"
                                id="sprava"
                                placeholder="Vaša správa"
                                refs="message"
                                ref={(message) => {
                                    this.message = message;
                                }}
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="form-button button sendEmailBtn"
                            onClick={this.addData}
                        >
                            Odoslať
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default ContactForm;
