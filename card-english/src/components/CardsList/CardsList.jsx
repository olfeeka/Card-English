import { useState } from "react";
import Card from "../Card/Card";
import arrowPrev from "../../images/card_arrow_prev.png";
import arrowNext from "../../images/card_arrow_next.png";
import st from "./cardsList.module.scss";

export default function CardsList(props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    currentIndex === props.arr.length - 1
      ? setCurrentIndex(0)
      : setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrev = () => {
    currentIndex === 0
      ? setCurrentIndex(props.arr.length - 1)
      : setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  return (
    <div className={st.container}>
      <button onClick={handlePrev}>
        <img src={arrowPrev} alt="" />
      </button>
      {props.arr[currentIndex] && <Card card={props.arr[currentIndex]} />}
      <button onClick={handleNext}>
        <img src={arrowNext} alt="" />
      </button>
    </div>
  );
}
