"use client";
import React, { useEffect, useRef } from "react";
import Plyr from "plyr";
import "plyr/dist/plyr.css";

export function ProjectSession() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      const player = new Plyr(videoRef.current, {
        controls: ["play"],
      });

      return () => {
        player.destroy();
      };
    }
  }, []);

  return (
    <section>
      <h1 className="text-4xl uppercase font-semibold relative left-24">Projects</h1>
      <div className="mt-12 relative flex items-center justify-between">
        <video ref={videoRef} className="max-w-[850px] object-cover min-h-[600px]" poster="/thumbnail.png" controls>
          <source src="videoTest.mp4" type="video/mp4" />
        </video>
        <h1 className="text-5xl font-black transform rotate-90 mr-[-93px]">Showcase</h1>
      </div>
    </section>
  );
}
