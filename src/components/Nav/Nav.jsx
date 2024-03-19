import { NavLink } from "react-router-dom";
import st from "./nav.module.scss";

export default function Nav({ activeLink, handleClick }) {
  return (
    <nav>
      <NavLink
        to="/"
        className={activeLink === "home" ? `${st.item} ${st.active}` : st.item}
        onClick={() => handleClick("home")}
      >
        Home
      </NavLink>
      <NavLink
        to="/study"
        className={activeLink === "study" ? `${st.item} ${st.active}` : st.item}
        onClick={() => handleClick("study")}
      >
        Study
      </NavLink>
      <NavLink
        to="/dictionary"
        className={
          activeLink === "dictionary" ? `${st.item} ${st.active}` : st.item
        }
        onClick={() => handleClick("dictionary")}
      >
        Dictionary
      </NavLink>
    </nav>
  );
}
