"use client";
import { useState, useRef } from "react";
import { PiPlayFill } from "react-icons/pi";

export function ProjectSection() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current && !isPlaying) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="flex  justify-between items-center">
      <div>
        <h1 className="text-4xl uppercase font-semibold relative left-24">
          Projects
        </h1>
        <div className="mt-12 relative">
          <video
            width="650px"
            height="400px"
            ref={videoRef}
            className="cover"
            poster={"/thumbnail.png"}
            onPlay={handlePlay}
          >
            <source src={"/videoTest.mp4"} type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
          {!isPlaying && (
            <button
              className="absolute inset-0 flex justify-center items-center"
              onClick={handlePlay}
            >
              <PiPlayFill className="text-5xl text-white" />
            </button>
          )}
        </div>
      </div>
      <div className="flex justify-end items-end">
        <h1 className="text-5xl font-black transform rotate-90 ">Showcase</h1>
      </div>
    </section>
  );
}
