import React, { useState, useContext } from "react";
import { WordsContext } from "../../context/WordsContext";
import st from "./wordsTable.module.scss";

export default function WordsTable({id, english, russian, transcription, tags }) {
  const { deleteWords, editWords } = useContext(WordsContext);
  const [stEdit, setStEdit] = useState(false);
  const [stEnglish, setStEnglish] = useState(english);
  const [stRussian, setStRussian] = useState(russian);
  const [stTranscription, setStTranscription] = useState(transcription);
  const [stTags, setStTags] = useState(tags);
  const [stEmpty, setStEmpty] = useState(false);

  const handleClick = () =>{
    if(stEnglish === "" || stRussian === "" || stTranscription === "" || stTags === "") {
      setStEmpty(true);
    } else {
      setStEmpty(false);
      setStEdit(stEdit => !stEdit);
    }
}

const handleSave = () => {
  const updatedWord = {
    id: id,
    english: stEnglish,
    russian: stRussian,
    transcription: stTranscription,
    tags: stTags
  };
  editWords(updatedWord);
  setStEdit(false);
}

const handleCancel = () => {
  setStEdit(false);
  setStEnglish(english);
  setStRussian(russian);
  setStTranscription(transcription);
  setStTags(tags);
}

  const btnSaveDisabled = stEmpty ? st.btnSaveDisabled : st.btnSave;

  const handleChange = (e, field) => {
    switch(field){
      case 'english':
        setStEnglish(e.target.value);
        break;
      case 'russian':
        setStRussian(e.target.value);
        break;
      case 'transcription':
        setStTranscription(e.target.value);
        break;
      case 'tags':
        setStTags(e.target.value);
        break;
    }
    if (e.target.value === "") {
      setStEmpty(true);
    } else {
      setStEmpty(false);
    }
  }

  return (
    <div className={st.wrapp}>
      {!stEdit &&
      <div className={st.listNotEdit}>
      <div className={st.item}>{english}</div>
      <div className={st.item}>{russian}</div>
      <div className={st.item}>{transcription}</div>
      <div className={st.item}>{tags}</div>
      <div className={st.btn}>
        <button className={st.btnEdit} onClick={handleClick}>Edit</button>
        <button className={st.btnDelete}>Delete</button>
      </div>
      </div>
      }
      {stEdit && 
      <div className={st.listEdit}>
        <input type="text" className={stEnglish ? '' : st.empty} value={stEnglish} onChange={(e) => handleChange(e, 'english')} />
        <input type="text" className={stRussian ? '' : st.empty} value={stRussian} onChange={(e) => handleChange(e, 'russian')} />
        <input type="text" className={stTranscription ? '' : st.empty} value={stTranscription} onChange={(e) => handleChange(e, 'transcription')} />
        <input type="text" className={stTags ? '' : st.empty} value={stTags} onChange={(e) => handleChange(e, 'tags')} />
        <div className={st.btn}>
          <button className={btnSaveDisabled} onClick={handleSave}>Save</button>
          <button className={st.btnCancel} onClick={handleCancel}>Cancel</button>
        </div>
      </div>
      }
    </div>
  )
}