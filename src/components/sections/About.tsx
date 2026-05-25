import React from "react";
import { Heading2, Paragraph } from "../ui/Typography";
import { FadeIn } from "../ui/FadeIn";
import { NextSectionArrow } from "../ui/NextSectionArrow";

export const About = () => {
  const values = [
    "Excelência Técnica",
    "Inovação Contínua",
    "Foco no Resultado",
    "Transparência",
    "Agilidade",
    "Segurança da Informação"
  ];

  return (
    <section className="w-full min-h-screen relative flex flex-col justify-center py-24 md:py-32 bg-slate-900 border-t border-slate-800" id="about">
      <FadeIn className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Label (Inspiração da Referência) */}
        <div className="flex items-center gap-4 mb-16 opacity-80">
          <span className="font-mono text-sky-400 text-lg">01</span>
          <div className="h-[1px] w-12 bg-sky-400/50"></div>
          <p className="uppercase tracking-widest text-slate-400 text-sm font-semibold">Sobre Nós</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          {/* Coluna Esquerda - Título Impactante */}
          <div className="lg:col-span-5">
            <Heading2 className="text-white leading-tight">
              Tecnologia com propósito, escalabilidade e inteligência de negócios.
            </Heading2>
          </div>

          {/* Coluna Direita - Textos e Valores */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <Paragraph className="text-lg text-slate-300 font-light leading-relaxed">
              Somos uma consultoria estratégica focada na concepção e no desenvolvimento de ecossistemas digitais de alta performance. 
              Nossa missão é traduzir a complexidade do seu negócio em arquiteturas de software escaláveis, 
              robustas e preparadas para o mercado global.
            </Paragraph>
            <Paragraph className="text-lg text-slate-300 font-light leading-relaxed">
              Através de uma abordagem que funde o rigor da engenharia de software com uma visão afiada de produto, 
              projetamos sistemas que não apenas suportam as operações atuais, mas pavimentam o caminho para a inovação. 
              Construímos códigos limpos, rotas eficientes e interfaces definitivas que passam credibilidade desde o primeiro clique.
            </Paragraph>

            <div className="mt-8">
              <h3 className="text-white text-sm uppercase tracking-widest font-semibold mb-6">Nossos Valores</h3>
              <div className="flex flex-wrap gap-3">
                {values.map((value, index) => (
                  <span 
                    key={index} 
                    className="px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 text-sky-300 text-sm hover:bg-sky-900/20 hover:border-sky-500 hover:shadow-[0_0_15px_rgba(56,189,248,0.2)] transition-all cursor-default"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
      
      <NextSectionArrow targetId="works" />
    </section>
  );
};
