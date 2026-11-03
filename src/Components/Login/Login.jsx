import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/inicio");
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-brand">
          <img src={logo} alt="Logo ConfigApp" className="login-logo" />
          <div className="login-app-name">ConfigApp</div>
          <div className="login-slogan">Porque seu tempo vale mais.</div>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <label className="login-field">
            <FaUser className="login-field-icon" />
            <input
              type="text"
              placeholder="Usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>

          <label className="login-field">
            <FaLock className="login-field-icon" />
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <label className="login-remember">
            <input type="checkbox" />
            Lembrar de mim
          </label>

          <button type="submit" disabled={!username || !password}>
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
