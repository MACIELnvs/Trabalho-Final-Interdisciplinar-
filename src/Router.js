import React from "react";
import home from "./Home";
import cartas from "./Cartas";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={"Home/"}></Route>
                <Route path="/Cartas" element={"Cartas/"}></Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes;