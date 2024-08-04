interface Slide {
  image: string;
  text: string;
}

export const slides: Slide[] = [
  {
    image: "/images/1.jpg",
    text: "Soundtracks from Love Island (US) - 2196 Songs",
  },
  {
    image: "/images/2.jpg",
    text: "Soundtracks from Another Show - 1500 Songs",
  },
  {
    image: "/images/3.jpg",
    text: "Soundtracks from Another Show - 1400 Songs",
  },
  // Add more slides as needed
];

export interface SongItem {
  id: string;
  image: string;
  title: string;
  description: string;
  youtubeLink: string;
  lyrics: string[];
  lyricsEn: string[];
}

export const songList: SongItem[] = [
  {
    id: "1",
    image: "/images/1.jpg", // Replace with the actual path to the image
    title: "My Hero Academia (aka Boku no Hero Academia)",
    description:
      "חופש, חרות, במובן העמוק,מגיע אחרי דרך ארוכה. זו זכות ובחירה ועבודה פנימית עמוקה ואינטנסיבית..בפן האישי והלאומי. חשוב להכיר בזכות הזו שניתנה, זה גדול מכל אחד ואחת כאן ובעולם הנשמה שואפת למקום הטבעי שלה. אומי = אימי וגם האומה שלי. אומה- אומה כפשוטו, שלה שלו וגם אם. אומק= אימא אדמה ואם שלך ! כפי שאין ספק מי זו האם, כך אין ספק שזה הבית האדמה שלנו שלך שלך!",
    youtubeLink: "https://www.youtube.com/embed/_yNxbj9ePnQ",
    lyrics: [
      "ימים רבים באופק מחכה",
      "על לוח לב היא חרותה",
      "ללא לאות חותר למטרה",
      "החופש הוא אוויר לנשמה",
      "",
      "שנים דורות רחיים על צוואר",
      "אומה או אם דואגת חרדה",
      "לילות הראש חושב",
      "איך להתיר את הכבלים",
      "להישאר שלם בא בימים",
      "",
      "בצאת ישראל ממצרים",
      "בית יעקב מעם לועז",
      "היתה יהודה לקדשו",
      "ישראל ממשלותיו",
      "",
      "עשורים חלפו עברו ביעף",
      "ממלכות עלו והתנדפו",
      "ארץ קטנטנה עומדת על תילה",
      "ההבטחה מברית בין הבתרים",
      "ישנה",
      "",
      "בצאת ישראל ממצרים",
      "בית יעקב מעם לועז",
      "היתה יהודה לקדשו",
      "ישראל ממשלותיו",
    ],
    lyricsEn: [
      "Many days on the horizon waiting",
      "Engraved upon our heart",
      "Tirelessly striving for the goal",
      "Freedom is air for the soul",
      "",
      "Years and generations a grinding stone on her neck",
      "A nation, a mother worries, anxious",
      "At night, her mind thinking",
      "How to untie the cables",
      "and stay whole in the fullness of days",
      "",
      "When Israel went out of Egypt",
      "the House of Jacob from a people of a foreign tongue,",
      "Judah became his sanctuary",
      "Israel his Dominion",
      "",
      "Decades have passed in a flash",
      "Kingdoms rose and evaporated",
      "A tiny country stands still",
      "The promise of the covenant still exists",
      "",
      "When Israel went out of Egypt",
      "the House of Jacob from a people of a foreign tongue,",
      "Judah became his sanctuary",
      "Israel his Dominion",
    ],
  },
  {
    id: "2",
    image: "/images/2.jpg",
    title: "Another Show",
    description: "10 Songs",
    youtubeLink: "https://www.youtube.com/embed/_yNxbj9ePnQ",
    lyrics: ["These are the lyrics for the song..."],
    lyricsEn: ["tsnent ne rners hners hners"],
  },

  {
    id: "3",
    image: "/images/1.jpg", // Replace with the actual path to the image
    title: "My Hero Academia (aka Boku no Hero Academia)",
    description: "5 Songs",
    youtubeLink: "https://www.youtube.com/embed/_yNxbj9ePnQ",
    lyrics: ["These are the lyrics for the song..."],
    lyricsEn: ["tsnent ne rners hners hners"],
  },

  {
    id: "4",
    image: "/images/2.jpg",
    title: "Another Show",
    description: "10 Songs",
    youtubeLink: "https://www.youtube.com/embed/_yNxbj9ePnQ",
    lyrics: ["These are the lyrics for the song..."],
    lyricsEn: ["tsnent ne rners hners hners"],
  },

  {
    id: "5",
    image: "/images/1.jpg", // Replace with the actual path to the image
    title: "My Hero Academia (aka Boku no Hero Academia)",
    description: "5 Songs",
    youtubeLink: "https://www.youtube.com/embed/_yNxbj9ePnQ",
    lyrics: ["These are the lyrics for the song..."],
    lyricsEn: ["tsnent ne rners hners hners"],
  },

  {
    id: "6",
    image: "/images/2.jpg",
    title: "Another Show",
    description: "10 Songs",
    youtubeLink: "https://www.youtube.com/embed/_yNxbj9ePnQ",
    lyrics: ["These are the lyrics for the song..."],
    lyricsEn: ["tsnent ne rners hners hners"],
  },

  {
    id: "7",
    image: "/images/1.jpg", // Replace with the actual path to the image
    title: "My Hero Academia (aka Boku no Hero Academia)",
    description: "5 Songs",
    youtubeLink: "https://www.youtube.com/embed/_yNxbj9ePnQ",
    lyrics: ["These are the lyrics for the song..."],
    lyricsEn: ["tsnent ne rners hners hners"],
  },
];
