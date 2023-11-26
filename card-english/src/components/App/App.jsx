import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import { observer, inject } from "mobx-react";

import Header from '../Header/Header';
import Home from "../Home/Home";
import Footer from "../Footer/Footer";
import CardsList from "../CardsList/CardsList";
import WordsTable from "../WordsTable/WordsTable";
import AddWord from "../AddWord/AddWord";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import ShowLoadingError from "../ShowLoadingError/ShowLoadingError";

import "../App/app.scss";
import st from "../WordsTable/wordsTable.module.scss";

function App({wordsStore}) {
  
  useEffect(() => {
    console.log('Обратились к API');
    wordsStore.fetchDataWords()
  }, [])

  return (
    <div className="app">
      <Router>
      <Header />
      <ShowLoadingError>
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
        <AddWord />
        {wordsStore.dataWords.map((item) =>(
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
      </ShowLoadingError>
      <Footer />
      </Router> 
    </div>
  );
}

export default inject(['wordsStore'])(observer(App));
