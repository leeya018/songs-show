"use client";
import { SongItem } from "@/util";
import { useRouter } from "next/navigation";
const SongCard: React.FC<SongItem> = ({ id, image, title, description }) => {
  const router = useRouter();
  return (
    <div
      className="cursor-pointer bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg w-64 h-64 relative"
      onClick={() => router.push(`/song/${id}`)}
    >
      <img
        src={image}
        alt={title}
        className="object-cover h-full w-full bg-center transform transition-transform 
                        duration-300 hover:scale-105 "
      />
      <div className="p-4 absolute bottom-0 left-0">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default SongCard;
