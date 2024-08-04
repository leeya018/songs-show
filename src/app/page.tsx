"use client";
import React from "react";
import Slideshow from "../components/Slideshow";
import { songList } from "@/util";
import SongCard from "@/components/SongCard";
import Footer from "@/components/Footer";
import CreatorCard from "@/components/CreatorCard";

export default function HomePage() {
  return (
    <div className="w-full h-screen overflow-auto">
      <Slideshow />
      <div className="mx-5 md:mx-10 lg:mx-20 flex justify-center mb-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-5 mt-8 ">
          {songList.map((song, index) => (
            <SongCard key={index} {...song} />
          ))}
        </div>
      </div>
      <div className="flex justify-center mb-20 ">
        <CreatorCard />
      </div>
      <Footer />
    </div>
  );
}
