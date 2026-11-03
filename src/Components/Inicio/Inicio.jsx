import { useNavigate } from "react-router-dom";
import { FaLaptopCode } from "react-icons/fa";
import PageShell from "../Layout/PageShell";
import "./Inicio.css";

const Inicio = () => {
  const navigate = useNavigate();

  return (
    <PageShell
      sidebarItems={[
        { label: "Iniciar configuração", icon: FaLaptopCode, onClick: () => navigate("/linguagem") },
      ]}
    >
      <div className="welcome">
        <span className="welcome-eyebrow">ConfigApp</span>
        <h1>Bem-vindo</h1>
        <p>Vamos configurar seu ambiente de desenvolvimento em poucos passos.</p>
        <button type="button" className="welcome-cta" onClick={() => navigate("/linguagem")}>
          Iniciar configuração
        </button>
      </div>
    </PageShell>
  );
};

export default Inicio;
