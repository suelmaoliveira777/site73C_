import { useState, useEffect } from "react";

export function Hero() {
  const [currentWord, setCurrentWord] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const words = ["crescer", "vender", "se destacar"];

  useEffect(() => {
    const word = words[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentWord.length < word.length) {
          setCurrentWord(word.slice(0, currentWord.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentWord.length > 0) {
          setCurrentWord(word.slice(0, currentWord.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentWord, currentIndex, isDeleting, words]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ objectFit: 'cover' }}
        >
          <source src="https://res.cloudinary.com/ddg2a2dsx/video/upload/hero-video_hi3kzy.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Centered Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 py-10 lg:py-20 pt-20 lg:pt-32 text-center">
        <div className="space-y-12">
          {/* Main Heading */}
          <div className="space-y-6">
            <h1 
              className="text-white leading-tight"
              style={{ 
                fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
                fontWeight: 800,
                fontFamily: 'var(--font-roboto)'
              }}
            >
              Transformamos ideias<br />em resultados
            </h1>
            
            <p 
              className="text-white leading-relaxed"
              style={{ 
                fontSize: 'clamp(1.25rem, 4vw, 3rem)',
                fontWeight: 300,
                fontFamily: 'var(--font-poppins)'
              }}
            >
              <span className="block sm:inline">um universo de possibilidades</span>
              <br className="hidden sm:block" />
              <span className="block sm:inline">para sua marca{" "}</span>
              <span 
                className="inline-block min-w-[120px] sm:min-w-[200px] text-left"
                style={{ color: '#f8c101' }}
              >
                {currentWord}
                <span className="animate-pulse">|</span>
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}