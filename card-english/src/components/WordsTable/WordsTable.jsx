import React, { useState } from "react";
import { observer, inject } from "mobx-react";
import st from "./wordsTable.module.scss";

const WordsTable = ({ wordsStore, ...props }) => {

  const [stEdit, setStEdit] = useState(false);
  const [stSave, setStSave] = useState(true);

  const editString = () => {
    setStEdit(!stEdit);
    setStSave(!stSave);
  }

  const [stWord, setStWord] = useState(props); // состояние слова
  const [stEnglish, setStEnglish] = useState(false);
  const [stRussian, setStRussian] = useState(false);
  const [stTranscription, setStTranscription] = useState(false);
  const [stTags, setStTags] = useState(false);

  const saveString = () => {
    wordsStore.editWord(stWord);
    setStSave(!stSave);
    setStEdit(!stEdit);
    console.log({...stWord});
  }

  const engFormat = /^[a-zA-Z]+$/;
  const rusFormat = /([а-я]+)/ui;

  const handleChange = (event) => {
    setStWord({
      ...stWord,
      [event.target.dataset.name] : event.target.value, // переписывается свойство
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

  const handleCancel = () => {
    setStWord(props);
    setStEdit(!stEdit);
    setStSave(!stSave);
    setStEnglish(false);
    setStRussian(false);
    setStTranscription(false);
    setStTags(false);
  }

  const handleDelete = (event) => {
    event.preventDefault();
    console.log(stWord);
    wordsStore.deleteWord(stWord);
  }

  return (
    <>
    <div className={st.wrapp}>
    <div className={st.data}>
      {stEdit && <input type="text" className={stEnglish ? st.empty : ''} data-name={'english'} value={stWord.english} onChange={handleChange}/>}
      {stSave && stWord.english}
    </div>
    <div className={st.data}>
      {stEdit && <input type="text" className={stRussian ? st.empty : ''} data-name={'russian'} value={stWord.russian} onChange={handleChange}/>}
      {stSave && stWord.russian}
    </div>
    <div className={st.data}>
      {stEdit && <input type="text" className={stTranscription ? st.empty : ''} data-name={'transcription'} value={stWord.transcription} onChange={handleChange}/>}
      {stSave && stWord.transcription}
    </div>
    <div className={st.data}>
      {stEdit && <input type="text" className={stTags ? st.empty : ''} data-name={'tags'} value={stWord.tags} onChange={handleChange}/>}
      {stSave && stWord.tags}
    </div>
    <div>
      {stEdit 
      ?
      <button className={st.btnSave} disabled={stEnglish || stRussian || stTranscription || stTags} onClick={saveString}>Save</button> 
      : 
      <button className={st.btnEdit} onClick={editString}>Edit</button>
      }
      {stEdit 
      ? 
      <button className={st.btnCancel} onClick={handleCancel}>Cancel</button> 
      : 
      <button className={st.btnDelete} onClick={handleDelete}>Delete</button>
      }
    </div>
    </div>
    </>
  )
}

export default inject(['wordsStore'])(observer(WordsTable)); 