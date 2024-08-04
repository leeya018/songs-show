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
}

export const songList: SongItem[] = [
  {
    id: "1",
    image: "/images/1.jpg", // Replace with the actual path to the image
    title: "My Hero Academia (aka Boku no Hero Academia)",
    description: "5 Songs",
  },
  {
    id: "2",
    image: "/images/2.jpg",
    title: "Another Show",
    description: "10 Songs",
  },
  {
    id: "3",
    image: "/images/1.jpg", // Replace with the actual path to the image
    title: "My Hero Academia (aka Boku no Hero Academia)",
    description: "5 Songs",
  },
  {
    id: "4",
    image: "/images/2.jpg",
    title: "Another Show",
    description: "10 Songs",
  },
  {
    id: "5",
    image: "/images/1.jpg", // Replace with the actual path to the image
    title: "My Hero Academia (aka Boku no Hero Academia)",
    description: "5 Songs",
  },
  {
    id: "6",
    image: "/images/2.jpg",
    title: "Another Show",
    description: "10 Songs",
  },
  {
    id: "7",
    image: "/images/1.jpg", // Replace with the actual path to the image
    title: "My Hero Academia (aka Boku no Hero Academia)",
    description: "5 Songs",
  },
];
