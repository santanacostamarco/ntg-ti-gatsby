import React from 'react';

interface NextSectionArrowProps {
  targetId: string;
}

export const NextSectionArrow = ({ targetId }: NextSectionArrowProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
      <button 
        onClick={handleClick}
        className="w-12 h-12 rounded-full bg-slate-900/50 backdrop-blur-md border border-slate-700 flex items-center justify-center text-sky-400 hover:bg-sky-900/50 hover:text-sky-300 hover:border-sky-500 hover:shadow-[0_0_15px_rgba(56,189,248,0.5)] transition-all cursor-pointer"
        aria-label="Ir para a próxima seção"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
  );
};
