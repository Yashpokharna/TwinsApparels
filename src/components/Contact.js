"use client";

import { useEffect, useRef, useState } from "react";

const Contact = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const mapRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.2 }
    );

    if (mapRef.current) observer.observe(mapRef.current);
    return () => observer.disconnect();
  }, []);

  const contactInfo = [
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      ),
      title: "Visit Us",
      details: ["Hamirgarh, Bhilwara", "Rajasthan, India"],
      gradient: "from-rose-500 to-purple-500",
      link: "https://maps.google.com/?q=Hamirgarh,Bhilwara,Rajasthan",
    },
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      ),
      title: "Call Us",
      details: ["+91 94142-12340", "Mon-Sat: 9AM - 6PM"],
      gradient: "from-blue-500 to-emerald-500",
      link: "tel:+919414212340",
    },
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      ),
      title: "Email Us",
      details: ["admin@twinsapparels.in", "We reply within 24 hours"],
      gradient: "from-purple-500 to-rose-500",
      link: "mailto:info@twinsapparels.com",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-white" id="Contact">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 bg-blue-100 rounded-full w-96 h-96 blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 rounded-full w-96 h-96 bg-rose-100 blur-3xl opacity-20"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-50 rounded-full blur-3xl opacity-10"></div>

      <div className="container relative z-10 px-6 mx-auto max-w-7xl md:px-16">
        {/* Header */}
        <div className="mb-20 text-center">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 text-sm font-semibold rounded-full text-rose-600 bg-rose-50">
              Get In Touch
            </span>
          </div>
          <h2 className="mb-6 text-5xl font-bold md:text-6xl text-slate-900">
            Let's Start a
            <span className="block mt-2 text-transparent bg-gradient-to-r from-rose-600 via-purple-500 to-blue-500 bg-clip-text">
              Conversation
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-600">
            We're here to answer your questions and discuss how we can bring your textile vision to life.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid gap-6 mb-16 md:grid-cols-3">
          {contactInfo.map((info, i) => (
            <a
              key={i}
              href={info.link}
              target={info.link.startsWith('http') ? '_blank' : undefined}
              rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
              className="relative block group"
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
              
              {/* Card */}
              <div className="relative p-8 overflow-hidden transition-all duration-500 bg-white border shadow-lg rounded-2xl group-hover:shadow-2xl border-slate-100 group-hover:border-transparent">
                {/* Decorative corner */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${info.gradient} opacity-5 rounded-bl-full transform group-hover:scale-150 transition-transform duration-700`}></div>
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${info.gradient} shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="white"
                      className="w-8 h-8"
                    >
                      {info.icon}
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <h3 className="mb-3 text-2xl font-bold text-slate-900">
                  {info.title}
                </h3>
                {info.details.map((detail, idx) => (
                  <p
                    key={idx}
                    className={`${idx === 0 ? 'text-slate-700 font-medium' : 'text-slate-500 text-sm'} mb-1`}
                  >
                    {detail}
                  </p>
                ))}

                {/* Arrow indicator */}
                <div className={`mt-4 flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${info.gradient} bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-500`}>
                  <span>Connect Now</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Map Section */}
        <div
          ref={mapRef}
          className="transition-all duration-1000 transform translate-y-20 opacity-0"
        >
          <div className="relative group">
            {/* Map glow */}
            <div className="absolute inset-0 transition-opacity duration-500 bg-gradient-to-br from-rose-500 via-purple-500 to-blue-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30"></div>
            
            {/* Map container */}
            <div className="relative overflow-hidden bg-white border shadow-2xl rounded-3xl border-slate-100">
              {/* Map header */}
              <div className="relative p-8 border-b bg-gradient-to-r from-rose-50 via-purple-50 to-blue-50 border-slate-100">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="mb-2 text-3xl font-bold text-slate-900">
                      Find Us Here
                    </h3>
                    <p className="flex items-center gap-2 text-slate-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5 text-rose-600"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                      Hamirgarh, Bhilwara, Rajasthan, India
                    </p>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Hamirgarh,Bhilwara,Rajasthan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white transition-all duration-300 transform shadow-lg bg-gradient-to-r from-rose-600 to-purple-600 rounded-xl hover:shadow-xl hover:-translate-y-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                    </svg>
                    Open in Maps
                  </a>
                </div>
              </div>

              {/* Map embed */}
              <div className="relative w-full h-[500px] bg-slate-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113947.4426!2d74.5891!3d25.4469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f2e4e1b1a1a1b%3A0x1b1a1a1b1a1a1b1a!2sHamirgarh%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                ></iframe>
                
                {/* Corner decorations */}
                <div className="absolute bottom-0 left-0 w-20 h-20 pointer-events-none bg-gradient-to-tr from-rose-500/20 to-transparent"></div>
                <div className="absolute top-0 right-0 w-20 h-20 pointer-events-none bg-gradient-to-bl from-blue-500/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-4 px-8 py-6 border rounded-2xl bg-gradient-to-r from-rose-50 via-purple-50 to-blue-50 border-rose-100">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-rose-500 to-purple-500 animate-pulse">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="white"
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-slate-900">Ready to work together?</p>
                <p className="text-xs text-slate-600">We're excited to hear from you!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;