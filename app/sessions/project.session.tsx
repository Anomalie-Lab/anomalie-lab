"use client";
import React, { useEffect, useRef } from "react";
import "plyr/dist/plyr.css";

export function ProjectSession() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    import("plyr").then((PlyrModule) => {
      const Plyr = PlyrModule.default;
      if (videoRef.current) {
        const player = new Plyr(videoRef.current, {
          controls: ["play"],
        });

        player.on("pause", () => {
          if (videoRef.current) {
            videoRef.current.currentTime = 0;
          }
        });

        return () => {
          player.destroy();
        };
      }
    });
  }, []);

  return (
    <section className="relative overflow-hidden pb-12">
      <h1 className="text-4xl uppercase font-bold relative left-24 max-md:text-2xl max-md:left-12">Projects</h1>
      <div className="mt-14 flex items-center justify-between max-md:mt-5">
        <h1 className="text-6xl font-black transform rotate-90 uppercase absolute -right-36 top-3/5 max-lg:mr-0">Showcase</h1>
        <video ref={videoRef} className="max-w-[700px] object-cover min-h-[450px] max-lg:max-w-[90vw] max-md:min-h-[200px] max-sm:min-h-[300px] max-sm:max-lg:max-w-[85vw]  z-10" poster="/thumbnail.png" controls>
          <source src="videoTest.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
