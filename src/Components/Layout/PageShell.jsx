import { useState } from "react";
import PropTypes from "prop-types";
import { FaBars } from "react-icons/fa";
import AppHeader from "./AppHeader";
import Sidebar from "./Sidebar";
import "./PageShell.css";

const PageShell = ({ sidebarItems, children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="page-shell">
      <Sidebar items={sidebarItems} open={sidebarOpen} />
      <div className="page-shell-main">
        <div className="page-shell-topbar">
          <button
            type="button"
            className="page-shell-menu-toggle"
            onClick={() => setSidebarOpen((isOpen) => !isOpen)}
            aria-label="Alternar menu"
          >
            <FaBars />
          </button>
          <AppHeader />
        </div>
        <div className="page-shell-content">{children}</div>
      </div>
    </div>
  );
};

PageShell.propTypes = {
  sidebarItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      icon: PropTypes.elementType,
      onClick: PropTypes.func,
      active: PropTypes.bool,
    })
  ).isRequired,
  children: PropTypes.node.isRequired,
};

export default PageShell;
