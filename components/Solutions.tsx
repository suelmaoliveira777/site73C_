import { motion } from "motion/react";
import { ArrowRight, Bold } from "lucide-react";


export function Solutions() {
  const solutions = [
    {
      image: "/images/desenvolvimento_web.jpg",
      title: "Desenvolvimento Web",
      description: "Soluções web personalizadas que impulsionam seu negócio no ambiente digital."
    },
    {
      image: "/images/sistema_gestao.jpg",
      title: "Sistemas de Gestão",
      description: "Automatize processos e otimize a operação da sua empresa com tecnologia avançada."
    },
    {
      image: "/images/solutionconnectasite.png",
      title: "Connecta Sites",
      description: "Tenha um site profissional, responsivo e fácil de gerenciar, tudo por um custo acessível."
    }
  ];

  return (
    <section id="solucoes" className="relative py-24 px-6 lg:px-8">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="space-y-1">
            <h2 
              className="text-white"
              style={{ 
                fontSize: 'clamp(2rem, 5vw, 3.2rem)',
                fontWeight: 700,
                fontFamily: 'var(--font-roboto)',
                marginBottom: 0,
                lineHeight: 1.2,
                
              }}
            >
              Temos soluções digitais
            </h2>
            <h3 
              style={{ 
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: 700,
                fontFamily: 'var(--font-roboto)',
                marginTop: 0,
                lineHeight: 1.2,
                background: 'linear-gradient(135deg, #f8c101 0%, #ffffff 50%, #6b7cff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              que transformam negócios
            </h3>
          </div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mt-4">
            Desenvolvemos tecnologia personalizada para impulsionar o crescimento da sua empresa no ambiente digital.
          </p>
        </motion.div>

        {/* Solutions Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full flex flex-col">
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-black/20">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow space-y-4">
                  <h3 
                    className="text-white"
                    style={{ 
                      fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
                      fontFamily: 'var(--font-roboto)',
                      textAlign: 'center',
                      fontWeight: 700,
                      background: 'linear-gradient(135deg, #f8c101 0%, #ffffff 50%, #6b7cff 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {solution.title}
                  </h3>
                  <p className="text-gray-300 flex-grow"
                     style={{ 
                                           
                      textAlign: 'center',
                      
                    }}
                  >
                    {solution.description}
                  </p>

                  {/* CTA Button */}
                    <a
                      href="https://connectasites.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <button 
                        className="w-full px-6 py-3 rounded-lg hover:opacity-90 transition-all duration-300 text-black flex items-center justify-center gap-2 group-hover:gap-3"
                        style={{ 
                          backgroundColor: '#f8c101',
                          fontFamily: 'var(--font-roboto)',
                          cursor: 'pointer'
                        }}
                      >
                        Visitar Site
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </a>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}