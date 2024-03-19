import React, { useState, useContext } from "react";
import { inject, observer } from "mobx-react";
import Card from "../Card/Card";
import arrowPrev from "../../images/card_arrow_prev.png";
import arrowNext from "../../images/card_arrow_next.png";
import st from "./cardsList.module.scss";

function CardsList({wordsStore}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [learnedWords, setLearnedWords] = useState(0);

  const handleNext = () => {
    currentIndex === wordsStore.dataWords.length - 1
      ? setCurrentIndex(0)
      : setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrev = () => {
    currentIndex === 0
      ? setCurrentIndex(wordsStore.dataWords.length - 1)
      : setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const handleTranslateClick = () => {
    setLearnedWords((prevCount) => prevCount + 1);
  }

  return (
    <>
    <div className={st.progress}>Words learned: {learnedWords} / {wordsStore.dataWords.length}</div>
    <div className={st.wrapper}>
      <button onClick={handlePrev}>
        <img src={arrowPrev} alt="" />
      </button>
      {wordsStore.dataWords[currentIndex] && <Card word={wordsStore.dataWords[currentIndex]}
      onTranslateClick = {handleTranslateClick} />}
      <button onClick={handleNext}>
        <img src={arrowNext} alt="" />
      </button>
    </div>
    </>
  );
}

export default inject(['wordsStore'])(observer(CardsList));