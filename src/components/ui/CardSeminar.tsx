// components/ui/InfoCard.tsx
import { type LucideIcon } from "lucide-react";

interface InfoCardProps {
    icon: LucideIcon;
    text: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon: Icon, text }) => {
    return (
        <div className=" ">
        <div className="bg-white flex items-center gap-5 p-5 rounded-xl border border-gray-200 border-r-4 border-r-[#8b2551]">
            <div className="bg-[#8b2551] rounded-xl p-4 flex items-center justify-center ">
                <Icon className="text-white w-7 h-7" />
            </div>
            <p className="text-slate-600 text-base">{text}</p>
        </div>
        </div>
    );
};

export default InfoCard;