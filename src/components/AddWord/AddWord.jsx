import React, { useState } from "react";
import { observer, inject } from "mobx-react";
import st from "../WordsTable/wordsTable.module.scss";

const AddWord = ({ wordsStore }) => {
  const [newWord, setNewWord] = useState({});
  const [stEnglish, setStEnglish] = useState(false);
  const [stRussian, setStRussian] = useState(false);
  const [stTranscription, setStTranscription] = useState(false);
  const [stTags, setStTags] = useState(false);

  const engFormat = /^[a-zA-Z]+$/;
  const rusFormat = /([а-я]+)/ui;

  const handleChange = (event) => {
    setNewWord({
      ...newWord,
      [event.target.dataset.name] : event.target.value,
    });
    
    let newValue = event.target.value;
    if(newValue === '') {
      switch(event.target.dataset.name) {
        case 'english':
        setStEnglish(true);
        break;
      case 'russian':
        setStRussian(true);
        break;
      case 'transcription':
        setStTranscription(true);
        break;
      case 'tags':
        setStTags(true);
        break;
      }
    } else if(newValue !== '') {
      switch(event.target.dataset.name) {
        case 'english':
          const english = engFormat.test(newValue);
          english ? setStEnglish(false) : setStEnglish(true);
          break;
          case 'russian':
          const russian = rusFormat.test(newValue);
          russian ? setStRussian(false) : setStRussian(true);
          break;
          case 'transcription':
            setStTranscription(false);
            break;
          case 'tags':
            setStTags(false);
            break;
      }
    }
  }

  const handleAdd = (event) => {
    event.preventDefault();
    wordsStore.addWord(newWord);
    console.log('Добавлено слово', newWord);
  }

  return (
    <>
    <div className={st.wrapp}>
    <div className={st.data}>
      <input type="text" className={stEnglish ? st.empty : ''} data-name={'english'} onChange={handleChange}/>
    </div>
    <div className={st.data}>
      <input type="text" className={stRussian ? st.empty : ''} data-name={'russian'} onChange={handleChange}/>
    </div>
    <div className={st.data}>
      <input type="text" className={stTranscription ? st.empty : ''} data-name={'transcription'} onChange={handleChange}/>
    </div>
    <div className={st.data}>
      <input type="text" className={stTags ? st.empty : ''} data-name={'tags'} onChange={handleChange}/>
    </div>
    <div>
      <button className={st.btnAdd} disabled={stEnglish || stRussian || stTranscription || stTags} onClick={handleAdd}>Add</button> 
    </div>
    </div>
    </>
  )
}

export default inject(['wordsStore'])(observer(AddWord));
