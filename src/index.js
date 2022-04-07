import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login.js";
import Home from "./Home.js";
import Register from "./Register.js";
import Alltemple from "./Alltemple.js";
import Allevent from "./Allevent.js";
import Allreview from "./Allreview.js";

import Adminhome from "./temple_admin/Adminhome.js";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/alltemple" element={<Alltemple />} />
      <Route path="/allevent" element={<Allevent />} />
      <Route path="/allreview" element={<Allreview />} />
      <Route path="/admintemplehome" element={<Adminhome />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
