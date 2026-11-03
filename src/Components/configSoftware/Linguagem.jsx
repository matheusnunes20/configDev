import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageShell from "../Layout/PageShell";
import WizardStep from "../Wizard/WizardStep";
import { LANGUAGES, WIZARD_STEPS } from "../../data/wizardOptions";

const Linguagem = () => {
  const [selected, setSelected] = useState("java");
  const navigate = useNavigate();

  const confirmar = () => {
    localStorage.setItem("linguagem", selected);
    navigate("/versao");
  };

  return (
    <PageShell sidebarItems={[{ label: "Início", onClick: () => navigate("/inicio") }]}>
      <WizardStep
        title={
          <>
            Qual linguagem
            <br />
            será utilizada?
          </>
        }
        options={LANGUAGES}
        selected={selected}
        onSelect={setSelected}
        onConfirm={confirmar}
        steps={WIZARD_STEPS}
        currentIndex={0}
      />
    </PageShell>
  );
};

export default Linguagem;
