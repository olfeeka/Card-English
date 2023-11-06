import { useState } from "react";
import st from "./wordsList.module.scss";

export default function WordsList(props) {
  const { word, translation, transcription, category } = props;
  const [isEdit, setEdit] = useState(false);
  const [isEmpty, setEmpty] = useState(false); // состояние для проверки пустых полей

  const handleClick = () => {
    setEdit((isEdit) => !isEdit);
  };

  const handleChange = (e) => { // функция обработчик изменения содержимого input полей
    if (e.target.value === "") {
      setEmpty(true);
    } else {
      setEmpty(false);
    }
  };

  const lineClass = isEdit ? st.lineEdit : st.lineNotEdit;
  const saveButtonClass = isEmpty ? st.btnSaveDisabled : st.btnSave;
  const inputClass = isEmpty ? `${st.inputBox} ${st.error}` : st.inputBox;

  return (
    <>
      <tr className={lineClass}>
        <td className={inputClass}>
          <input
            type="text"
            defaultValue={word}
            disabled={!isEdit}
            onChange={handleChange}
          />
        </td>
        <td className={inputClass}>
          <input
            type="text"
            defaultValue={translation}
            disabled={!isEdit}
            onChange={handleChange}
          />
        </td>
        <td className={inputClass}>
          <input
            type="text"
            defaultValue={transcription}
            disabled={!isEdit}
            onChange={handleChange}
          />
        </td>
        <td className={inputClass}>
          <input
            type="text"
            defaultValue={category}
            disabled={!isEdit}
            onChange={handleChange}
          />
        </td>
        <td className={st.inputBox}>
          <button
            className={isEdit ? saveButtonClass : st.btnEdit}
            onClick={handleClick}
            disabled={isEmpty}
          >
            {isEdit ? "Save" : "Edit"}
          </button>
          <button
            className={isEdit ? st.btnCancel : st.btnDelete}
            onClick={handleClick}
          >
            {isEdit ? "Cancel" : "Delete"}
          </button>
        </td>
      </tr>
    </>
  );
}
