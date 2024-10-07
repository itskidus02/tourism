import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router components
import About from './pages/About';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />  {/* Define Home route */}
        <Route path="/about" element={<About />} />  {/* Define About route */}
      </Routes>
    </Router>
  );
}

export default App;
