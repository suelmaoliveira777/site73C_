import { motion } from "motion/react";


export function About() {
  return (
    <section id="quem-somos" className="relative py-24 px-6 lg:px-8 overflow-hidden">
      {/* Glass morphism background - same as Clients section */}
      <div className="absolute inset-0 backdrop-blur-sm bg-black/20 border-y border-white/10"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-12"
        >
          {/* Logo - Maior */}
          <div className="inline-block">
            <img
              src="/images/logo73C_sf.png"
              alt="73 Creative"
              className="h-30 md:h-30 lg:h-40 w-auto"
            />
          </div>
          
          {/* Title - Mesmo tamanho que "Negócios que decolam" */}
          <h2 
            className="text-white px-4 max-w-5xl mx-auto"
            style={{ 
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontFamily: 'var(--font-roboto)',
              fontWeight: 700,
              lineHeight: 1.2
            }}
          >
            o estúdio que{" "}
            <span className="bg-gradient-to-r from-[#f8c101] via-white to-[#a855f7] bg-clip-text text-transparent">
              impulsiona seu negócio
            </span>
          </h2>
          
          {/* Description */}
          <div className="text-gray-300 text-base md:text-lg lg:text-xl max-w-3xl mx-auto px-4 space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Ajudamos pequenas e médias empresas a sair do offline e conquistar presença com propósito.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Inteligência criativa, proximidade e resultados reais é o que nos move.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}



