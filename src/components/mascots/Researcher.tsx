import styles from "./mascots.module.css";
import type { MascotMood } from "./OwlDoctor";

interface Props {
  mood?: MascotMood;
  size?: number;
  className?: string;
  animate?: boolean;
  wave?: boolean;
}

export default function Researcher({ mood = "smile", size = 120, className = "", animate = true, wave = false }: Props) {
  return (
    <div
      className={`${styles.mascot} ${animate ? styles.bob : ""} ${className}`}
      style={{ width: size, height: size }}
      role="img"
      aria-label={`小研究員 Mei – ${moodLabel(mood)}`}
    >
      <svg viewBox="0 0 120 130" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size * (130/120)}>
        {/* Body / Lab coat */}
        <rect x="30" y="72" width="60" height="50" rx="12" fill="white" stroke="#2A2620" strokeWidth="2.5"/>
        <rect x="30" y="72" width="60" height="50" rx="12" fill="#A6C83A" opacity=".15"/>
        {/* Coat buttons */}
        <circle cx="60" cy="82" r="2" fill="#2A2620"/>
        <circle cx="60" cy="91" r="2" fill="#2A2620"/>
        {/* Pocket */}
        <rect x="36" y="88" width="14" height="12" rx="3" fill="#EAF2C8" stroke="#2A2620" strokeWidth="1.5"/>
        {/* Pencil in pocket */}
        <rect x="40" y="85" width="4" height="14" rx="1.5" fill="#FFD93D" stroke="#2A2620" strokeWidth="1"/>
        {/* Head */}
        <ellipse cx="60" cy="50" rx="24" ry="26" fill="#FDBCB4" stroke="#2A2620" strokeWidth="2.5"/>
        {/* Hair */}
        <path d="M36 44 Q38 24 60 22 Q82 24 84 44 Q76 32 60 30 Q44 32 36 44 Z" fill="#3A352D"/>
        {/* Goggles strap */}
        <path d="M36 42 Q60 36 84 42" stroke="#A6C83A" strokeWidth="5" fill="none" strokeLinecap="round"/>
        {/* Goggle lenses */}
        <rect x="38" y="42" width="18" height="13" rx="5" fill="#D5EAF6" stroke="#2A2620" strokeWidth="2" opacity=".85"/>
        <rect x="64" y="42" width="18" height="13" rx="5" fill="#D5EAF6" stroke="#2A2620" strokeWidth="2" opacity=".85"/>
        {/* Goggle bridge */}
        <line x1="56" y1="48" x2="64" y2="48" stroke="#2A2620" strokeWidth="2"/>
        {/* Eyes */}
        <MeiEyes mood={mood} />
        {/* Cheeks */}
        <ellipse cx="42" cy="58" rx="6" ry="4" fill="#FF8A5C" opacity=".4"/>
        <ellipse cx="78" cy="58" rx="6" ry="4" fill="#FF8A5C" opacity=".4"/>
        {/* Mouth */}
        <MeiMouth mood={mood} />
        {/* Arms */}
        <path
          d="M30 82 Q18 86 16 96 Q14 106 22 108 Q28 110 32 100"
          fill="#FDBCB4" stroke="#2A2620" strokeWidth="2.5"
          className={wave ? styles.wave : ""}
        />
        <path d="M90 82 Q102 86 104 96 Q106 106 98 108 Q92 110 88 100"
          fill="#FDBCB4" stroke="#2A2620" strokeWidth="2.5"/>
        {/* Hands */}
        <circle cx="20" cy="109" r="6" fill="#FDBCB4" stroke="#2A2620" strokeWidth="2"/>
        <circle cx="100" cy="109" r="6" fill="#FDBCB4" stroke="#2A2620" strokeWidth="2"/>
        {/* Legs */}
        <rect x="42" y="118" width="14" height="20" rx="6" fill="#1F7FB8" stroke="#2A2620" strokeWidth="2"/>
        <rect x="64" y="118" width="14" height="20" rx="6" fill="#1F7FB8" stroke="#2A2620" strokeWidth="2"/>
      </svg>
    </div>
  );
}

function MeiEyes({ mood }: { mood: MascotMood }) {
  const y = 52;
  if (mood === "sleep") {
    return (
      <>
        <path d={`M44 ${y} Q47 ${y-3} 50 ${y}`} stroke="#2A2620" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d={`M70 ${y} Q73 ${y-3} 76 ${y}`} stroke="#2A2620" strokeWidth="2" fill="none" strokeLinecap="round"/>
      </>
    );
  }
  if (mood === "surprise") {
    return (
      <>
        <circle cx="47" cy={y} r="6" fill="white"/><circle cx="73" cy={y} r="6" fill="white"/>
        <circle cx="48" cy={y} r="3.5" fill="#1A1814"/><circle cx="74" cy={y} r="3.5" fill="#1A1814"/>
      </>
    );
  }
  return (
    <>
      <ellipse cx="47" cy={y} rx="5" ry="5.5" fill="white"/>
      <ellipse cx="73" cy={y} rx="5" ry="5.5" fill="white"/>
      <circle cx="48" cy={y} r="3" fill="#1A1814"/>
      <circle cx="74" cy={y} r="3" fill="#1A1814"/>
      <circle cx="49" cy={y-1} r="1" fill="white"/>
      <circle cx="75" cy={y-1} r="1" fill="white"/>
    </>
  );
}

function MeiMouth({ mood }: { mood: MascotMood }) {
  if (mood === "smile" || mood === "proud") {
    return <path d="M52 62 Q60 68 68 62" stroke="#2A2620" strokeWidth="2.5" fill="none" strokeLinecap="round"/>;
  }
  if (mood === "oops") {
    return <circle cx="60" cy="64" r="4" fill="#2A2620" opacity=".7"/>;
  }
  if (mood === "thinking") {
    return <path d="M54 63 Q60 61 66 63" stroke="#2A2620" strokeWidth="2" fill="none" strokeLinecap="round"/>;
  }
  return <path d="M54 63 Q60 67 66 63" stroke="#2A2620" strokeWidth="2" fill="none" strokeLinecap="round"/>;
}

function moodLabel(mood: MascotMood) {
  const labels: Record<MascotMood, string> = {
    smile: "微笑", surprise: "驚喜", thinking: "思考中", oops: "啊喔", proud: "好棒", sleep: "睡覺",
  };
  return labels[mood];
}
