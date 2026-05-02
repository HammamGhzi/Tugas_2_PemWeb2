
import { type LucideIcon, Calendar, Clock, MapPin } from "lucide-react";

interface WorkshopCardProps {
    icon: LucideIcon;
    title: string;
    date: string;
    time: string;
    location: string;
}

const WorkshopCard: React.FC<WorkshopCardProps> = ({ icon: Icon, title, date, time, location }) => {
    return (
        <div className="bg-white flex items-center gap-5 p-5 rounded-xl border border-gray-200 border-r-4 border-r-[#8b2551]">
            <div className="bg-[#8b2551] rounded-xl p-6 flex items-center justify-center ">
                <Icon className="text-white w-10 h-10" />
            </div>
            <div className="flex flex-col gap-1">
                <h3 className="text-lg font-bold text-slate-800">{title}</h3>
                <div className="flex items-center gap-2 text-slate-600 text-sm">
                    <Calendar className="w-4 h-4 text-[#8b2551]" />
                    <span>{date}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600 text-sm">
                    <Clock className="w-4 h-4 text-[#8b2551]" />
                    <span>{time}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600 text-sm">
                    <MapPin className="w-4 h-4 text-[#8b2551]" />
                    <span>{location}</span>
                </div>
            </div>
        </div>
    );
};

export default WorkshopCard;