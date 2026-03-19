import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const FAQ = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Do you work with Enterprise for rental cars?",
      answer: "Yes! We work with Enterprise, and if you repair your vehicle with us, we can help you get a better rental deal. This makes it more convenient and affordable while your car is being repaired."
    },
    {
      question: "Do you work with all insurance companies?",
      answer: "Yes, we work with all major insurance companies. We'll handle the paperwork and work directly with your insurance provider to make the claims process as smooth as possible."
    },
    {
      question: "How long does a typical repair take?",
      answer: "Repair time varies depending on the extent of damage. Minor repairs may take 2-3 days, while major collision repairs can take 1-2 weeks. We'll provide you with an accurate timeline after inspecting your vehicle."
    },
    {
      question: "Do you offer free estimates?",
      answer: "Yes, we provide free estimates for all repair work. Simply bring your vehicle to our shop or contact us to schedule an appointment."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major payment methods including Visa, Mastercard, American Express, as well as digital payments through Venmo, PayPal, and Cash App."
    },
    {
      question: "Do you provide warranty on repairs?",
      answer: "Yes, we stand behind our work with a comprehensive warranty on all repairs. The specific warranty terms depend on the type of repair performed."
    },
    {
      question: "Can I get a rental car while my vehicle is being repaired?",
      answer: "Yes, we can help arrange a rental car for you. We work with Enterprise to provide better rental deals for our customers. Your insurance may also cover rental costs."
    },
    {
      question: "Do you repair all makes and models?",
      answer: "Yes, our certified technicians are experienced in repairing all makes and models of vehicles, from domestic to foreign cars and trucks."
    },
    {
      question: "What if I don't have the VIN number?",
      answer: "No problem! While having your VIN helps us prepare, we can look it up when you bring your vehicle in. You can find the VIN on your dashboard, driver's side door jamb, or vehicle registration."
    },
    {
      question: "Do you offer paintless dent repair (PDR)?",
      answer: "Yes, we offer paintless dent repair for minor dents and dings. This is a cost-effective solution that preserves your original paint."
    },
    {
      question: "Can you match my car's paint color exactly?",
      answer: "Yes, we use advanced color-matching technology to ensure your vehicle's paint matches perfectly with the original factory color."
    },
    {
      question: "Do you provide pick-up and drop-off service?",
      answer: "Please contact us to discuss pick-up and drop-off options. We try to accommodate our customers' needs whenever possible."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-softwhite min-h-screen">
      <section className="bg-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-silver max-w-3xl mx-auto">
            Find answers to common questions about our services, repairs, and processes
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-ice transition-colors duration-200"
                >
                  <span className="text-lg font-semibold text-navy pr-8">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-6 h-6 text-primary flex-shrink-0 transition-transform duration-200 ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-6 py-4 bg-ice border-t border-silver">
                    <p className="text-slate leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 bg-navy text-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-silver mb-6">
              Can't find the answer you're looking for? Our team is here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+17627262000"
                className="inline-flex items-center justify-center bg-primary hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-accent hover:bg-yellow-400 text-navy px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
