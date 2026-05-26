import React, { useRef, useState } from "react";
import { Heading2 } from "../ui/Typography";
import { Input } from "../ui/Input";
import { Textarea } from "../ui/Textarea";
import { Button } from "../ui/Button";
import { FadeIn } from "../ui/FadeIn";

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <section className="w-full min-h-screen relative flex flex-col justify-center py-24 md:py-32 bg-slate-950 border-t border-slate-800" id="contact">
      <FadeIn className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16 opacity-80">
          <span className="font-mono text-sky-400 text-lg">04</span>
          <div className="h-[1px] w-12 bg-sky-400/50"></div>
          <p className="uppercase tracking-widest text-slate-400 text-sm font-semibold">Contato</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          {/* Coluna Esquerda - Chamada para Ação */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <Heading2 className="text-white leading-tight mb-6">Pronto para acelerar o seu negócio?</Heading2>
            <p className="text-lg text-slate-300 font-light leading-relaxed mb-10">
              Conecte-se com nossa equipe de especialistas. Estamos preparados para decifrar
              os seus desafios tecnológicos e desenhar as soluções definitivas para a sua empresa.
            </p>

            <div className="flex flex-col gap-6 text-slate-400 font-light">
              <div className="flex items-center gap-4 group cursor-default">
                <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-sky-400 group-hover:bg-sky-900/30 group-hover:border-sky-500 transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <span className="group-hover:text-sky-300 transition-colors">contato@ntgti.com.br</span>
              </div>

              <div className="flex items-center gap-4 group cursor-default">
                <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-sky-400 group-hover:bg-sky-900/30 group-hover:border-sky-500 transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <span className="group-hover:text-sky-300 transition-colors">Campinas, SP - Brasil</span>
              </div>
            </div>
          </div>

          {/* Coluna Direita - Formulário */}
          <div className="lg:col-span-7">
            <form
              ref={formRef}
              className="space-y-6 bg-slate-950 p-8 md:p-10 rounded-2xl border border-slate-800 shadow-[0_0_40px_rgba(0,0,0,0.5)] relative overflow-hidden group"
            >

              <div className="form-control z-10 relative">
                <label className="label">
                  <span className="label-text text-slate-400 font-medium tracking-wide text-xs uppercase">Seu Nome</span>
                </label>
                <Input type="text" placeholder="Ex: João da Silva" className="bg-slate-900/80 border-slate-700 text-white focus:border-sky-500 transition-colors backdrop-blur-sm" />
              </div>

              <div className="form-control z-10 relative">
                <label className="label">
                  <span className="label-text text-slate-400 font-medium tracking-wide text-xs uppercase">E-mail Corporativo</span>
                </label>
                <Input type="email" placeholder="nome@empresa.com" className="bg-slate-900/80 border-slate-700 text-white focus:border-sky-500 transition-colors backdrop-blur-sm" />
              </div>

              <div className="form-control z-10 relative">
                <label className="label">
                  <span className="label-text text-slate-400 font-medium tracking-wide text-xs uppercase">Mensagem</span>
                </label>
                <Textarea placeholder="Como podemos impulsionar a inovação do seu negócio?" rows={5} className="bg-slate-900/80 border-slate-700 text-white focus:border-sky-500 transition-colors backdrop-blur-sm resize-none" />
              </div>

              <div className="pt-4 form-control mt-6 z-10 relative">
                <Button type="button" variant="primary" className="w-full bg-sky-600 hover:bg-sky-500 text-white border-none shadow-[0_0_15px_rgba(56,189,248,0.5)] uppercase tracking-widest text-sm font-semibold h-12">
                  Enviar Mensagem
                </Button>
              </div>
            </form>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};
