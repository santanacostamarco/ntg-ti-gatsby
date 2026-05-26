import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Banner } from "../components/sections/Banner";
import { About } from "../components/sections/About";
import { Portfolio } from "../components/sections/Portfolio";
import { Team } from "../components/sections/Team";
import { Contact } from "../components/sections/Contact";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="bg-slate-950 min-h-screen text-slate-300 font-sans selection:bg-sky-500/30 selection:text-sky-200 overflow-x-hidden w-full">
      <Banner />
      <About />
      <Portfolio />
      <Team />
      <Contact />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>NTG-TI | Consultoria de Negócios e TI</title>
    <meta name="description" content="NTG-TI: Desenvolvemos softwares sob medida com arquiteturas de alta performance para impulsionar a inovação do seu negócio." />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap" rel="stylesheet" />
  </>
);
