import React from "react";

export const Heading1 = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <h1 className={`font-sans text-4xl md:text-6xl font-extrabold tracking-tight text-white ${className}`}>{children}</h1>
);

export const Heading2 = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <h2 className={`font-sans text-3xl md:text-4xl font-bold tracking-tight text-white ${className}`}>{children}</h2>
);

export const Paragraph = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <p className={`text-base md:text-lg text-slate-300 leading-relaxed ${className}`}>{children}</p>
);
