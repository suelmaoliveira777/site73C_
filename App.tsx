import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Solutions } from "./components/Solutions";
import { Clients } from "./components/Clients";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { ScrollToTop } from "./components/ScrollToTop";

export default function App() {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Galaxy Parallax Background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        {/* Galaxy Image with Parallax Effect */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1504812333783-63b845853c20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYWxheHklMjBzcGFjZSUyMHN0YXJzJTIwbmVidWxhfGVufDF8fHx8MTc2MzMzMDU2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')",
          }}
        />
        
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Purple gradient overlay for brand consistency */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: "radial-gradient(circle at 30% 20%, rgba(168, 85, 247, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)"
          }}
        />
        
        {/* Yellow accent glow */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            background: "radial-gradient(ellipse at 50% 50%, rgba(248, 193, 1, 0.15) 0%, transparent 60%)"
          }}
        />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(248, 193, 1, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(248, 193, 1, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Solutions />
        <Clients />
        <Contact />
        <Footer />
      </div>
      
      {/* Floating Buttons */}
      <WhatsAppButton />
      <ScrollToTop />

    </div>
  );
}