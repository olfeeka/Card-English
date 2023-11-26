import st from "./loading.module.scss";

export default function Loading() {
  return (
    <div className={st.wrap}>
      <div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div>Loading...</div>
    </div>
  );
}
