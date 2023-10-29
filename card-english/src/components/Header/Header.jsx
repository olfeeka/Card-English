import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../../images/header_logo.png";
import st from "./header.module.scss";
import Nav from "../Nav/Nav";

export default function Header() {
  const [activeLink, setActiveLink] = useState("home");

  const handleClick = (item) => {
    setActiveLink(item);
  };

  return (
    <header className={st.header}>
      <div className={st.logo}>
        <NavLink to="/" onClick={() => handleClick("home")}>
          <img src={logo} alt="logo" />
        </NavLink>
        <NavLink to="/" onClick={() => handleClick("home")}>
          <p className={st.title}>Card English</p>
        </NavLink>
      </div>
      <Nav activeLink={activeLink} handleClick={handleClick} />
    </header>
  );
}
