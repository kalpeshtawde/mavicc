import { Link } from 'react-router-dom';

const MechanicalServices = () => {
  const services = [
    {
      title: 'Engine Repair & Rebuilding',
      description: 'Complete engine diagnostics, repair, and rebuilding services',
      icon: '🔧'
    },
    {
      title: 'Transmission Service & Repair',
      description: 'Automatic and manual transmission repair and maintenance',
      icon: '⚙️'
    },
    {
      title: 'Brake Service & Repair',
      description: 'Brake pad replacement, rotor resurfacing, and brake system repair',
      icon: '🛑'
    },
    {
      title: 'Suspension & Steering',
      description: 'Suspension repair, alignment, and steering system service',
      icon: '🔩'
    },
    {
      title: 'Exhaust & Emissions',
      description: 'Exhaust system repair, muffler replacement, and emissions testing',
      icon: '💨'
    },
    {
      title: 'Electrical & Diagnostics',
      description: 'Computer diagnostics, electrical system repair, and troubleshooting',
      icon: '⚡'
    },
    {
      title: 'Heating & Air Conditioning (HVAC)',
      description: 'AC repair, heater service, and climate control system maintenance',
      icon: '❄️'
    },
    {
      title: 'Oil Change & Fluid Services',
      description: 'Oil changes, fluid flushes, and fluid level checks',
      icon: '🛢️'
    },
    {
      title: 'Tire Services',
      description: 'Tire rotation, balancing, alignment, and replacement',
      icon: '🛞'
    },
    {
      title: 'Battery & Charging System',
      description: 'Battery testing, replacement, and alternator service',
      icon: '🔋'
    },
    {
      title: 'Fuel System Service',
      description: 'Fuel injection cleaning, fuel pump repair, and system diagnostics',
      icon: '⛽'
    },
    {
      title: 'Preventive Maintenance & Tune-Ups',
      description: 'Regular maintenance services to keep your vehicle running smoothly',
      icon: '✅'
    },
    {
      title: 'Drivetrain & Differential',
      description: 'Drivetrain repair, differential service, and axle repair',
      icon: '🔄'
    },
    {
      title: 'Cooling System Service',
      description: 'Radiator repair, coolant flush, and cooling system maintenance',
      icon: '🌡️'
    }
  ];

  return (
    <div>
      <section className="bg-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Mechanical Services</h1>
          <p className="text-xl text-silver max-w-3xl mx-auto">
            Complete mechanical repair and maintenance services to keep your vehicle running smoothly
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
                  Schedule Service
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
              className="inline-block bg-accent text-navy px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-colors duration-200"
            >
              Schedule Service Today
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Mechanical Service?</h2>
          <p className="text-xl text-silver mb-8 max-w-2xl mx-auto">
            Our expert technicians are here to help. Contact us today for service.
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

export default MechanicalServices;
