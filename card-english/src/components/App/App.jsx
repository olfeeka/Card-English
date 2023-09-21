import "../../styles/App.scss";
import Header from '../Header/Header';
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Card from "../Card/Card";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
