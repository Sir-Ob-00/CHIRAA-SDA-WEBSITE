const Gallery = () => {
  return (
    <div className="min-h-screen bg-church-beige-light py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-church-text-dark text-center mb-8">Gallery</h1>
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <p className="text-lg text-church-text-dark opacity-80">
            Photos and videos from our church events will be displayed here!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;