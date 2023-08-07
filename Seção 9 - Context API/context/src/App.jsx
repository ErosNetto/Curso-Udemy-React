import { BrowserRouter, Routes, Route } from 'react-router-dom';

// CSS
import './App.css';

// Components
import NavBar from './components/NavBar';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';

function App() {
  return (
    <div>
      <h1>Context API</h1>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
