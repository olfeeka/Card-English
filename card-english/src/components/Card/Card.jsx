import { useEffect, useState } from "react";
import st from "./card.module.scss";

export default function Card(props) {
  const [showTranslation, setShowTranslation] = useState(false);

  const handleClick = () => {
    setShowTranslation(!showTranslation);
  };

  useEffect(() => {
    setShowTranslation(false);
  }, [props.card]);

  return (
    <>
      <div className={st.item}>
        <p className={st.word}>{props.card.word}</p>
        <p className={st.transcription}>{props.card.transcription}</p>

        {showTranslation ? (
          <p className={st.translate}>{props.card.translate}</p>
        ) : (
          <button type="button" onClick={handleClick}>
            Show
          </button>
        )}
      </div>
    </>
  );
}
