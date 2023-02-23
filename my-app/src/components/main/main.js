import { Routes, Route } from 'react-router-dom';
import Home from '../home/home';
import About from '../about/about';
import Menu from '../menu/menu'
import BookingPage from '../bookingpage/bookingpage';
import Confirmation from '../confirmation/confirmation'

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservation" element={<BookingPage />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </main>
  );
}

export default Main;