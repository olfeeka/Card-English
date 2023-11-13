import React, { useState, useContext } from "react";
import { WordsContext } from "../../context/WordsContext";
import Card from "../Card/Card";
import arrowPrev from "../../images/card_arrow_prev.png";
import arrowNext from "../../images/card_arrow_next.png";
import st from "./cardsList.module.scss";

export default function CardsList() {
  const {dataWords} = useContext(WordsContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [learnedWords, setLearnedWords] = useState(0);

  const handleNext = () => {
    currentIndex === dataWords.length - 1
      ? setCurrentIndex(0)
      : setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrev = () => {
    currentIndex === 0
      ? setCurrentIndex(dataWords.length - 1)
      : setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const handleTranslateClick = () => {
    setLearnedWords((prevCount) => prevCount + 1);
  }

  return (
    <>
    <div className={st.progress}>Words learned: {learnedWords} / {dataWords.length}</div>
    <div className={st.wrapper}>
      <button onClick={handlePrev}>
        <img src={arrowPrev} alt="" />
      </button>
      {dataWords[currentIndex] && <Card word={dataWords[currentIndex]}
      onTranslateClick = {handleTranslateClick} />}
      <button onClick={handleNext}>
        <img src={arrowNext} alt="" />
      </button>
    </div>
    </>
  );
}

