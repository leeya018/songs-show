"use client";
import React from "react";
import Slideshow from "../components/Slideshow";
import { songList } from "@/util";
import SongCard from "@/components/SongCard";

export default function HomePage() {
  return (
    <div className="w-full h-screen">
      <Slideshow />
      <div className="mx-20">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 ">
          {songList.map((song, index) => (
            <SongCard key={index} {...song} />
          ))}
        </div>
      </div>
    </div>
  );
}
