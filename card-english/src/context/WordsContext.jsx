import React, { useEffect, useState } from "react";
import NotFoundPage from "../components/NotFoundPage/NotFoundPage";
import Loading from "../components/Loading/Loading";
export const WordsContext = React.createContext();

export default function WordsContextProvider(props) {
  const [dataWords, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDataWords = async () => {
    //функция получения слов с сервера
    setLoading(true);
    await fetch("https://itgirlschool.justmakeit.ru/api/words")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong...");
        }
      })
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.log("error", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchDataWords();
  }, []); //выполняется один раз при рендере

  const editWords = async (word) => {
    await fetch(
      `https://itgirlschool.justmakeit.ru/api/words/${word.id}/update`,
      {
        method: "POST",
        body: JSON.stringify(word),
      }
    )
      .then(() => {
        fetchDataWords();
      })
      .catch((err) => setError(err));
  };

  const deleteWords = async (word) => {
    setLoading(true);
    await fetch(
      `https://itgirlschool.justmakeit.ru/api/words/${word.id}/delete`,
      {
        method: "POST",
      }
    )
      .then(() => {
        fetchDataWords();
      })
      .catch((err) => setError(err));
  };

  if (error) return <NotFoundPage />;
  if (loading) return <Loading />;

  return (
    <WordsContext.Provider value={{ dataWords, editWords, deleteWords }}>
      {props.children}
    </WordsContext.Provider>
  );
}
