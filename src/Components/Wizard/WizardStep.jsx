import PropTypes from "prop-types";
import { FaCheck } from "react-icons/fa";
import StepProgress from "./StepProgress";
import "./WizardStep.css";

const WizardStep = ({ title, options, selected, onSelect, onConfirm, steps, currentIndex }) => (
  <div className="wizard-slot">
    <div className="wizard-card">
      <StepProgress steps={steps} currentIndex={currentIndex} />
      <h2 className="wizard-title">{title}</h2>

      <div className="wizard-options" role="radiogroup">
        {options.map(({ value, label, Icon }) => (
          <button
            type="button"
            key={value}
            role="radio"
            aria-checked={selected === value}
            className={`wizard-option${selected === value ? " is-selected" : ""}`}
            onClick={() => onSelect(value)}
          >
            {Icon ? <Icon className="wizard-option-icon" /> : null}
            <span>{label}</span>
          </button>
        ))}
      </div>

      <button type="button" className="wizard-confirm" onClick={onConfirm} disabled={!selected}>
        Continuar <FaCheck />
      </button>
    </div>
  </div>
);

WizardStep.propTypes = {
  title: PropTypes.node.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      Icon: PropTypes.elementType,
    })
  ).isRequired,
  selected: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentIndex: PropTypes.number.isRequired,
};

export default WizardStep;
