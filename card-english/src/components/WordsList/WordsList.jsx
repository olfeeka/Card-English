import { useState } from "react";
import st from "./wordsList.module.scss";

export default function WordsList(props) {
  const { word, translation, transcription, category, id } = props;
  const [isEdit, setEdit] = useState(false);

  const handleClick = () => {
    setEdit((isEdit) => !isEdit);
  };

  return (
    <>
      {isEdit && (
        <tr className={st.lineEdit}>
          <td className={st.edit}>
            <input type="text" defaultValue={word} />
          </td>
          <td className={st.edit}>
            <input type="text" defaultValue={translation} />
          </td>
          <td className={st.edit}>
            <input type="text" defaultValue={transcription} />
          </td>
          <td className={st.edit}>
            <input type="text" defaultValue={category} />
          </td>
          <td className={st.edit}>
            <button className={st.btnSave} onClick={handleClick}>
              Save
            </button>
            <button className={st.btnCancel} onClick={handleClick}>
              Cancel
            </button>
          </td>
        </tr>
      )}
      {!isEdit && (
        <tr className={st.lineNotEdit}>
          <td className={st.notEdit}>
            <input type="text" value={word} />
          </td>
          <td className={st.notEdit}>
            <input type="text" value={translation} />
          </td>
          <td className={st.notEdit}>
            <input type="text" value={transcription} />
          </td>
          <td className={st.notEdit}>
            <input type="text" value={category} />
          </td>
          <td className={st.notEdit}>
            <button className={st.btnEdit} onClick={handleClick}>
              Edit
            </button>
            <button className={st.btnDelete}>Delete</button>
          </td>
        </tr>
      )}
    </>
  );
}
