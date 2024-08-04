import React, { useState } from "react";

const SongLyrics: React.FC<{ lyrics: string[]; lyricsEn: string[] }> = ({
  lyrics,
  lyricsEn,
}) => {
  const [isHebrew, setIsHebrew] = useState(true);

  const toggleLyrics = () => {
    setIsHebrew(!isHebrew);
  };

  return (
    <div className="flex-1 bg-gray-100 p-4 rounded-md relative">
      <button
        onClick={toggleLyrics}
        className="absolute top-4 right-4 bg-blue-500 text-white p-2 rounded-md shadow-md hover:bg-blue-600 transition-colors"
      >
        {isHebrew ? "Show English" : "Show Hebrew"}
      </button>
      <h2 className="text-xl font-bold mb-2">Lyrics</h2>
      <ul>
        {(isHebrew ? lyrics : lyricsEn).map((line, key) => (
          <li key={key}>{line}</li>
        ))}
      </ul>
    </div>
  );
};

export default SongLyrics;
