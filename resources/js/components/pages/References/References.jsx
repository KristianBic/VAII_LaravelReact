import React from "react";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import { SimpleHero } from "../../layout/SimpleHero";
import { ReferencesCard } from "./ReferencesCard";

import ztasLogo from "../../assets/image/images/logo-ztas.png";
import subterraLogo from "../../assets/image/images/logo-subterra.png";
import knmLogo from "../../assets/image/images/logo-knm.png";
import omniaLogo from "../../assets/image/images/logo-omnia.png";
import intermarketLogo from "../../assets/image/images/logo-intermarket.png";
import kinexLogo from "../../assets/image/images/logo-kinex.png";
import enzaLogo from "../../assets/image/images/logo-enza.png";
import techstavLogo from "../../assets/image/images/logo-techstav.png";
import developaLogo from "../../assets/image/images/logo-developa.png";
import montezLogo from "../../assets/image/images/logo-montez.png";

import "../../assets/style/References_style.css";

const References = () => {
    return (
        <div>
            <Navbar />
            <div className="body">
                <SimpleHero
                    title="REFERENCIE"
                    description="Keďže firma napreduje najmä vďaka referenciám a ďalšiemu odporúčaniu spokojných klientov, dávame si preto záležať na poctivo vykonanej práci."
                />
                <div className="references-catalog">
                    <div className="references-catalog-container">
                        <ReferencesCard
                            imageSrc={ztasLogo}
                            imageAlt="Žilinská Teplárenská A.S. logo"
                            imageTitle="Žilinská Teplárenská A.S."
                        />
                        <ReferencesCard
                            imageSrc={subterraLogo}
                            imageAlt="Subtera A.S. logo"
                            imageTitle="Subtera A.S."
                        />
                        <ReferencesCard
                            imageSrc={knmLogo}
                            imageAlt="Kysucké Nové Mesto logo"
                            imageTitle="Kysucké Nové Mesto"
                        />
                        <ReferencesCard
                            imageSrc={omniaLogo}
                            imageAlt="Omnia KLF A.S. logo"
                            imageTitle="Omnia KLF A.S."
                        />
                        <ReferencesCard
                            imageSrc={intermarketLogo}
                            imageAlt="Intermarket s.r.o. logo"
                            imageTitle="Intermarket s.r.o."
                        />
                        <ReferencesCard
                            imageSrc={kinexLogo}
                            imageAlt="Kinex Bearings A.S. logo"
                            imageTitle="Kinex Bearings A.S."
                        />
                        <ReferencesCard
                            imageSrc={enzaLogo}
                            imageAlt="Enza s.r.o logo"
                            imageTitle="Enza s.r.o"
                        />
                        <ReferencesCard
                            imageSrc={techstavLogo}
                            imageAlt="Techartstav A.S. logo"
                            imageTitle="Techartstav A.S."
                        />
                        <ReferencesCard
                            myClass="none"
                            imageAlt="none"
                            imageTitle="Developa s.r.o"
                        />
                        <ReferencesCard
                            imageSrc={montezLogo}
                            imageAlt="Montez s.r.o logo"
                            imageTitle="Montez s.r.o"
                        />
                        <ReferencesCard
                            myClass="centerCard"
                            imageSrc={developaLogo}
                            imageAlt="Developa s.r.o logo"
                            imageTitle="Developa s.r.o"
                        />
                        <ReferencesCard
                            myClass="none"
                            imageAlt="none"
                            imageTitle="Developa s.r.o"
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default References;
