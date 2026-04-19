interface SpeakerCardProps {
  name: string;
  role: string;
  imageUrl: string;
}

export const SpeakerCard: React.FC<SpeakerCardProps> = ({
  name,
  role,
  imageUrl,
}) => {
  return (
    <div className="cursor-pointer flex flex-col items-center gap-4 group">
      <div className="relative h-1/3 z-1">
        <img
          src={imageUrl}
          alt={name}
          className="h-64 w-64 rounded-full border-10 border-red-900 mx-auto group-hover:scale-105 transition-transform duration-300 object-cover"
        />
      </div>
      <div className="cursor-pointer flex flex-col items-center h-2/3 border-4 border-red-900 w-full p-4 rounded-lg relative py-10 shadow-xl shadow-black/20 group-hover:shadow-2xl group-hover:shadow-black/40 transition-all duration-300">
        //card overlay
        <div className="absolute bottom-0 px-4 py-6 rounded-lg w-full h-full flex flex-col items-center gap-2 group-hover:bg-red-200 backdrop-blur-sm transition-all duration-300"></div>
        <div className="absolute left-0 right-0 bottom-0 items-center justify-center p-4 flex flex-col gap-2">
          <h3 className="text-2xl text-red-900 font-semibold">{name}</h3>
          <p className="text-sm text-gray-600 text-center">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default SpeakerCard;