import React, { useState } from "react";
import { FaBars, FaDownload, FaCopy } from "react-icons/fa";
import perfil from "../../assets/avatar.jpg";
import { useNavigate } from "react-router-dom";
import "./sistemConfigCMD.css";

const SistemaOperacionalCMD = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [config, setConfig] = useState(null);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const irParaInicio = () => {
        navigate("/inicio");
    };

    // 🔎 Buscar configuração no backend
    const buscarConfiguracao = async () => {
        const linguagem = localStorage.getItem("linguagem");
        const versao = localStorage.getItem("versao");
        const so = localStorage.getItem("so");

        if (!linguagem || !versao || !so) {
            alert("Dados incompletos.");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch(
                `http://localhost:8080/api/config?linguagem=${encodeURIComponent(
                    linguagem
                )}&versao=${encodeURIComponent(
                    versao
                )}&so=${encodeURIComponent(so)}`
            );

            if (!response.ok) {
                alert("Configuração não encontrada.");
                setLoading(false);
                return;
            }

            const data = await response.json();
            setConfig(data);

        } catch (error) {
            console.error("Erro:", error);
            alert("Erro ao conectar com servidor.");
        }

        setLoading(false);
    };

    // ⬇️ Baixar script automático
    const baixarScript = () => {
        const linguagem = localStorage.getItem("linguagem");
        const versao = localStorage.getItem("versao");
        const so = localStorage.getItem("so");

        window.location.href =
            `http://localhost:8080/api/script?linguagem=${encodeURIComponent(
                linguagem
            )}&versao=${encodeURIComponent(
                versao
            )}&so=${encodeURIComponent(so)}`;
    };

    // 📋 Copiar comando para área de transferência
    const copiarComando = () => {
        if (config?.comandoValidacao) {
            navigator.clipboard.writeText(config.comandoValidacao);
            alert("Comando copiado!");
        }
    };

    return (
        <div className="linguagem-container">

            {/* MENU */}
            <button className="menu-toggle" onClick={toggleMenu}>
                <FaBars />
            </button>

            {menuOpen && (
                <div className="linguagem-sidebar">
                    <button className="sidebar-button" onClick={irParaInicio}>
                        Início
                    </button>
                </div>
            )}

            {/* HEADER */}
            <div className="header">
                <span className="username">Mateus Nunes</span>
                <img src={perfil} alt="Perfil" className="avatar" />
            </div>

            {/* CARD PRINCIPAL */}
            <div className="linguagem-card">
                <div className="card-title">
                    <h2>Configuração da Máquina</h2>
                </div>

                {/* BOTÃO INICIAL */}
                {!config && (
                    <button
                        onClick={buscarConfiguracao}
                        className="buscar-config-button"
                        disabled={loading}
                    >
                        {loading ? "Buscando..." : "🔍 Buscar Configuração"}
                    </button>
                )}

                {/* RESULTADO */}
                {config && (
                    <div className="resultado-config">

                        <p><strong>Linguagem:</strong> {config.linguagem}</p>
                        <p><strong>Versão:</strong> {config.versao}</p>
                        <p><strong>Sistema:</strong> {config.sistemaOperacional}</p>

                        <div className="download-section">
                            <button
                                className="download-button"
                                onClick={baixarScript}
                            >
                                <FaDownload /> Baixar e Configurar
                            </button>
                        </div>

                        <div className="cmd-section">
                            <p><strong>Comando de Validação:</strong></p>

                            <div className="cmd-box">
                                {config.comandoValidacao}
                            </div>

                            <button
                                className="copy-button"
                                onClick={copiarComando}
                            >
                                <FaCopy /> Copiar Comando
                            </button>
                        </div>

                    </div>
                )}
            </div>
        </div>
    );
};

export default SistemaOperacionalCMD;
