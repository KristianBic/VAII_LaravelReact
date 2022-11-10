import React from "react";
import { Routes, Route } from "react-router-dom";

import NotFound from "./pages/NotFound";
import Login from "../components/pages/Login/Login";
import Home from "../components/pages/Home/Home";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/*" element={<NotFound />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    );
};

export default App;
