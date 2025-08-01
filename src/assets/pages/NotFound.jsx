import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-church-beige-light flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-church-blue mb-4">404</h1>
        <h2 className="text-2xl font-bold text-church-text-dark mb-4">Page Not Found</h2>
        <p className="text-church-text-dark opacity-80 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/" 
          className="bg-church-blue hover:bg-church-gold text-church-text-light hover:text-church-text-dark px-6 py-3 rounded-lg font-semibold transition-all duration-300"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;