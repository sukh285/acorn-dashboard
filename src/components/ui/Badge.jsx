import React from 'react';
import { clsx } from 'clsx';
import { ArrowUp, ArrowDown } from 'lucide-react';

export const Badge = ({ children, variant = "neutral", trend, icon: Icon }) => {
  const variants = {
    neutral: "bg-gray-100 text-text-secondary",
    brand: "bg-brand text-white", // The dark pink/red
    success: "bg-green-100 text-green-700",
    outline: "border border-border text-text-secondary bg-transparent"
  };

  return (
    <span className={clsx(
      "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-bold tracking-wide",
      variants[variant]
    )}>
      {trend === 'up' && <ArrowUp size={10} strokeWidth={3} />}
      {trend === 'down' && <ArrowDown size={10} strokeWidth={3} />}
      {Icon && <Icon size={10} strokeWidth={3} />}
      {children}
    </span>
  );
};