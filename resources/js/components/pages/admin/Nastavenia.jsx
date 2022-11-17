import React from "react";
//import "../../assets/style/admin/Nastavenia_style.css";

const Nastavenia = () => {
    return (
        <>
            <div className="container-fluid py-0 kontaktInfo" id="kontaktInfo">
                <div className="row mt-4 ">
                    <div className="col-md-12 mb-lg-0 mb-4 ">
                        <div className="card mt-4">
                            <div className="card-header pb-0 p-3">
                                <div className="row">
                                    <div className="col-6 d-flex align-items-center">
                                        <h4 className="mb-0 gallery-title text-nowrap">
                                            Kontaktné informácie
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body p-3">
                                <div className="row">
                                    <div className="col-xl-4 col-sm-6 mb-xl-0 mb-4">
                                        <div className="col-6 d-flex align-items-center">
                                            <h6 className="mb-0 title-bolder text-nowrap">
                                                Sídlo firmy
                                            </h6>
                                        </div>
                                        <div className="col-md-0 pt-3">
                                            <input
                                                id="sidlo"
                                                className="card card-body border card-plain border-radius-lg d-flex align-items-center flex-row w-100 "
                                                placeholder="Adresa sídla"
                                            />
                                            <div className="err sidloError"></div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-sm-6 mb-xl-0 mb-4">
                                        <div className="col-6 d-flex align-items-center">
                                            <h6 className="mb-0 title-bolder text-nowrap">
                                                Korešpondenčná adresa
                                            </h6>
                                        </div>
                                        <div className="col-md-0 pt-3">
                                            <input
                                                id="korAdresa"
                                                className="card card-body border card-plain border-radius-lg d-flex align-items-center flex-row w-100 "
                                                placeholder="Kor. adresa"
                                            />
                                            <div className="err korAdresaError"></div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-sm-6 mb-xl-0 mb-4">
                                        <div className="col-6 d-flex align-items-center">
                                            <h6 className="mb-0 title-bolder text-nowrap">
                                                IBAN
                                            </h6>
                                        </div>
                                        <div className="col-md-0 pt-3">
                                            <input
                                                id="iban"
                                                className="card card-body border card-plain border-radius-lg d-flex align-items-center flex-row w-100 "
                                                placeholder="IBAN"
                                            />
                                            <div className="err ibanError"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body p-3 pt-0">
                                <div className="row">
                                    <div className="col-xl-4 col-sm-6 mb-xl-0 mb-4">
                                        <div className="col-6 d-flex align-items-center">
                                            <h6 className="mb-0 title-bolder text-nowrap">
                                                Konateľ firmy
                                            </h6>
                                        </div>
                                        <div className="col-md-0 pt-3">
                                            <input
                                                id="konatel"
                                                className="card card-body border card-plain border-radius-lg d-flex align-items-center flex-row w-100 "
                                                placeholder="Meno a priezvisko"
                                            />
                                            <div className="err konatelError"></div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-sm-6 mb-xl-0 mb-4">
                                        <div className="col-6 d-flex align-items-center">
                                            <h6 className="mb-0 title-bolder text-nowrap">
                                                IČO
                                            </h6>
                                        </div>
                                        <div className="col-md-0 pt-3">
                                            <input
                                                id="ico"
                                                className="card card-body border card-plain border-radius-lg d-flex align-items-center flex-row w-100 "
                                                placeholder="IČO"
                                            />
                                            <div className="err icoError"></div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-sm-6 mb-xl-0 mb-4">
                                        <div className="col-6 d-flex align-items-center">
                                            <h6 className="mb-0 title-bolder text-nowrap">
                                                IČ DPH
                                            </h6>
                                        </div>
                                        <div className="col-md-0 pt-3">
                                            <input
                                                id="icdph"
                                                className="card card-body border card-plain border-radius-lg d-flex align-items-center flex-row w-100 "
                                                placeholder="IČDPH"
                                            />
                                            <div className="err icdphError"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body p-3">
                                <div className="row">
                                    <div className="col-md-6 mb-md-0 mb-4 w-100">
                                        <div className="border-radius-lg d-flex align-items-center flex-row w-100">
                                            <button className="saveContactInfoBtn sendBtn border w-100 h-100 card card-body align-items-center ">
                                                Uložiť kontaktné informácie
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid py-0 changePass" id="changePass">
                <div className="row mt-4 ">
                    <div className="col-md-12 mb-lg-0 mb-4 ">
                        <div className="card mt-4">
                            <div className="card-header pb-0 p-3">
                                <div className="row">
                                    <div className="col-6 d-flex align-items-center">
                                        <h4 className="mb-0 gallery-title">
                                            Zmena hesla
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body p-3">
                                <div className="row">
                                    <div className="col-xl-4 col-sm-6 mb-xl-0 mb-4">
                                        <div className="col-6 d-flex align-items-center">
                                            <h6 className="mb-0 title-bolder text-nowrap">
                                                Aktuálne heslo
                                            </h6>
                                        </div>
                                        <div className="col-md-0 pt-3">
                                            <input
                                                type="password"
                                                id="oldPass"
                                                className="card card-body border card-plain border-radius-lg d-flex align-items-center flex-row w-100"
                                            />
                                            <div className="err oldPassError"></div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-sm-6 mb-xl-0 mb-4">
                                        <div className="col-6 d-flex align-items-center">
                                            <h6 className="mb-0 title-bolder text-nowrap">
                                                Nové heslo
                                            </h6>
                                        </div>
                                        <div className="col-md-0 pt-3">
                                            <input
                                                type="password"
                                                id="newPass1"
                                                className="card card-body border card-plain border-radius-lg d-flex align-items-center flex-row w-100"
                                            />
                                            <div className="err newPass1Error"></div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-sm-6 mb-xl-0 mb-4">
                                        <div className="col-6 d-flex align-items-center">
                                            <h6 className="mb-0 title-bolder text-nowrap">
                                                Zopakuj heslo
                                            </h6>
                                        </div>
                                        <div className="col-md-0 pt-3">
                                            <input
                                                type="password"
                                                id="newPass2"
                                                className="card card-body border card-plain border-radius-lg d-flex align-items-center flex-row w-100 "
                                            />
                                            <div className="err newPass2Error"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body p-3">
                                <div className="row">
                                    <div className="col-md-6 mb-md-0 mb-4 w-100">
                                        <div className=" border-radius-lg d-flex align-items-center flex-row w-100">
                                            <button className="changePassBtn sendBtn border w-100 h-100 card card-body align-items-center ">
                                                Zmeniť heslo
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Nastavenia;
