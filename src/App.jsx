import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';

import Login from "./Components/Login/Login";
import Inicio from "./Components/Inicio/Inicio";
import Linguagem from "./Components/configSoftware/Linguagem";
import Versao from "./Components/configSoftware/Versao";
import SistemaOperacional from "./Components/configSoftware/sistemaOperacional";
import SistemaOperacionalCMD from "./Components/configSoftware/sistemConfigCMD";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/linguagem" element={<Linguagem />} />
        <Route path="/versao" element={<Versao />} />
        <Route path="/so" element={<SistemaOperacional />} />
        <Route path="/configuracao-final" element={<SistemaOperacionalCMD />} />
      </Routes>
    </Router>
  );
};

export default App;
