import WordsList from "../WordsList/WordsList";
import words from "../../data/words.json";
import st from "./wordsTable.module.scss";

export default function WordsTable() {
  return (
    <div className={st.container}>
      <table className={st.table}>
        <thead className={st.thead}>
          <tr>
            <th>Word</th>
            <th>Translation</th>
            <th>Transcription</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody className={st.tbody}>
          {words.map((word) => (
            <WordsList
              key={word.id}
              id={word.id}
              word={word.word}
              translation={word.translate}
              transcription={word.transcription}
              category={word.tag}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
