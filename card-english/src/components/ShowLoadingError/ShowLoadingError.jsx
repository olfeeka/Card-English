import { observer, inject } from "mobx-react";
import Loading from "../Loading/Loading";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

const ShowLoadingError = ({ wordsStore, children }) => {
  if (wordsStore.isLoaded) {
    return <Loading />;
  }
  if (wordsStore.error) {
    return <NotFoundPage />;
  }
  return <>{children}</>;
};

export default inject(["wordsStore"])(observer(ShowLoadingError));
