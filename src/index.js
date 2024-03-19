import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './components/App/App';
import './fonts/nunito-v26-cyrillic_latin-regular.woff2';
import { Provider } from 'mobx-react';
import WordsStore from './stores/WordsStore';

const store = {
  wordsStore: new WordsStore()
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider {...store}>
      <App />
    </Provider>
  </React.StrictMode>
);
