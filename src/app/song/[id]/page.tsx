"use client";
import Footer from "@/components/Footer";
import SongLyrics from "@/components/SongLyrics";
import { songList } from "@/util";
import { useParams, useRouter } from "next/navigation";

const SongPage: React.FC = () => {
  //   const router = useRouter();
  const { id } = useParams();
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const song = songList.find((song) => song.id === id);
  if (!song) throw new Error(`song with id : ${id} not exist`);
  return (
    <div className="w-full h-screen overflow-auto">
      <div className="relative w-full h-[40%]">
        <button
          onClick={handleBack}
          className="absolute top-4 left-4 bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-200 transition-colors"
        >
          &#10094; Back
        </button>
        <img
          src={song.image}
          alt={song.title}
          className="h-full w-full object-cover  mb-4"
        />
        <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 text-white">
          {song.title}
        </div>
      </div>
      <div className="px-5 mb-10 w-full flex justify-center md:px-10 lg:px-20 mt-10 ">
        <div className="flex w-full flex-col  md:flex-row  gap-10 ">
          <SongLyrics lyrics={song.lyrics} lyricsEn={song.lyricsEn} />

          <div className="flex-1">
            <iframe
              width="100%"
              height="400"
              src={song.youtubeLink}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="mt-10 flex w-full flex-col items-center p-4 rounded-md ">
              <h2 className="text-xl font-bold mb-2">Descripiton</h2>
              <p className="whitespace-pre-line">{song.description}</p>
            </div>
            <div className="mt-10 flex w-full flex-col items-center p-4 rounded-md ">
              <h2 className="text-xl font-bold mb-2">Credits</h2>
              <ul>
                {song.credits.map((credit, key) => (
                  <li key={key}>{credit}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SongPage;
