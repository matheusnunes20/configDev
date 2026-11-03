import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaDownload, FaCopy, FaCheck } from "react-icons/fa";
import PageShell from "../Layout/PageShell";
import StepProgress from "../Wizard/StepProgress";
import { WIZARD_STEPS } from "../../data/wizardOptions";
import "./sistemConfigCMD.css";

const API_BASE = "http://localhost:8080/api";

const SistemaOperacionalCMD = () => {
  const [loading, setLoading] = useState(false);
  const [config, setConfig] = useState(null);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  const buscarConfiguracao = async () => {
    const linguagem = localStorage.getItem("linguagem");
    const versao = localStorage.getItem("versao");
    const so = localStorage.getItem("so");

    if (!linguagem || !versao || !so) {
      setError("Dados incompletos. Volte e refaça a configuração.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `${API_BASE}/config?linguagem=${encodeURIComponent(linguagem)}&versao=${encodeURIComponent(
          versao
        )}&so=${encodeURIComponent(so)}`
      );

      if (!response.ok) {
        setError("Nenhuma configuração encontrada para essa combinação.");
        setLoading(false);
        return;
      }

      setConfig(await response.json());
    } catch {
      setError("Não foi possível conectar ao servidor.");
    }

    setLoading(false);
  };

  const baixarScript = () => {
    const linguagem = localStorage.getItem("linguagem");
    const versao = localStorage.getItem("versao");
    const so = localStorage.getItem("so");

    window.location.href = `${API_BASE}/script?linguagem=${encodeURIComponent(
      linguagem
    )}&versao=${encodeURIComponent(versao)}&so=${encodeURIComponent(so)}`;
  };

  const copiarComando = () => {
    if (!config?.comandoValidacao) return;
    navigator.clipboard.writeText(config.comandoValidacao);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <PageShell sidebarItems={[{ label: "Início", onClick: () => navigate("/inicio") }]}>
      <div className="wizard-slot">
        <div className="wizard-card result-card">
          <StepProgress steps={WIZARD_STEPS} currentIndex={3} />
          <h2 className="wizard-title">Configuração da máquina</h2>

          {!config && (
            <>
              <button
                type="button"
                className="result-search-button"
                onClick={buscarConfiguracao}
                disabled={loading}
              >
                {loading ? "Buscando..." : "Buscar configuração"}
              </button>
              {error && <p className="result-error">{error}</p>}
            </>
          )}

          {config && (
            <div className="result-details">
              <dl className="result-summary">
                <div>
                  <dt>Linguagem</dt>
                  <dd>{config.linguagem}</dd>
                </div>
                <div>
                  <dt>Versão</dt>
                  <dd>{config.versao}</dd>
                </div>
                <div>
                  <dt>Sistema</dt>
                  <dd>{config.sistemaOperacional}</dd>
                </div>
              </dl>

              <button type="button" className="result-download-button" onClick={baixarScript}>
                <FaDownload /> Baixar e configurar
              </button>

              <div className="result-cmd">
                <span className="result-cmd-label">Comando de validação</span>
                <div className="result-cmd-row">
                  <code>{config.comandoValidacao}</code>
                  <button type="button" className="result-copy-button" onClick={copiarComando}>
                    {copied ? <FaCheck /> : <FaCopy />}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </PageShell>
  );
};

export default SistemaOperacionalCMD;
