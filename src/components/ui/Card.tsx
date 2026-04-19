
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode; 
  className?: string;
}

export const Card = ({ children, className = "" }: CardProps) => {
  return (
    <div
      className={`cursor-pointer bg-white shadow-md rounded overflow-hidden border border-gray-300 border-r-6 border-r-red-900 p-6 ${className}`}
    >
      {children}
    </div>
  );
};