import { Star, Quote, Instagram } from "lucide-react";


export function Clients() {
  const testimonials = [
    {
      name: "Wiliam Amaral",
      company: "Amaral Reparações",
      instagram: "@amaralreparacoes",
      text: "A 73 Creative-tech transformou nossa visão em uma plataforma incrível. Profissionalismo e qualidade excepcionais!",
      rating: 5
    },
    {
      name: "Drª Bianca Saboia",
      company: "Bianca Saboia Advocacia",
      instagram: "@biancasaboiaadvocacia",
      text: "Equipe extremamente dedicada e criativa. Superaram nossas expectativas em todos os aspectos do projeto.",
      rating: 5
    },
    {
      name: "Lídia Klockner",
      company: "Restaurante do Capitão",
      instagram: "@restaurantedocapitao",
      text: "Parceiros ideais para quem busca inovação. Entregaram um produto além do que imaginávamos. Fiquei mesmo satisfeita!",
      rating: 5
    }
  ];

  const clientLogos = [
    { name: "FG Reparações", image: "/images/logoFG_SF.png" },
    { name: "Amaral Reparações", image: "/images/logo_amaral.png" },
    { name: "Restaurante do Capitão", image:" /images/logo_capitao_sf.png" },
    { name: "Bianca Saboia Advocacia", image: "/images/logoBS-SF.png" }
  ];

  // Duplicate logos for infinite scroll effect
  const duplicatedLogos = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section id="clientes" className="relative py-24 px-6 lg:px-8">
      {/* Glass morphism background */}
      <div className="absolute inset-0 backdrop-blur-sm bg-black/20 border-y border-white/10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 
            className="text-4xl lg:text-5xl"
            style={{ 
              fontWeight: 700,
              background: 'linear-gradient(135deg, #f8c101 0%, #ffffff 50%, #6b7cff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Cada projeto é uma jornada
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore nossas missões mais recentes e descubra histórias de marcas que cresceram ao nosso lado.
          </p>
        </div>

        {/* Client Logos - Infinite Carousel */}
        <div className="mb-16 overflow-hidden">
          <style>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-33.333%);
              }
            }
            .animate-scroll {
              animation: scroll 20s linear infinite;
            }
            .animate-scroll:hover {
              animation-play-state: paused;
            }
          `}</style>
          
          <div className="flex gap-6 animate-scroll">
            {duplicatedLogos.map((logo, index) => (
              <div 
                key={index}
                className="h-24 w-48 flex-shrink-0 rounded-xl backdrop-blur-xl bg-white/80 border border-white/30 shadow-lg flex items-center justify-center hover:bg-white/90 transition-all p-4"
                style={{
                  boxShadow: '0 8px 32px 0 rgba(255, 255, 255, 0.1)'
                }}
              >
                <img 
                  src={logo.image} 
                  alt={logo.name}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="p-8 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 transition-colors space-y-4"
            >
              <Quote className="w-10 h-10" style={{ color: '#f8c101' }} />
              
              <p className="text-gray-300 italic">"{testimonial.text}"</p>
              
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" style={{ color: '#f8c101' }} />
                ))}
              </div>
              
              <div className="pt-4 border-t border-white/10 space-y-1">
                <p className="text-white">{testimonial.name}</p>
                <p className="text-gray-400 text-sm">{testimonial.company}</p>
                <div className="flex items-center gap-2 pt-1">
                  <Instagram className="w-4 h-4" style={{ color: '#a855f7' }} />
                  <span className="text-white text-sm">{testimonial.instagram}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}