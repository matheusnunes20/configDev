import PropTypes from "prop-types";
import "./StepProgress.css";

const StepProgress = ({ steps, currentIndex }) => (
  <ol className="step-progress" aria-label="Progresso da configuração">
    {steps.map((label, index) => {
      const state = index < currentIndex ? "done" : index === currentIndex ? "current" : "upcoming";
      return (
        <li key={label} className={`step-progress-item is-${state}`}>
          <span className="step-progress-dot" aria-hidden="true" />
          <span className="step-progress-label">{label}</span>
        </li>
      );
    })}
  </ol>
);

StepProgress.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentIndex: PropTypes.number.isRequired,
};

export default StepProgress;
