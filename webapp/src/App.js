import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HeaderPresenter from "./presenter/HeaderPresenter";
import ActiveLecture from "./pages/ActiveLecture";
import PlanLecture from "./pages/PlanLecture";
import Home from "./pages/Home";
import LoginInfo from "./container/Login/LoginInfo";
import LoginPresenter from "./presenter/LoginPresenter";
import Show from "./presenter/showPresenter";

function App(props) {
    return (
        <div className="app">
            <Router>
                <HeaderPresenter />
                <Routes>
                    <Route path="/" exact element={<LoginPresenter/>} />
                    <Route path="home" exact element={Home} />
                    <Route path="activelecture" element={<ActiveLecture />} />
                    <Route path="lectureplaner" element={<PlanLecture />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;