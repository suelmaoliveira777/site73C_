import { Facebook, Twitter, Instagram, Linkedin, Github, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    empresa: [
      { label: "Quem Somos", href: "#quem-somos" },
      { label: "Soluções", href: "#solucoes" },
      { label: "Clientes", href: "#clientes" },
      { label: "Contactos", href: "#contactos" }
    ],
    legal: [
      { label: "Política de Privacidade", href: "#" },
      { label: "Termos de Uso", href: "#" },
      { label: "Cookies", href: "#" },
      { label: "GDPR", href: "#" }
    ]
  };

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <Github className="w-5 h-5" />, href: "#", label: "Github" }
  ];

  return (
    <footer className="relative border-t border-white/10">
      {/* Glass morphism background */}
      <div className="absolute inset-0 backdrop-blur-sm bg-black/30"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-3xl text-white">
              73 <span style={{ color: '#f8c101' }}>Creative</span>
            </h3>
            <p className="text-gray-400 max-w-md">
              Transformamos ideias em experiências digitais inovadoras. 
              Criando o futuro através da tecnologia e criatividade.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3 pt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg backdrop-blur-sm bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white/10 transition-colors"
                  style={{
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#f8c101';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '';
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="space-y-4">
            <h4 className="text-white">Empresa</h4>
            <ul className="space-y-2">
              {footerLinks.empresa.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 transition-colors hover-yellow"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-white">Contactos</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:contato@73creative.pt"
                  className="text-gray-400 transition-colors hover-yellow flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  contato@73creative.pt
                </a>
              </li>
              <li>
                <a 
                  href="tel:+351000000000"
                  className="text-gray-400 transition-colors hover-yellow flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  +351 000 000 000
                </a>
              </li>
              <li>
                <div className="text-gray-400 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Lisboa, Portugal
                </div>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-white">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 transition-colors hover-yellow"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <p className="text-gray-400 text-sm text-center">
            © {currentYear} 73 Creative-tech Studio. Todos os direitos reservados.
          </p>
        </div>
      </div>

      <style>{`
        .hover-yellow:hover {
          color: #f8c101 !important;
        }
      `}</style>
    </footer>
  );
}