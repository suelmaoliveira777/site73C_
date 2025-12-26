import { Shield, Lock, Eye, UserCheck, FileText, Mail, Clock, Database, ChevronLeft } from "lucide-react";
import { motion } from "motion/react";

export function PrivacyPolicy({ onBack }: { onBack?: () => void }) {
  const sections = [
    {
      icon: FileText,
      title: "1. Coleta de Dados Pessoais",
      content: `Este site não realiza coleta direta de dados pessoais por meio de formulários ou cadastros. A interação com visitantes ocorre exclusivamente via chat online, oferecido pela plataforma Tawk.to.`
    },
    {
      icon: Eye,
      title: "2. Cookies e Tecnologias de Rastreamento",
      content: `Utilizamos cookies e tecnologias de terceiros com o objetivo de melhorar a experiência de navegação e obter dados estatísticos sobre o uso do site.

As ferramentas utilizadas incluem:
• Tawk.to – Para atendimento via chat;
• Google Analytics – Para análise de tráfego, comportamento dos visitantes e dados agregados sobre o uso do site;
• Google Search Console – Para monitoramento da performance do site nos resultados de busca.

Essas ferramentas podem coletar informações como:
• Endereço IP;
• Tipo de dispositivo e navegador;
• Localização aproximada;
• Páginas visitadas e tempo de navegação.

O visitante pode configurar suas preferências de cookies por meio do aviso exibido ao acessar o site. O uso do site implica concordância com esta Política.`
    },
    {
      icon: Lock,
      title: "3. Compartilhamento de Dados",
      content: `A 73Creative não compartilha os dados coletados com terceiros, exceto nos seguintes casos:
• Quando necessário para a operação das ferramentas mencionadas;
• Em cumprimento de obrigações legais ou ordens judiciais.`
    },
    {
      icon: Shield,
      title: "4. Segurança da Informação",
      content: `Adotamos medidas administrativas e técnicas para proteger as informações tratadas por meio do site, incluindo:
• Certificado SSL (HTTPS);
• Acesso restrito aos ambientes administrativos;
• Utilização de servidores confiáveis para hospedagem.`
    },
    {
      icon: UserCheck,
      title: "5. Direitos dos Titulares",
      content: `Em conformidade com a Lei Geral de Proteção de Dados (LGPD), o titular dos dados tem direito a:
• Confirmar a existência de tratamento;
• Acessar, corrigir ou solicitar a exclusão de dados, quando aplicável;
• Solicitar anonimização, bloqueio ou eliminação de dados desnecessários;
• Revogar o consentimento, nos casos em que este for a base legal do tratamento.

Para exercer seus direitos, entre em contato conosco pelo e-mail: ola@73creative.com`
    },
    {
      icon: Database,
      title: "6. Retenção de Dados",
      content: `Como não há coleta direta de dados pessoais, não armazenamos informações identificáveis localmente. Dados agregados e anonimizados gerados por ferramentas como Google Analytics são retidos conforme as políticas dessas plataformas.`
    },
    {
      icon: Clock,
      title: "7. Alterações nesta Política",
      content: `Esta Política de Privacidade pode ser atualizada a qualquer momento para refletir mudanças nos serviços ou obrigações legais. Recomendamos a revisão periódica do conteúdo.`
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative">
        {onBack && (
          <button
            type="button"
            onClick={onBack}
            aria-label="Voltar"
            className="absolute left-6 top-6 p-2 rounded-md bg-white/5 hover:bg-white/10 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
        )}

      {/* Header com gradiente */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative py-20 px-6 lg:px-8 overflow-hidden"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f8c101]/20 via-transparent to-[#6b7cff]/20"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block p-4 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 mb-4"
          >
            <Shield className="w-12 h-12" style={{ color: '#f8c101' }} />
          </motion.div>
          
          <h1 
            className="text-4xl lg:text-6xl"
            style={{ 
              fontWeight: 700,
              background: 'linear-gradient(135deg, #f8c101 0%, #ffffff 50%, #6b7cff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Política de Privacidade
          </h1>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Transparência e segurança no tratamento dos seus dados
          </p>
          
          <p className="text-sm text-gray-400">
            Última atualização: 12/05/2025
          </p>
        </div>
      </motion.div>
      </div>

      {/* Conteúdo */}
      <div className="relative py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Introdução */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-xl backdrop-blur-md bg-white/5 border border-white/10"
          >
            <p className="text-gray-300 leading-relaxed">
              A <span className="text-white font-semibold">73Creative</span>, responsável pelo site institucional da marca e por páginas relacionadas aos produtos da linha Connecta, respeita sua privacidade e está comprometida com a proteção dos dados eventualmente coletados durante sua navegação neste site.
            </p>
          </motion.div>

          {/* Seções */}
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 transition-colors space-y-4"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg backdrop-blur-xl bg-white/10 border border-white/20">
                  <section.icon className="w-6 h-6" style={{ color: '#f8c101' }} />
                </div>
                <h2 className="text-2xl font-bold text-white">
                  {section.title}
                </h2>
              </div>
              
              <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                {section.content}
              </div>
            </motion.div>
          ))}

          {/* Footer CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-xl backdrop-blur-md bg-gradient-to-r from-[#f8c101]/10 to-[#6b7cff]/10 border border-white/10 text-center space-y-4"
          >
            <Mail className="w-10 h-10 mx-auto" style={{ color: '#f8c101' }} />
            <h3 className="text-2xl font-bold text-white">
              Dúvidas sobre nossa política?
            </h3>
            <p className="text-gray-300">
              Entre em contato conosco através do email:
            </p>
            <a 
              href="mailto:73creative.ts@gmail.com"
              className="inline-block px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #f8c101 0%, #6b7cff 100%)',
                color: '#000'
              }}
            >
              73creative.ts@gmail.com
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}