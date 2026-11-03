import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageShell from "../Layout/PageShell";
import WizardStep from "../Wizard/WizardStep";
import { OPERATING_SYSTEMS, WIZARD_STEPS } from "../../data/wizardOptions";

const SistemaOperacional = () => {
  const [selected, setSelected] = useState("Windows");
  const navigate = useNavigate();

  const confirmar = () => {
    localStorage.setItem("so", selected);
    navigate("/configuracao-final");
  };

  return (
    <PageShell sidebarItems={[{ label: "Início", onClick: () => navigate("/inicio") }]}>
      <WizardStep
        title={
          <>
            Qual sistema operacional
            <br />
            será utilizado?
          </>
        }
        options={OPERATING_SYSTEMS}
        selected={selected}
        onSelect={setSelected}
        onConfirm={confirmar}
        steps={WIZARD_STEPS}
        currentIndex={2}
      />
    </PageShell>
  );
};

export default SistemaOperacional;
