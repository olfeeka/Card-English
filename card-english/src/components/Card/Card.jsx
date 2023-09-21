import st from "./card.module.scss";
import arrowPrev from "../../images/card_arrow_prev.png";
import arrowNext from "../../images/card_arrow_next.png";
import words from "../../data/words.json";
import { useState } from "react";

export default function Card() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);

  const handlePrev = () => {
    setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : words.length - 1);
    setShowTranslation(false);
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex < words.length - 1 ? currentIndex + 1 : 0);
    setShowTranslation(false);
  };

  const handleClick = () => {
    setShowTranslation(!showTranslation);
  };

  return (
    <div className={st.card}>
      <button onClick={handlePrev}>
        <img src={arrowPrev} alt="" />
      </button>

      <div className={st.item}>
        <p className={st.word}>{words[currentIndex].word}</p>
        <p className={st.transcription}>{words[currentIndex].transcription}</p>

        {showTranslation ? (
          <p className={st.translate}>{words[currentIndex].translate}</p>
        ) : (
          <button type="button" onClick={handleClick}>Show</button>
        )}
      </div>

      <button onClick={handleNext}>
        <img src={arrowNext} alt="" />
      </button>
    </div>
  );
}
