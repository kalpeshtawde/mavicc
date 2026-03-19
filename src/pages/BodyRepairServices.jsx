import { Link } from 'react-router-dom';

const BodyRepairServices = () => {
  const services = [
    {
      title: 'Collision & Accident Repair',
      description: 'Complete collision repair services to restore your vehicle to pre-accident condition',
      icon: '🚗'
    },
    {
      title: 'Dent Removal / Paintless Dent Repair (PDR)',
      description: 'Professional dent removal without affecting your original paint',
      icon: '🔨'
    },
    {
      title: 'Auto Painting & Refinishing',
      description: 'Expert color matching and professional paint application',
      icon: '🎨'
    },
    {
      title: 'Frame & Structural Repair',
      description: 'Advanced frame straightening and structural restoration',
      icon: '⚙️'
    },
    {
      title: 'Bumper Repair & Replacement',
      description: 'Bumper repair, replacement, and refinishing services',
      icon: '🛡️'
    },
    {
      title: 'Glass Repair & Replacement',
      description: 'Windshield, window, and glass repair or replacement',
      icon: '🪟'
    },
    {
      title: 'Rust Repair & Prevention',
      description: 'Rust removal, repair, and protective coating application',
      icon: '🔧'
    },
    {
      title: 'Scratch & Chip Repair',
      description: 'Professional scratch and paint chip repair services',
      icon: '✨'
    },
    {
      title: 'Detailing & Paint Protection',
      description: 'Ceramic coating, PPF, and professional detailing services',
      icon: '💎'
    },
    {
      title: 'Upholstery & Interior Repair',
      description: 'Interior restoration, upholstery repair, and cleaning',
      icon: '🪑'
    }
  ];

  return (
    <div>
      <section className="bg-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Body Repair Services</h1>
          <p className="text-xl text-silver max-w-3xl mx-auto">
            Expert collision repair, painting, and body work to restore your vehicle to perfection
          </p>
        </div>
      </section>

      <section className="bg-softwhite py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 group"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-navy mb-4">{service.title}</h3>
                <p className="text-slate mb-6">{service.description}</p>
                <Link
                  to="/contact"
                  className="text-primary font-semibold hover:underline inline-flex items-center"
                >
                  Get a Quote
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="inline-block bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors duration-200"
            >
              Get a Free Estimate
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Restore Your Vehicle?</h2>
          <p className="text-xl text-silver mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and estimate
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+17627262000"
              className="inline-flex items-center justify-center bg-primary hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (762) 726-2000
            </a>
            <a
              href="tel:+16786915109"
              className="inline-flex items-center justify-center bg-accent hover:bg-yellow-400 text-navy px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (678) 691-5109
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BodyRepairServices;
