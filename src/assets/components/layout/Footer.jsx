import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-church-blue text-church-text-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - About Us */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/logos/Church logo white.png" 
                alt="Chiraa SDA Church Logo" 
                className="h-10 w-10 rounded-full"
              />
              <div>
                <h3 className="text-lg font-bold font-title">Chiraa SDA District</h3>
                <p className="text-xs opacity-90 font-body">Seventh-day Adventist Church</p>
              </div>
            </div>
            <h4 className="text-lg font-semibold font-subtitle mb-3">About Us</h4>
            <ul className="space-y-2 text-sm font-body">
              <li><Link to="/about" className="opacity-80 hover:opacity-100 hover:text-church-gold transition-colors">Who We Are</Link></li>
              <li><Link to="/about#mission" className="opacity-80 hover:opacity-100 hover:text-church-gold transition-colors">Mission & Beliefs</Link></li>
              <li><Link to="/about#history" className="opacity-80 hover:opacity-100 hover:text-church-gold transition-colors">Church History</Link></li>
            </ul>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-lg font-semibold font-subtitle mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm font-body">
              <li><Link to="/" className="opacity-80 hover:opacity-100 hover:text-church-gold transition-colors">Home</Link></li>
              <li><Link to="/events" className="opacity-80 hover:opacity-100 hover:text-church-gold transition-colors">Events</Link></li>
              <li><Link to="/sermons" className="opacity-80 hover:opacity-100 hover:text-church-gold transition-colors">Sermons</Link></li>
              <li><Link to="/gallery" className="opacity-80 hover:opacity-100 hover:text-church-gold transition-colors">Gallery</Link></li>
              <li><Link to="/donate" className="opacity-80 hover:opacity-100 hover:text-church-gold transition-colors">Donate</Link></li>
              <li><Link to="/contact" className="opacity-80 hover:opacity-100 hover:text-church-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3 - Departments */}
          <div>
            <h4 className="text-lg font-semibold font-subtitle mb-4">Departments</h4>
            <ul className="space-y-2 text-sm font-body">
              <li><Link to="/departments/youth" className="opacity-80 hover:opacity-100 hover:text-church-gold transition-colors">Youth Ministry</Link></li>
              <li><Link to="/departments/women" className="opacity-80 hover:opacity-100 hover:text-church-gold transition-colors">Women's Ministry</Link></li>
              <li><Link to="/departments/music" className="opacity-80 hover:opacity-100 hover:text-church-gold transition-colors">Music Ministry</Link></li>
              <li><Link to="/departments/pathfinder" className="opacity-80 hover:opacity-100 hover:text-church-gold transition-colors">Pathfinder Club</Link></li>
            </ul>
          </div>

          {/* Column 4 - Contact Info */}
          <div>
            <h4 className="text-lg font-semibold font-subtitle mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm font-body">
              <div>
                <p className="font-semibold text-church-text-light">Chiraa SDA Central Church</p>
                <p className="opacity-80">📍 Chiraa District, Ghana</p>
              </div>
              <div className="opacity-80">
                <p>📞 +233 XXX XXX XXX</p>
                <p>✉️ chiraasda@gmail.com</p>
              </div>
              <div>
                <p className="opacity-80">🕐 <span className="font-semibold">Worship:</span></p>
                <p className="opacity-80 ml-4">Sat 9:00AM – 12:30PM</p>
              </div>
              <div>
                <Link to="/contact" className="text-church-gold hover:text-church-gold-light transition-colors font-button font-semibold">
                  📍 Get Directions
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer Bar */}
        <div className="border-t border-church-olive-light mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="#" className="text-church-text-light hover:text-church-gold transition-colors" aria-label="Facebook">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-church-text-light hover:text-church-gold transition-colors" aria-label="YouTube">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="#" className="text-church-text-light hover:text-church-gold transition-colors" aria-label="Instagram">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C8.396 0 7.989.013 6.756.072 5.524.131 4.718.333 4.008.63c-.738.303-1.365.712-1.988 1.335C1.397 2.588.988 3.215.685 3.953c-.297.71-.499 1.516-.558 2.748C.068 7.934.056 8.341.056 11.961c0 3.621.012 4.027.071 5.259.059 1.232.261 2.038.558 2.748.303.738.712 1.365 1.335 1.988.623.623 1.25 1.032 1.988 1.335.71.297 1.516.499 2.748.558C7.989 23.988 8.396 24 12.017 24c3.624 0 4.031-.012 5.264-.071 1.232-.059 2.038-.261 2.748-.558.738-.303 1.365-.712 1.988-1.335.623-.623 1.032-1.25 1.335-1.988.297-.71.499-1.516.558-2.748.059-1.232.071-1.639.071-5.259 0-3.62-.012-4.027-.071-5.259-.059-1.232-.261-2.038-.558-2.748-.303-.738-.712-1.365-1.335-1.988C19.392 1.397 18.765.988 18.027.685c-.71-.297-1.516-.499-2.748-.558C14.047.013 13.64.001 12.017.001zM12.017 2.163c3.557 0 3.98.013 5.385.071 1.299.059 2.006.274 2.477.456.622.242 1.066.532 1.532.998.466.466.756.91.998 1.532.182.471.397 1.178.456 2.477.058 1.405.071 1.828.071 5.385 0 3.557-.013 3.98-.071 5.385-.059 1.299-.274 2.006-.456 2.477-.242.622-.532 1.066-.998 1.532-.466.466-.91.756-1.532.998-.471.182-1.178.397-2.477.456-1.405.058-1.828.071-5.385.071-3.557 0-3.98-.013-5.385-.071-1.299-.059-2.006-.274-2.477-.456-.622-.242-1.066-.532-1.532-.998-.466-.466-.756-.91-.998-1.532-.182-.471-.397-1.178-.456-2.477-.058-1.405-.071-1.828-.071-5.385 0-3.557.013-3.98.071-5.385.059-1.299.274-2.006.456-2.477.242-.622.532-1.066.998-1.532.466-.466.91-.756 1.532-.998.471-.182 1.178-.397 2.477-.456 1.405-.058 1.828-.071 5.385-.071zm0 3.678c-3.707 0-6.714 3.007-6.714 6.714 0 3.707 3.007 6.714 6.714 6.714 3.707 0 6.714-3.007 6.714-6.714 0-3.707-3.007-6.714-6.714-6.714zm0 11.065c-2.407 0-4.351-1.944-4.351-4.351 0-2.407 1.944-4.351 4.351-4.351 2.407 0 4.351 1.944 4.351 4.351 0 2.407-1.944 4.351-4.351 4.351zm8.535-11.365c0 .867-.702 1.569-1.569 1.569-.867 0-1.569-.702-1.569-1.569 0-.867.702-1.569 1.569-1.569.867 0 1.569.702 1.569 1.569z"/>
                </svg>
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center">
              <p className="text-sm font-body opacity-80">
                © {currentYear} Chiraa SDA Church. All rights reserved.
              </p>
              <p className="text-xs font-body opacity-70 mt-1">
                "Designed by Owusu Boateng"
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;