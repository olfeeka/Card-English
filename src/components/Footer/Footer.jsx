import logo from "../../images/footer_logo.png";
import st from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={st.footer}>
      <img src={logo} alt="logo" />
      <span className={st.text}>&copy; All rights reserved</span>
    </footer>
  );
}
