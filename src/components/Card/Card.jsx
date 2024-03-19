import { useEffect, useRef, useState } from "react";
import st from "./card.module.scss";

export default function Card({word, onTranslateClick}) {
  const [showTranslation, setShowTranslation] = useState(false);
  const btnRef = useRef(null);

  const handleClick = () => {
    setShowTranslation(!showTranslation);
    if (!showTranslation && onTranslateClick) {
      onTranslateClick();
    }
  };

  useEffect(() => {
    setShowTranslation(false);
    if (btnRef.current) {
      btnRef.current.focus();
    }
  }, [word]);

  return (
    <div className={st.item}>
      <p className={st.word}>{word.english}</p>
      <p className={st.transcription}>{word.transcription}</p>

      {showTranslation ? (
        <p className={st.translate}>{word.russian}</p>
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
