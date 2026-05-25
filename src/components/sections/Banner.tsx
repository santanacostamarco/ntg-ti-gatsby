import React, { useCallback, useEffect, useRef } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine, Container } from "tsparticles-engine";
import { Heading1 } from "../ui/Typography";

import { NextSectionArrow } from "../ui/NextSectionArrow";

export const Banner = () => {
  const reqRef = useRef<number>();

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    if (!container) return;

    const animate = () => {
      const mouse = container.interactivity.mouse.position;
      if (mouse && mouse.x !== undefined && mouse.y !== undefined) {
        const radius = 250; 
        const maxAngle = 0.04; // Força do desvio (radianos por frame)

        const particlesArray = (container.particles as any)._array || [];
        particlesArray.forEach((particle: any) => {
          const dx = particle.position.x - mouse.x;
          const dy = particle.position.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Efeito de Lente Gravitacional: apenas dentro do raio de influência
          if (dist < radius && dist > 0) {
            // Força aumenta quanto mais perto do centro
            const force = (radius - dist) / radius;
            
            // Produto vetorial entre a velocidade da partícula e a direção do mouse
            // Isso nos diz se devemos curvar a trajetória para a esquerda ou para a direita
            const cross = -particle.velocity.x * dy + particle.velocity.y * dx;
            const sign = cross > 0 ? 1 : cross < 0 ? -1 : 0;
            
            // Ângulo de deflexão
            const theta = force * maxAngle * sign;
            
            const cos = Math.cos(theta);
            const sin = Math.sin(theta);
            
            const vx = particle.velocity.x;
            const vy = particle.velocity.y;
            
            // Rotaciona o vetor velocidade (muda a direção sem alterar a velocidade do movimento)
            particle.velocity.x = vx * cos - vy * sin;
            particle.velocity.y = vx * sin + vy * cos;
          }
        });
      }
      reqRef.current = requestAnimationFrame(animate);
    };

    if (reqRef.current) cancelAnimationFrame(reqRef.current);
    reqRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    return () => {
      if (reqRef.current) cancelAnimationFrame(reqRef.current);
    };
  }, []);

  return (
    <div className="relative w-full h-screen bg-slate-950 flex items-center justify-center overflow-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: { enable: false, zIndex: 0 },
          background: { color: { value: "transparent" } },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "connect" },
              resize: true,
            },
            modes: {
              connect: { distance: 150, radius: 200, links: { opacity: 0.35 } },
            },
          },
          particles: {
            color: { value: "#ffffff" },
            links: { color: "#38bdf8", distance: 150, enable: false, opacity: 0.8, width: 1 },
            collisions: { enable: true },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              random: true,
              speed: 0.5,
              straight: false,
            },
            number: { density: { enable: true, area: 800 }, value: 80 },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 2 } },
          },
          emitters: {
            direction: "none",
            rate: {
              delay: { min: 3, max: 8 }, // Intervalo aleatório entre 3 e 8 segundos
              quantity: 1,
            },
            position: { x: 50, y: 50 },
            size: { width: 100, height: 100, mode: "percent" },
            particles: {
              color: { value: "#38bdf8" },
              move: {
                speed: { min: 6, max: 12 }, // Muito mais rápido que os normais (0.5)
                straight: true,
                outModes: { default: "destroy" }, // Somem quando saem da tela
              },
              size: { value: { min: 2, max: 3 } },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 w-full h-full"
      />
      
      <div className="relative z-10 text-center pointer-events-none">
        <Heading1 className="drop-shadow-[0_0_20px_rgba(56,189,248,0.8)] text-transparent bg-clip-text bg-gradient-to-r from-white to-sky-200">
          NTG-TI
        </Heading1>
        <p className="font-mono mt-4 text-xl md:text-2xl text-sky-400 font-light tracking-[0.2em] uppercase drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]">
          Inteligência em Negócios e TI
        </p>
      </div>
      
      <NextSectionArrow targetId="about" />
    </div>
  );
};
