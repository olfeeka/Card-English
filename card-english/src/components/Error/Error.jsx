import error from "../../images/error_img.jpg";
import st from "./error.module.scss";

export default function Error() {
  return (
    <div className={st.container}>
      <img src={error} alt="error"></img>
    </div>
  );
}
