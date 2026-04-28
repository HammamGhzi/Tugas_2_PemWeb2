import { type ReactNode } from 'react';

interface CardProps {
  title: string;
  description: string;
  children?: ReactNode;
}

export default function Card({ title, description, children }: CardProps) {
  return (
    <div className="bg-zinc-50 rounded-xl shadow-5xl shadow-gray-100 relative overflow-hidden flex flex-col h-full border ">
      <div className="absolute right-0 top-0 bottom-0 w-2 bg-[#8b2551]"></div>
      <div className="p-8 lg:p-6 xl:p-8  flex flex-col">
        <h3 className="text-xl font-bold text-[#8b2551] mb-5">{title}</h3>
        <p className={`text-slate-600 text-[15px] leading-relaxed  ${children ? 'mb-8' : ''}`}>
          {description}
        </p>
        {children && (
          <div className="mt-auto">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}