import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Drinks from './components/menu/Drinks';
import Foods from './components/menu/Foods';
import Espresso from './components/menu/Espresso';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/drinks" element={<Drinks /> } />
          <Route path="/foods" element={<Foods />} />
          <Route path='/espresso' element={<Espresso />} />
        </Routes>
          <Navbar />
          <Main />
          <Footer />
      </div>
    </Router>
  );
}

export default App;
