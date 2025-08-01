import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Departments from '../pages/Departments';
import Events from '../pages/Events';
import Gallery from '../pages/Gallery';
import Sermons from '../pages/Sermons';
import Donate from '../pages/Donate';
import NotFound from '../pages/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/departments" element={<Departments />} />
      <Route path="/events" element={<Events />} />
      <Route path="/sermons" element={<Sermons />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;