import error from "../../images/error_img.jpg";
import st from "./notFoundPage.module.scss";

export default function NotFoundPage() {
  return (
    <div className={st.container}>
      <img src={error} alt="error"></img>
    </div>
  );
}
