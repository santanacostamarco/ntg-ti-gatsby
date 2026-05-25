import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "ghost" | "outline";
}

export const Button = ({ children, variant = "primary", className = "", ...props }: ButtonProps) => {
  const baseClass = "btn";
  const variantClass = variant === "primary" ? "btn-primary" 
    : variant === "secondary" ? "btn-secondary"
    : variant === "accent" ? "btn-accent"
    : variant === "outline" ? "btn-outline"
    : "btn-ghost";

  return (
    <button className={`${baseClass} ${variantClass} ${className}`} {...props}>
      {children}
    </button>
  );
};
