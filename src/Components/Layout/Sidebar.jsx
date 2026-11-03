import PropTypes from "prop-types";
import "./Sidebar.css";

const Sidebar = ({ items, open }) => {
  if (!open) return null;

  return (
    <nav className="app-sidebar" aria-label="Navegação principal">
      <div className="app-sidebar-brand">ConfigApp</div>
      <ul className="app-sidebar-list">
        {items.map((item) => (
          <li key={item.label}>
            <button
              type="button"
              className={`app-sidebar-link${item.active ? " is-active" : ""}`}
              onClick={item.onClick}
            >
              {item.icon ? <item.icon className="app-sidebar-icon" /> : null}
              <span>{item.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Sidebar.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      icon: PropTypes.elementType,
      onClick: PropTypes.func,
      active: PropTypes.bool,
    })
  ).isRequired,
  open: PropTypes.bool.isRequired,
};

export default Sidebar;
