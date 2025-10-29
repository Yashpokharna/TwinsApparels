"use client";

import { useEffect, useRef, useState } from "react";

const Team = () => {
  const container = useRef(null);
  const cards = useRef([]);
  const [hoveredCard, setHoveredCard] = useState(null);

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

    cards.current.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  const teamMembers = [
    {
      name: "Satyam Goyal",
      role: "Co-Founder",
      image: "/team/2.png",
      color: "from-rose-500 to-purple-500",
      links: {
        facebook: "https://www.facebook.com/satyam.goyal.393",
        instagram: "https://www.instagram.com/satyam__goyal/",
        linkedin: "https://www.linkedin.com/in/satyam-goyal-4082792ba/",
      },
    },
    {
      name: "Shivam Goyal",
      role: "Co-Founder",
      image: "/team/3.png",
      color: "from-blue-500 to-emerald-500",
      links: {
        facebook: "https://www.facebook.com/shivam.09.goyal",
        instagram: "https://www.instagram.com/shiivamgoyall/",
        linkedin: "https://www.linkedin.com/in/shivam-goyal-4082792ba/",
      },
    },
  ];

  const socialIcon = (platform) => {
    const icons = {
      facebook: (
        <path d="M22 0H2C.9 0 0 .9 0 2v20c0 1.1.9 2 2 2h10.7v-8.73H9.7v-3.4h3.01V9.34c0-3 1.82-4.65 4.5-4.65 1.28 0 2.67.23 2.67.23v2.94h-1.5c-1.49 0-1.95.93-1.95 1.89v2.28h3.32l-.53 3.4h-2.79V24H22c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2z" />
      ),
      instagram: (
        <path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2.5A2.5 2.5 0 1 0 12 15a2.5 2.5 0 0 0 0-5zm4.75-.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0z" />
      ),
      linkedin: (
        <path d="M4.98 3.5C4.98 5 3.89 6 2.49 6S0 5 0 3.5 1.08 1 2.49 1s2.49 1 2.49 2.5zM0 8h5v16H0V8zm7.33 0h4.78v2.21h.07c.67-1.24 2.33-2.55 4.8-2.55C23.41 7.66 24 11.3 24 15.72V24h-5v-7.3c0-1.75-.03-4-2.43-4-2.43 0-2.8 1.89-2.8 3.86V24h-5V8z" />
      ),
    };
    return icons[platform];
  };

  return (
    <section ref={container} className="relative py-24 overflow-hidden bg-white" id="Team">
      {/* Decorative background elements */}
      <div className="absolute rounded-full top-20 left-10 w-72 h-72 bg-rose-100 blur-3xl opacity-30"></div>
      <div className="absolute bg-purple-100 rounded-full bottom-20 right-10 w-96 h-96 blur-3xl opacity-30"></div>
      
      <div className="container relative z-10 px-6 mx-auto max-w-7xl md:px-16">
        {/* Header */}
        <div className="mb-20 text-center">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 text-sm font-semibold rounded-full text-rose-600 bg-rose-50">
              Leadership
            </span>
          </div>
          <h2 className="mb-6 text-5xl font-bold md:text-6xl text-slate-900">
            The Twin Force Behind
            <span className="block mt-2 text-transparent bg-gradient-to-r from-rose-600 via-purple-500 to-blue-500 bg-clip-text">
              Twins Apparels
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-600">
            United by vision, driven by innovation—two minds shaping the future of textiles with creativity and excellence.
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid max-w-5xl gap-8 mx-auto md:grid-cols-2">
          {teamMembers.map((member, i) => (
            <div
              key={i}
              ref={(el) => (cards.current[i] = el)}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
              className="transition-all duration-1000 transform translate-y-20 opacity-0 group"
            >
              <div className="relative">
                {/* Gradient border effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${member.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`}></div>
                
                {/* Card content */}
                <div className="relative overflow-hidden transition-all duration-500 bg-white shadow-xl rounded-3xl group-hover:shadow-2xl">
                  {/* Image container with gradient overlay */}
                  <div className="relative overflow-hidden h-80">
                    <div className={`absolute inset-0 bg-gradient-to-t ${member.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10`}></div>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="object-cover w-full h-full transition-transform duration-700 transform group-hover:scale-110"
                    />
                    
                    {/* Floating badge */}
                    <div className={`absolute top-6 right-6 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm shadow-lg transform ${hoveredCard === i ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'} transition-all duration-500`}>
                      <span className={`text-sm font-bold bg-gradient-to-r ${member.color} bg-clip-text text-transparent`}>
                        {member.role}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative p-8">
                    {/* Decorative corner accent */}
                    <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${member.color} opacity-10 rounded-bl-full`}></div>
                    
                    <h3 className="mb-2 text-3xl font-bold text-slate-900">
                      {member.name}
                    </h3>
                    <div className={`inline-block px-3 py-1 mb-6 text-xs font-semibold uppercase tracking-wider bg-gradient-to-r ${member.color} bg-clip-text text-transparent border-l-4 border-gradient-to-b ${member.color.replace('from-', 'border-').split(' ')[0].replace('to-', '')}`}>
                      {member.role}
                    </div>

                    {/* Social links with staggered animation */}
                    <div className="flex gap-3 pt-4">
                      {Object.entries(member.links).map(([platform, url], idx) => (
                        <a
                          key={platform}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`relative flex items-center justify-center w-12 h-12 rounded-xl bg-slate-50 text-slate-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg transform ${hoveredCard === i ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} hover:-translate-y-1 group/icon overflow-hidden`}
                          style={{ transitionDelay: `${idx * 100}ms` }}
                        >
                          <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300`}></div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="relative z-10 w-5 h-5"
                          >
                            {socialIcon(platform)}
                          </svg>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 border rounded-full bg-gradient-to-r from-rose-50 via-purple-50 to-blue-50 border-rose-100">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 border-2 border-white rounded-full bg-gradient-to-br from-rose-500 to-purple-500"></div>
              <div className="w-8 h-8 border-2 border-white rounded-full bg-gradient-to-br from-blue-500 to-emerald-500"></div>
            </div>
            <span className="text-sm font-medium text-slate-700">
              Building excellence together since day one
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;