import img from "../../images/main_img.jpg";
import st from "./home.module.scss";

export default function Main() {
  return (
    <main className={st.main}>
      <p className={st.desc}>Discover the magic of learning with cards</p>
      <img src={img} alt="" />
    </main>
  );
}
