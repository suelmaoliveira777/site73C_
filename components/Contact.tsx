import { Rocket } from "lucide-react";
import { Button } from "./ui/button";

export function Contact() {
  return (
    <section id="contactos" className="relative py-32 px-6 lg:px-8 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center space-y-6">
          {/* Main title with gradient */}
          <h2 className="relative">
            <span 
              className="block leading-tight"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                fontFamily: 'var(--font-roboto)',
                fontWeight: 600,
                background: 'linear-gradient(135deg, #f8c101 0%, #ffffff 50%, #6b7cff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '-0.01em'
              }}
            >
              Ideias que ganham vida
            </span>
          </h2>

          {/* Subtitle */}
          <h3 
            className="text-white"
            style={{ 
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontFamily: 'var(--font-roboto)',
              fontWeight: 700 
            }}
          >
            Negócios que decolam
          </h3>

          {/* Description */}
          <div className="space-y-2 max-w-3xl mx-auto pt-6">
            <p className="text-base lg:text-lg text-gray-300">
              Transforme sua presença digital em resultados reais. Nós guiamos o caminho.
            </p>
            <p 
              className="text-base lg:text-lg"
              style={{ color: '#f8c101', fontWeight: 500 }}
            >
              O universo digital espera pela sua próxima conquista.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <Button 
              size="lg"
              className="text-black hover:opacity-90 transition-opacity px-8 py-6"
              style={{ backgroundColor: '#f8c101', fontWeight: 600 }}
              onClick={() => window.location.href = 'mailto:contato@73creative.tech'}
            >
              Comece sua jornada
              <Rocket className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes galaxyMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  );
}