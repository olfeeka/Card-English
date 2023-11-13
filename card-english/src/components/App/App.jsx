import { BrowserRouter as Router, Routes, Route, NavLink} from "react-router-dom";
import React, { useContext } from "react";
import { WordsContext } from "../../context/WordsContext";

import Header from '../Header/Header';
import Home from "../Home/Home";
import Footer from "../Footer/Footer";
import CardsList from "../CardsList/CardsList";
import WordsTable from "../WordsTable/WordsTable";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

import "../../styles/app.scss";
import st from "../WordsTable/wordsTable.module.scss";

function App() {
  const {dataWords} = useContext(WordsContext);

  return (
    <div className="app">
      <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/study" element={<CardsList />} />
        <Route path="/dictionary" element={
        <div className={st.container}>
          <div className={st.header}>
            <div className={st.header__item}>Word</div>
            <div className={st.header__item}>Translation</div>
            <div className={st.header__item}>Transcription</div>
            <div className={st.header__item}>Category</div>
          </div>
          {dataWords.map((item) =>(
          <WordsTable 
          key={item.id} 
          id={item.id} 
          english={item.english} 
          transcription={item.transcription} 
          russian={item.russian} 
          tags={item.tags} 
          />
          ))
          }
        </div>
        } />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      
      <Footer />
      </Router> 
    </div>
  );
}

export default App;
