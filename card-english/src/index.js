import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './components/App/App';
import './fonts/nunito-v26-cyrillic_latin-regular.woff2';
import WordContextProvider from './context/WordsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WordContextProvider>
      <App />
    </WordContextProvider>
  </React.StrictMode>
);
