import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './assets/components/layout/Navbar';
import Footer from './assets/components/layout/Footer';
import AppRoutes from './assets/routes/AppRoutes';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
