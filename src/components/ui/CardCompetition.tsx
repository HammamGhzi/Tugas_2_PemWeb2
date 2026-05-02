// components/ui/EventCard.tsx
import Button from "./Button";

interface EventCardProps {
  image: string;
  title: string;
  description: string;
  onDetail?: () => void;
}

const EventCard: React.FC<EventCardProps> = ({ image, title, description }) => {
  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <img src={image} alt={title} className="w-full h-64 object-cover" />

      <div className="p-5 flex flex-col gap-3">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="text-gray-600 text-base font-serif mb-3 text-left leading-relaxed">{description}</p>
        <div >
          <Button label="Info Selengkapnya" variant="primary" />
        </div>
      </div>
    </div>
  );
};

export default EventCard;
