import { useEffect, useRef, useState } from "react";
import st from "./card.module.scss";

export default function Card(props) {
  const [showTranslation, setShowTranslation] = useState(false);
  const btnRef = useRef(null);

  const handleClick = () => {
    setShowTranslation(!showTranslation);
    if (!showTranslation) {
      props.onTranslateClick();
    }
  };

  useEffect(() => {
    setShowTranslation(false);
    if (btnRef.current) {
      btnRef.current.focus();
    }
  }, [props.card]);

  return (
    <div className={st.item}>
      <p className={st.word}>{props.card.word}</p>
      <p className={st.transcription}>{props.card.transcription}</p>

      {showTranslation ? (
        <p className={st.translate}>{props.card.translate}</p>
      ) : (
        <button
          type="button"
          className={st.btnTranslate}
          ref={btnRef}
          onClick={handleClick}
        >
          Translate
        </button>
      )}
    </div>
  );
}
