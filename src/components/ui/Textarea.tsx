import React from "react";

export const Textarea = (props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return (
    <textarea 
      {...props} 
      className={`textarea textarea-bordered w-full bg-slate-900 text-white border-slate-700 focus:border-primary focus:ring-1 focus:ring-primary ${props.className || ""}`}
    />
  );
};
