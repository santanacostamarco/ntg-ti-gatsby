import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Heading2 } from "../ui/Typography";
import { FadeIn } from "../ui/FadeIn";
import { NextSectionArrow } from "../ui/NextSectionArrow";

const PortfolioCard = ({ item }: { item: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)");
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) return; // Desabilita o tilt 3D no mobile
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const deltaX = x - centerX;
    const deltaY = y - centerY;
    
    // O canto onde o mouse está sobe no eixo Z
    const maxTilt = 5;
    const rotateX = (deltaY / centerY) * maxTilt;
    const rotateY = -(deltaX / centerX) * maxTilt;
    
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`);
    setSpotlight({ x, y, opacity: 1 });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)");
    setSpotlight({ x: 0, y: 0, opacity: 0 });
  };

  const handleMouseEnter = () => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) return; // Desabilita o efeito no mobile
    setIsHovered(true);
    setSpotlight((prev) => ({ ...prev, opacity: 1 }));
  };

  return (
    <div className="px-4 py-8" style={{ perspective: "1000px" }}>
      <div 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        style={{ 
          transform, 
          transition: isHovered ? "transform 0.1s ease-out, box-shadow 0.2s ease" : "transform 0.3s ease-out, box-shadow 0.3s ease", 
          transformStyle: "preserve-3d" 
        }}
        className={`card w-full relative rounded-xl overflow-hidden cursor-pointer`}
      >
        {/* Camada base da borda (estática) */}
        <div className="absolute inset-0 bg-slate-700 z-0" />
        
        {/* Lente luminosa que segue o cursor e revela uma cor viva na borda */}
        <div 
          className="absolute inset-0 z-0 transition-opacity duration-300 hidden md:block"
          style={{
            opacity: spotlight.opacity,
            background: `radial-gradient(400px circle at ${spotlight.x}px ${spotlight.y}px, rgba(56,189,248,0.8), transparent 40%)`
          }}
        />
        
        {/* Fundo interno do card (deixa 1px do fundo aparecendo como borda) */}
        <div className="absolute inset-[1px] bg-slate-800 rounded-xl z-10" />

        {/* Conteúdo interno com efeito de Parallax no eixo Z ativado apenas no Desktop */}
        <div className="relative z-20 transform-none md:[transform:translateZ(30px)]">
          <figure className="px-4 pt-4">
            <div className="w-full h-48 bg-slate-900/50 rounded-xl flex items-center justify-center border border-slate-700 backdrop-blur-sm shadow-inner">
              <svg className="w-16 h-16 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-white">Projeto {item}</h2>
            <p className="text-slate-400 text-sm font-light">Sistema high-end desenvolvido sob medida.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Portfolio = () => {
  const items = [1, 2, 3, 4, 5, 6];
  
  // Estado para forçar a quantidade correta de slides (bypass de bugs de SSR/Resize do react-slick)
  const [slidesToShow, setSlidesToShow] = useState(3);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    // Executa imediatamente na montagem no cliente
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow, // Valor dinâmico forçado via React
    slidesToScroll: 1,
    arrows: slidesToShow > 1, // Oculta as setas laterais no mobile para evitar que o componente fique "largo demais"
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <section className="w-full min-h-screen relative flex flex-col justify-center py-24 md:py-32 bg-slate-950 border-t border-slate-800" id="works">
      <FadeIn className="max-w-6xl mx-auto px-6 md:px-12 w-full">
        
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-8 opacity-80">
          <span className="font-mono text-sky-400 text-lg">02</span>
          <div className="h-[1px] w-12 bg-sky-400/50"></div>
          <p className="uppercase tracking-widest text-slate-400 text-sm font-semibold">Nosso Trabalho</p>
        </div>

        {/* Cabecalho da Seção */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-6">
            <Heading2 className="text-white leading-tight">Projetos Selecionados</Heading2>
          </div>
          <div className="lg:col-span-6 flex items-center">
            <p className="text-slate-300 font-light text-lg">
              Uma amostra dos ecossistemas digitais e plataformas robustas que construímos. 
              Focados em usabilidade intuitiva, alta disponibilidade e precisão técnica de ponta a ponta.
            </p>
          </div>
        </div>
        
        <div className="w-full bg-slate-900 rounded-box border border-slate-800 shadow-[0_0_30px_rgba(0,0,0,0.5)] p-4 md:p-8 overflow-hidden">
          <Slider {...settings}>
            {items.map((item) => (
              <PortfolioCard key={item} item={item} />
            ))}
          </Slider>
        </div>
      </FadeIn>
      
      <NextSectionArrow targetId="contact" />
    </section>
  );
};
