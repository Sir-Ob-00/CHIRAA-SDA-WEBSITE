const Departments = () => {
  return (
    <div className="min-h-screen bg-church-beige-light py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-church-text-dark text-center mb-8">Church Departments</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-church-blue mb-3">Youth Ministry</h3>
            <p className="text-church-text-dark opacity-80">Empowering young people in faith and service.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-church-blue mb-3">Women's Ministry</h3>
            <p className="text-church-text-dark opacity-80">Supporting and encouraging women in their spiritual journey.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-church-blue mb-3">Men's Ministry</h3>
            <p className="text-church-text-dark opacity-80">Building strong Christian men and leaders.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Departments;