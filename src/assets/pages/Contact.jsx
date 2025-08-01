const Contact = () => {
  return (
    <div className="min-h-screen bg-church-beige-light py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-church-text-dark text-center mb-8">Contact Us</h1>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-church-text-dark mb-4">Get in Touch</h3>
              <div className="space-y-3 text-church-text-dark opacity-80">
                <p>📍 Chiraa District, Brong-Ahafo Region, Ghana</p>
                <p>📞 +233 XXX XXX XXX</p>
                <p>✉️ info@chiraasda.org</p>
                <p>🕐 Sabbath: 9:00 AM - 12:00 PM</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-church-text-dark mb-4">Visit Us</h3>
              <p className="text-church-text-dark opacity-80">
                We welcome visitors and new members! Join us for worship every Saturday.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;