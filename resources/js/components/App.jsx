import React from "react";
import { Routes, Route } from "react-router-dom";

import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact/Contact";
import Login from "../components/pages/Login/Login";
import Home from "../components/pages/Home/Home";
import References from "./pages/References/References";

import ScrollToTop from "../components/ui/ScrollToTop";

//mozno dat navbar a footer pred routes
const App = () => {
    return (
        <div>
            <ScrollToTop>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/*" element={<NotFound />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/kontakt" element={<Contact />} />
                    <Route path="/referencie" element={<References />} />
                </Routes>
            </ScrollToTop>
        </div>
    );
};

export default App;
