"use client";

const LAYERS = [
  { src: "/images/cloud-1-cropped.png", alt: "Clouds overlay", speed: "-80%", from: "100%" },
  { src: "/images/cloud-2-full.png", alt: "Clouds overlay 2", speed: "-10%", from: "100%" },
];

export function HeroClouds() {
  return (
    <>
      {LAYERS.map((layer) => (
        <div
          key={layer.src}
          className="clouds-overlay_wrap"
          data-scroll-speed={layer.speed}
          data-scroll-from={layer.from}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={layer.src} alt={layer.alt} width={1920} height={1080} />
        </div>
      ))}
    </>
  );
}
