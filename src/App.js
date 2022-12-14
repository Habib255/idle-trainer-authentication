import './App.css';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/Home/About/About';
import Login from './Pages/Home/Login/Login';
import Register from './Pages/Home/Register/Register';
import Footer from './Pages/Shared/Footer/Footer';
import Blogs from './Pages/Home/Blogs/Blogs';
import Checkout from './Pages/Home/Checkout/Checkout';
import RequireAuth from './Pages/Home/RequireAuth/RequireAuth';
import NotFound from './Pages/Home/NotFound/NotFound';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<RequireAuth>
          <Checkout />
        </RequireAuth>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
