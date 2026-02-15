import React, { useState } from "react";
import { FaCheck, FaBars } from "react-icons/fa";
import perfil from "../../assets/avatar.jpg";
import { useNavigate } from "react-router-dom";
import "./Linguagem.css";

const Linguagem = () => {
  const [selected, setSelected] = useState("java");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const irParaInicio = () => {
    navigate("/inicio");
  };

  const irParaVersao = () => {
    localStorage.setItem("linguagem", selected);
    navigate("/versao");
  };

  return (
    <div className="linguagem-container">
      {/* Botão de menu hambúrguer */}
      <button className="menu-toggle" onClick={toggleMenu}>
        <FaBars />
      </button>

      {/* Sidebar do menu */}
      {menuOpen && (
        <div className="linguagem-sidebar">
          <button className="sidebar-button" onClick={irParaInicio}>
            Início
          </button>
        </div>
      )}

      {/* Cabeçalho com nome e avatar */}
      <div className="header">
        <span className="username">Mateus Nunes</span>
        <img src={perfil} alt="Perfil" className="avatar" />
      </div>

      {/* Card central */}
      <div className="linguagem-card">
        <div className="card-title">
          <h2>Qual a linguagem<br />será utilizada ?</h2>
        </div>

        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          className="linguagem-select"
        >
          <option value="java">java</option>
          <option value="nodejs">nodejs</option>
          <option value="python">python</option>
          <option value="dotnet">.NET</option>
        </select>

        <button className="confirm-button" onClick={irParaVersao}>
          <FaCheck />
        </button>
      </div>
    </div>
  );
};

export default Linguagem;
