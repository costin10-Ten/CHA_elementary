"use client";

import { useState, useEffect } from "react";
import styles from "./mascots.module.css";
import type { MascotMood } from "./OwlDoctor";

interface Props {
  mood?: MascotMood;
  size?: number;
  className?: string;
  animate?: boolean;
}

export default function Flasky({ mood = "smile", size = 100, className = "", animate = true }: Props) {
  const [bubbles, setBubbles] = useState<{ id: number; x: number; delay: number }[]>([]);

  useEffect(() => {
    if (!animate || mood === "sleep") return;
    const interval = setInterval(() => {
      setBubbles((prev) => {
        const next = prev.filter((b) => b.id > Date.now() - 1400);
        return [...next, { id: Date.now(), x: 52 + (Math.random() - .5) * 16, delay: 0 }];
      });
    }, 600);
    return () => clearInterval(interval);
  }, [animate, mood]);

  return (
    <div
      className={`${styles.mascot} ${animate ? styles.bob : ""} ${className}`}
      style={{ width: size, height: size }}
      role="img"
      aria-label={`燒瓶寶寶 Flasky – ${moodLabel(mood)}`}
    >
      <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size * (120/100)}>
        {/* Flask neck */}
        <rect x="38" y="10" width="24" height="32" rx="5" fill="#FFF9E6" stroke="#2A2620" strokeWidth="2.5"/>
        {/* Flask body */}
        <path d="M26 52 Q18 68 20 84 Q22 102 52 104 Q82 102 80 84 Q82 68 74 52 Z"
          fill="#FFD93D" stroke="#2A2620" strokeWidth="2.5"/>
        {/* Liquid fill */}
        <clipPath id="flask-clip">
          <path d="M26 52 Q18 68 20 84 Q22 102 52 104 Q82 102 80 84 Q82 68 74 52 Z"/>
        </clipPath>
        <rect x="16" y="72" width="72" height="40" fill="#5EE9F0" clipPath="url(#flask-clip)"/>
        {/* Liquid surface wave */}
        <path d="M22 72 Q37 68 52 72 Q67 76 78 72" stroke="#2A2620" strokeWidth="1.5" fill="none"
          clipPath="url(#flask-clip)"/>
        {/* Bubbles (SVG animated) */}
        {animate && mood !== "sleep" && (
          <>
            <circle cx="40" cy="85" r="3" fill="white" opacity=".6">
              <animate attributeName="cy" from="85" to="62" dur="1.2s" repeatCount="indefinite" begin="0s"/>
              <animate attributeName="opacity" from=".6" to="0" dur="1.2s" repeatCount="indefinite" begin="0s"/>
            </circle>
            <circle cx="55" cy="90" r="2" fill="white" opacity=".5">
              <animate attributeName="cy" from="90" to="66" dur="1.4s" repeatCount="indefinite" begin=".4s"/>
              <animate attributeName="opacity" from=".5" to="0" dur="1.4s" repeatCount="indefinite" begin=".4s"/>
            </circle>
            <circle cx="65" cy="82" r="2.5" fill="white" opacity=".55">
              <animate attributeName="cy" from="82" to="62" dur="1s" repeatCount="indefinite" begin=".8s"/>
              <animate attributeName="opacity" from=".55" to="0" dur="1s" repeatCount="indefinite" begin=".8s"/>
            </circle>
          </>
        )}
        {/* Flask label sticker */}
        <rect x="32" y="74" width="40" height="22" rx="4" fill="white" opacity=".7" stroke="#2A2620" strokeWidth="1"/>
        {/* Face */}
        <FlaskyFace mood={mood} />
        {/* Neck label line */}
        <line x1="38" y1="24" x2="62" y2="24" stroke="#A6C83A" strokeWidth="3" strokeLinecap="round"/>
        {/* Flask rim */}
        <rect x="34" y="8" width="32" height="6" rx="3" fill="#FFF9E6" stroke="#2A2620" strokeWidth="2"/>
        {/* Sleep Zzz */}
        {mood === "sleep" && (
          <>
            <text x="72" y="32" fontSize="10" fill="#6A6256" fontWeight="700">z</text>
            <text x="78" y="22" fontSize="13" fill="#6A6256" fontWeight="700">z</text>
            <text x="86" y="12" fontSize="16" fill="#6A6256" fontWeight="700">Z</text>
          </>
        )}
        {/* Proud star */}
        {mood === "proud" && (
          <path d="M75 28 L77 22 L79 28 L85 28 L80 32 L82 38 L77 34 L72 38 L74 32 L69 28 Z"
            fill="#FFD93D" stroke="#2A2620" strokeWidth="1.5"/>
        )}
      </svg>
    </div>
  );
}

function FlaskyFace({ mood }: { mood: MascotMood }) {
  const y = 80;
  const eyeY = y - 4;
  return (
    <>
      {/* Eyes */}
      {mood === "sleep" ? (
        <>
          <path d={`M43 ${eyeY} Q46 ${eyeY-3} 49 ${eyeY}`} stroke="#2A2620" strokeWidth="2" fill="none" strokeLinecap="round"/>
          <path d={`M55 ${eyeY} Q58 ${eyeY-3} 61 ${eyeY}`} stroke="#2A2620" strokeWidth="2" fill="none" strokeLinecap="round"/>
        </>
      ) : mood === "surprise" ? (
        <>
          <circle cx="46" cy={eyeY} r="4.5" fill="white" stroke="#2A2620" strokeWidth="1.5"/>
          <circle cx="58" cy={eyeY} r="4.5" fill="white" stroke="#2A2620" strokeWidth="1.5"/>
          <circle cx="47" cy={eyeY} r="2.5" fill="#1A1814"/>
          <circle cx="59" cy={eyeY} r="2.5" fill="#1A1814"/>
        </>
      ) : (
        <>
          <ellipse cx="46" cy={eyeY} rx="4" ry="4.5" fill="white" stroke="#2A2620" strokeWidth="1.5"/>
          <ellipse cx="58" cy={eyeY} rx="4" ry="4.5" fill="white" stroke="#2A2620" strokeWidth="1.5"/>
          <circle cx="47" cy={eyeY} r="2.2" fill="#1A1814"/>
          <circle cx="59" cy={eyeY} r="2.2" fill="#1A1814"/>
          <circle cx="47.8" cy={eyeY - 1} r=".8" fill="white"/>
          <circle cx="59.8" cy={eyeY - 1} r=".8" fill="white"/>
        </>
      )}
      {/* Cheeks */}
      <ellipse cx="38" cy={y + 2} rx="5" ry="3.5" fill="#FF8A5C" opacity=".4"/>
      <ellipse cx="66" cy={y + 2} rx="5" ry="3.5" fill="#FF8A5C" opacity=".4"/>
      {/* Mouth */}
      {mood === "smile" || mood === "proud" ? (
        <path d={`M46 ${y+4} Q52 ${y+9} 58 ${y+4}`} stroke="#2A2620" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      ) : mood === "oops" ? (
        <path d={`M46 ${y+6} Q52 ${y+2} 58 ${y+6}`} stroke="#2A2620" strokeWidth="2" fill="none" strokeLinecap="round"/>
      ) : (
        <path d={`M47 ${y+5} Q52 ${y+7} 57 ${y+5}`} stroke="#2A2620" strokeWidth="2" fill="none" strokeLinecap="round"/>
      )}
    </>
  );
}

function moodLabel(mood: MascotMood) {
  const labels: Record<MascotMood, string> = {
    smile: "微笑", surprise: "驚喜", thinking: "思考中", oops: "啊喔", proud: "好棒", sleep: "睡覺",
  };
  return labels[mood];
}
