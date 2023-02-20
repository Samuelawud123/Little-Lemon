import { Routes, Route } from 'react-router-dom';
import Home from '../home/home';
import About from '../about/about';
import Menu from '../menu/menu'

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </main>
  );
}

export default Main;