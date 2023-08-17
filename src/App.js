import './App.css';
import Main from './components/layout/Main/Main.js';
import Header from './components/layout/Header/Header.js';
import Footer from './components/layout/Footer/Footer.js';
import PokemonProvider from './context/PokemonContext';

function App() {
  return (
    <div className="App">
      <PokemonProvider>
        <Header />
        <Main />
        <Footer />
      </PokemonProvider>
    </div>
  );
}

export default App;
