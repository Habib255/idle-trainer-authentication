import './App.css';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/Home/About/About';
import Services from './Pages/Home/Services/Services';
import Login from './Pages/Home/Login/Login';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </div>
  );
}

export default App;
