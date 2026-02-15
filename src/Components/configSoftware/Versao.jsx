import React, { useState } from "react";
import { FaCheck, FaBars } from "react-icons/fa";
import perfil from "../../assets/avatar.jpg";
import { useNavigate } from "react-router-dom";
import "./Linguagem.css";

const Versao = () => {
  const [selected, setSelected] = useState("1.8");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const irParaInicio = () => {
    navigate("/inicio");
  };

  const irParaSistemaOperacional = () => {
    localStorage.setItem("versao", selected);
    navigate("/so");
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
          <h2>Qual a versão<br/> será utilizada ?</h2>
        </div>

        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          className="linguagem-select"
        >
          <option value="1.8">1.8</option>
          <option value="1.9">1.9</option>
          <option value="10">10</option>
          <option value="11">11</option>
        </select>

        <button className="confirm-button" onClick={irParaSistemaOperacional}>
          <FaCheck />
        </button>
      </div>
    </div>
  );
};

export default Versao;
