import perfil from "../../assets/avatar.jpg";
import "./AppHeader.css";

const AppHeader = () => (
  <div className="app-header">
    <span className="app-header-name">Mateus Nunes</span>
    <img src={perfil} alt="Foto de perfil" className="app-header-avatar" />
  </div>
);

export default AppHeader;
