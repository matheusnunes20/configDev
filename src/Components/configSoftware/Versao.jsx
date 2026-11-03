import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageShell from "../Layout/PageShell";
import WizardStep from "../Wizard/WizardStep";
import { VERSIONS_BY_LANGUAGE, WIZARD_STEPS } from "../../data/wizardOptions";

const Versao = () => {
  const navigate = useNavigate();
  const linguagem = localStorage.getItem("linguagem");

  const versions = useMemo(
    () => VERSIONS_BY_LANGUAGE[linguagem] ?? VERSIONS_BY_LANGUAGE.java,
    [linguagem]
  );
  const options = useMemo(() => versions.map((v) => ({ value: v, label: v })), [versions]);

  const [selected, setSelected] = useState(versions[0]);

  const confirmar = () => {
    localStorage.setItem("versao", selected);
    navigate("/so");
  };

  return (
    <PageShell sidebarItems={[{ label: "Início", onClick: () => navigate("/inicio") }]}>
      <WizardStep
        title={
          <>
            Qual versão
            <br />
            será utilizada?
          </>
        }
        options={options}
        selected={selected}
        onSelect={setSelected}
        onConfirm={confirmar}
        steps={WIZARD_STEPS}
        currentIndex={1}
      />
    </PageShell>
  );
};

export default Versao;
