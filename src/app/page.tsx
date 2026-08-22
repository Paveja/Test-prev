"use client";

import { useState } from "react";

const CONFETTI_COLORS = ["#ff5d8f", "#ffc857", "#5ce1e6", "#8b7cff", "#7ed957"];
const confettiPieces = Array.from({ length: 72 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 101}%`,
  delay: `${(index % 12) * 0.06}s`,
  duration: `${2.4 + (index % 7) * 0.18}s`,
  color: CONFETTI_COLORS[index % CONFETTI_COLORS.length],
  rotation: `${(index * 41) % 360}deg`,
}));

export default function Home() {
  const [celebration, setCelebration] = useState(0);

  return (
    <main className="celebration-page">
      <div className="glow glow-one" aria-hidden="true" />
      <div className="glow glow-two" aria-hidden="true" />
      {celebration > 0 && (
        <div key={celebration} className="confetti" aria-hidden="true">
          {confettiPieces.map((piece) => (
            <span
              className="confetti-piece"
              key={`${celebration}-${piece.id}`}
              style={{
                left: piece.left,
                animationDelay: piece.delay,
                animationDuration: piece.duration,
                backgroundColor: piece.color,
                transform: `rotate(${piece.rotation})`,
              }}
            />
          ))}
        </div>
      )}

      <section className="hero-card" aria-labelledby="page-title">
        <p className="eyebrow">A tiny reason to celebrate</p>
        <h1 id="page-title">
          Make some <span>joy.</span>
        </h1>
        <p className="subtitle">One click. A whole lot of hurray.</p>
        <button className="hurray-button" onClick={() => setCelebration((value) => value + 1)}>
          <span>Hurray!</span>
          <span className="button-sparkle" aria-hidden="true">✦</span>
        </button>
        <p className="hint">Go on, press it again.</p>
      </section>
    </main>
  );
}
