import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Services = () => {
  const { t } = useTranslation();
  
  const bodyRepairServices = [
    'Collision & Accident Repair',
    'Dent Removal / Paintless Dent Repair (PDR)',
    'Auto Painting & Refinishing',
    'Frame & Structural Repair',
    'Bumper Repair & Replacement',
    'Glass Repair & Replacement (windshield, windows)',
    'Rust Repair & Prevention',
    'Scratch & Chip Repair',
    'Detailing & Paint Protection (ceramic coating, PPF)',
    'Upholstery & Interior Repair'
  ];

  const mechanicalServices = [
    'Engine Repair & Rebuilding',
    'Transmission Service & Repair',
    'Brake Service & Repair',
    'Suspension & Steering',
    'Exhaust & Emissions',
    'Electrical & Diagnostics',
    'Heating & Air Conditioning (HVAC)',
    'Oil Change & Fluid Services',
    'Tire Services (rotation, balancing, alignment)',
    'Battery & Charging System',
    'Fuel System Service',
    'Preventive Maintenance & Tune-Ups',
    'Drivetrain & Differential',
    'Cooling System Service'
  ];

  return (
    <div>
      <section className="bg-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-silver max-w-3xl mx-auto">
            Comprehensive auto repair services for all your vehicle needs
          </p>
        </div>
      </section>

      {/* Body Repair Services */}
      <section id="body-repair" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy mb-4">Body Repair Services</h2>
            <p className="text-xl text-slate max-w-3xl mx-auto">
              Expert collision repair, painting, and body work to restore your vehicle to perfection
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bodyRepairServices.map((service, index) => (
              <div
                key={index}
                className="bg-softwhite p-6 rounded-lg hover:bg-ice transition-colors duration-200 border-l-4 border-primary"
              >
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-navy font-medium">{service}</span>
                </div>
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

      {/* Mechanical Services */}
      <section id="mechanical" className="bg-softwhite py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy mb-4">Mechanical Services</h2>
            <p className="text-xl text-slate max-w-3xl mx-auto">
              Complete mechanical repair and maintenance services to keep your vehicle running smoothly
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mechanicalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg hover:bg-ice transition-colors duration-200 border-l-4 border-accent"
              >
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-navy font-medium">{service}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="inline-block bg-accent text-navy px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-colors duration-200"
            >
              Schedule Service
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help Choosing a Service?</h2>
          <p className="text-xl text-silver mb-8 max-w-2xl mx-auto">
            Our expert team is here to help. Contact us for a free consultation and estimate.
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

export default Services;
