import { BrowserRouter as Router, Routes, Route, NavLink} from "react-router-dom";
import Header from '../Header/Header';
import Home from "../Home/Home";
import Footer from "../Footer/Footer";
import CardsList from "../CardsList/CardsList";
import WordsList from "../WordsList/WordsList";
import Error from "../Error/Error";
import words from "../../data/words.json";
import "../../styles/App.scss";

function App() {
  return (
    <div className="App">
      <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/study" element={<CardsList arr={words} />} />
        <Route path="/dictionary" element={<WordsList />} />
        <Route path="*" element={<Error />} />
      </Routes>
      
      <Footer />
      </Router> 
    </div>
  );
}

export default App;
