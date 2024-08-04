"use client";
import { songList } from "@/util";
import { useParams, useRouter } from "next/navigation";

const SongPage: React.FC = () => {
  //   const router = useRouter();
  const { id } = useParams();

  // Fetch or retrieve the song data using the ID (for now, using dummy data)

  const song = songList.find((song) => song.id === id);
  if (!song) throw new Error(`song with id : ${id} not exist`);
  return (
    <div className="h-screen w-full">
      <div className="relative w-full h-[40%]">
        <img
          src={song.image}
          alt={song.title}
          className="h-full w-full object-cover  mb-4"
        />
        <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 text-white">
          {song.title}
        </div>
      </div>
    </div>
  );
};

export default SongPage;
