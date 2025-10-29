import { useEffect, useRef } from "react";

const Community = () => {
  const cardsRef = useRef([]);

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
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: "⚙️",
      title: "Quality Manufacturing",
      description: "State-of-the-art machinery and skilled workforce delivering consistent, high-quality textiles.",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: "🌿",
      title: "Sustainable Production",
      description: "Eco-friendly processes and responsible sourcing to minimize environmental impact.",
      gradient: "from-emerald-500 to-emerald-600"
    },
    {
      icon: "🚀",
      title: "Innovation & Technology",
      description: "Advanced textile solutions combining traditional craftsmanship with modern innovation.",
      gradient: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container max-w-6xl px-6 mx-auto">
        
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-slate-900">
            Our <span className="text-rose-600">Values</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-600">
            Building excellence through quality, sustainability, and innovation
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {values.map((value, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="p-8 transition-all duration-500 transform translate-y-8 bg-white shadow-lg opacity-0 rounded-2xl hover:shadow-xl hover:-translate-y-1"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 mb-5 text-2xl bg-gradient-to-br ${value.gradient} rounded-xl shadow-md`}>
                <span className="filter brightness-0 invert">{value.icon}</span>
              </div>
              
              <h3 className="mb-3 text-xl font-bold text-slate-900">
                {value.title}
              </h3>
              
              <p className="leading-relaxed text-slate-600">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;