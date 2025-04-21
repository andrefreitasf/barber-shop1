import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Bookings from './pages/Bookings';
import Prices from './pages/Prices';
import Products from './pages/Products';
import Cuts from './pages/Cuts';
import About from './pages/About';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/marcacoes" element={<Bookings />} />
            <Route path="/precos" element={<Prices />} />
            <Route path="/produtos" element={<Products />} />
            <Route path="/cortes" element={<Cuts />} />
            <Route path="/sobre" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 