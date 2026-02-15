import React, { useState } from "react";
import { FaCheck, FaBars } from "react-icons/fa";
import perfil from "../../assets/avatar.jpg";
import { useNavigate } from "react-router-dom";
import "./Linguagem.css";

const SistemaOperacional = () => {
  const [selected, setSelected] = useState("Windows");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const irParaInicio = () => {
    navigate("/inicio");
  };

  const irParaFinalizacao = () => {
    localStorage.setItem("so", selected);
    navigate("/sistemConfig");
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

      {/* Cabeçalho */}
      <div className="header">
        <span className="username">Mateus Nunes</span>
        <img src={perfil} alt="Perfil" className="avatar" />
      </div>

      {/* Card central */}
      <div className="linguagem-card">
        <div className="card-title">
          <h2>Qual o sistema operacional<br /> será utilizada ?</h2>
        </div>

        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          className="linguagem-select"
        >
          <option value="Windows">Windows</option>
          <option value="Linux">Linux</option>
          <option value="IOS">IOS</option>
        </select>

        <button className="confirm-button" onClick={irParaFinalizacao}>
          <FaCheck />
        </button>
      </div>
    </div>
  );
};

export default SistemaOperacional;
