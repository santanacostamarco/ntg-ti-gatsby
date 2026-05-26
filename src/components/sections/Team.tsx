import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Heading2 } from "../ui/Typography";
import { FadeIn } from "../ui/FadeIn";
import { NextSectionArrow } from "../ui/NextSectionArrow";

interface TeamMember {
  name: string;
  role: string;
  linkedin: string;
  github: string;
}

const teamMembers: TeamMember[] = [
  { name: "Natan", role: "Presidente", linkedin: "#", github: "#" },
  { name: "Thiago", role: "Vice-Presidente & Gerente de Marketing", linkedin: "#", github: "#" },
  { name: "Guilherme", role: "Gerente de Desenvolvimento", linkedin: "#", github: "#" },
  { name: "Gustavo", role: "Desenvolvedor", linkedin: "#", github: "#" },
  { name: "Marco", role: "Desenvolvedor", linkedin: "#", github: "#" }
];

const TeamCard = ({ member }: { member: TeamMember }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)");
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) return;
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const deltaX = x - centerX;
    const deltaY = y - centerY;

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
    if (typeof window !== 'undefined' && window.innerWidth < 768) return;
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
          transformStyle: "preserve-3d",
          clipPath: "polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 0 100%)"
        }}
        className="card w-full relative overflow-hidden cursor-pointer bg-slate-900 border border-slate-700/50 hover:border-sky-500/50 transition-colors duration-300"
      >
        <div className="absolute inset-0 bg-slate-800 z-0" />

        <div
          className="absolute inset-[1px] bg-slate-900 z-10"
          style={{ clipPath: "polygon(0 0, calc(100% - 29px) 0, 100% 29px, 100% 100%, 0 100%)" }}
        />

        <div className="relative z-20 transform-none md:[transform:translateZ(40px)] p-8 flex flex-col items-center">
          <div
            className="w-32 h-32 mb-6 bg-slate-800 relative flex items-center justify-center border border-slate-700/50 shadow-inner"
            style={{ clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)" }}
          >
            <div
              className="absolute inset-[1px] bg-slate-900 flex items-center justify-center"
              style={{ clipPath: "polygon(0 0, calc(100% - 19px) 0, 100% 19px, 100% 100%, 0 100%)" }}
            >
              <svg className="w-12 h-12 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </div>

          <h3 className="text-xl text-white font-semibold mb-2 text-center">{member.name}</h3>
          <p className="text-sky-400 text-sm font-medium mb-8 text-center h-10 flex items-center justify-center">{member.role}</p>

          <div className="flex gap-4 w-full justify-center border-t border-slate-800/80 pt-6 mt-auto">
            <a href={member.linkedin} className="text-slate-400 hover:text-sky-400 transition-colors" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href={member.github} className="text-slate-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Team = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 10000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    pauseOnHover: true,
    swipeToSlide: true,
    arrows: false,
  };

  return (
    <section className="w-full min-h-screen relative flex flex-col justify-center py-24 md:py-32 bg-slate-900 border-t border-slate-800" id="team">
      <FadeIn className="w-full">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16 opacity-80 max-w-6xl mx-auto px-6 md:px-12">
          <span className="font-mono text-sky-400 text-lg">03</span>
          <div className="h-[1px] w-12 bg-sky-400/50"></div>
          <p className="uppercase tracking-widest text-slate-400 text-sm font-semibold">Nosso Time</p>
        </div>

        <div className="mb-16 max-w-6xl mx-auto px-6 md:px-12">
          <Heading2 className="text-white leading-tight">
            Os especialistas por trás das soluções.
          </Heading2>
        </div>

        {/* Carousel */}
        <div className="w-full pb-8">
          <Slider {...settings}>
            {teamMembers.map((member, idx) => (
              <TeamCard key={idx} member={member} />
            ))}
          </Slider>
        </div>
      </FadeIn>

      <NextSectionArrow targetId="contact" />
    </section>
  );
};
