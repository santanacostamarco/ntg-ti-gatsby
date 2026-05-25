import React from "react";

export const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input 
      {...props} 
      className={`input input-bordered w-full bg-slate-900 text-white border-slate-700 focus:border-primary focus:ring-1 focus:ring-primary ${props.className || ""}`}
    />
  );
};
