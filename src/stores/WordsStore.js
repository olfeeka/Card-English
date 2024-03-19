import { makeAutoObservable, runInAction } from "mobx";

export default class WordsStore {
  dataWords = [];
  isLoaded = false;
  error = null;

  constructor() {
    makeAutoObservable(this);
  }

  fetchDataWords = async () => {
    if (this.isLoaded) {
      return;
    }
    this.isLoaded = true;
    const data = await fetch(
      "https://itgirlschool.justmakeit.ru/api/words"
    ).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Something went wrong...");
      }
    });
    runInAction(() => {
      this.dataWords = data;
      this.isLoaded = false;
    });
  };

  editWord = async (word) => {
    await fetch(
      `https://itgirlschool.justmakeit.ru/api/words/${word.id}/update`,
      {
        method: "POST",
        body: JSON.stringify(word),
      }
    ).then((response) => {
      if (response.ok) {
        this.fetchDataWords();
      } else {
        throw new Error("Something went wrong...");
      }
    });
  };

  deleteWord = async (word) => {
    this.isLoaded = true;
    await fetch(
      `https://itgirlschool.justmakeit.ru/api/words/${word.id}/delete`,
      {
        method: "POST",
      }
    )
      .then(() => {
        this.fetchDataWords();
      })
      .catch((err) => (this.error = err))
      .finally((this.isLoaded = false));
  };

  addWord = async (word) => {
    this.isLoaded = true;
    await fetch(`https://itgirlschool.justmakeit.ru/api/words/add`, {
      method: "POST",
      body: JSON.stringify(word),
    })
      .then(() => {
        this.fetchDataWords();
      })
      .catch((err) => (this.error = err))
      .finally((this.isLoaded = false));
  };

  clearError() {
    this.error = null;
  }
}
