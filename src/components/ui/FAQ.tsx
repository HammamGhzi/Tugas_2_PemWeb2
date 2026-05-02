// components/ui/FaqAccordion.tsx
import { useState } from "react";

interface FaqItem {
    question: string;
    answer: string;
}

interface FaqAccordionProps {
    faqs: FaqItem[];
}

const FaqItem = ({ faq, isOpen, onToggle }: { faq: FaqItem; isOpen: boolean; onToggle: () => void }) => (
    <div className="bg-zinc-50 rounded-xl shadow-sm border relative overflow-hidden flex flex-col">
        <div className="absolute right-0 top-0 bottom-0 w-2 bg-[#8b2551]" />
        <div className={`px-6 pt-6 flex flex-col transition-all duration-300 ${isOpen ? "pb-6" : "pb-4"}`}>
            <div className="flex items-center gap-3 cursor-pointer" onClick={onToggle}>
                <div className="bg-gray-100 rounded-lg mb-2 p-1.5 w-8 h-8 flex items-center justify-center text-slate-600 text-sm shrink-0">
                    {isOpen ? "∧" : "∨"}
                </div>
                <h3 className={`text-lg mb-2  p-4 font-semibold  ${isOpen ? "font-bold text-slate-600" : "font-normal text-slate-700"}`}>
                    {faq.question}
                </h3>
            </div>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"}`}>
                <p className="ml-11 text-base py-3 text-slate-600 text-left mr-10 leading-relaxed">{faq.answer}</p>
            </div>
        </div>
    </div>
);

const FaqAccordion: React.FC<FaqAccordionProps> = ({ faqs }) => {
    const [openIndexes, setOpenIndexes] = useState<number[]>([]);

    const toggle = (index: number) => {
        setOpenIndexes(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index) 
                : [...prev, index]             
        );
    };

    return (
        <div className="flex gap-4 p-6 items-start">
            <div className="flex flex-col gap-4 flex-1">
                {faqs.filter((_, i) => i % 2 === 0).map((faq, index) => {
                    const realIndex = index * 2;
                    return (
                        <FaqItem
                            key={realIndex}
                            faq={faq}
                            isOpen={openIndexes.includes(realIndex)}
                            onToggle={() => toggle(realIndex)}
                        />
                    );
                })}
            </div>
            <div className="flex flex-col gap-4 flex-1">
                {faqs.filter((_, i) => i % 2 !== 0).map((faq, index) => {
                    const realIndex = index * 2 + 1;
                    return (
                        <FaqItem
                            key={realIndex}
                            faq={faq}
                            isOpen={openIndexes.includes(realIndex)}
                            onToggle={() => toggle(realIndex)}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default FaqAccordion;