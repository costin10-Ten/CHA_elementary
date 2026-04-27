import styles from "./mascots.module.css";

export type MascotMood = "smile" | "surprise" | "thinking" | "oops" | "proud" | "sleep";

interface Props {
  mood?: MascotMood;
  size?: number;
  className?: string;
  animate?: boolean;
}

export default function OwlDoctor({ mood = "smile", size = 120, className = "", animate = true }: Props) {
  return (
    <div
      className={`${styles.mascot} ${animate ? styles.bob : ""} ${className}`}
      style={{ width: size, height: size }}
      role="img"
      aria-label={`鴞博士 – ${moodLabel(mood)}`}
    >
      <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
        {/* Body */}
        <ellipse cx="60" cy="72" rx="34" ry="38" fill="#1F7FB8" stroke="#2A2620" strokeWidth="2.5"/>
        {/* Lab coat */}
        <ellipse cx="60" cy="80" rx="30" ry="32" fill="#F0F0F0" stroke="#2A2620" strokeWidth="2"/>
        <path d="M42 62 Q60 58 78 62 L80 98 Q60 102 40 98 Z" fill="white" stroke="#2A2620" strokeWidth="1.5"/>
        {/* Coat buttons */}
        <circle cx="60" cy="74" r="2" fill="#2A2620"/>
        <circle cx="60" cy="82" r="2" fill="#2A2620"/>
        <circle cx="60" cy="90" r="2" fill="#2A2620"/>
        {/* Head */}
        <ellipse cx="60" cy="42" rx="28" ry="26" fill="#5B3A1C" stroke="#2A2620" strokeWidth="2.5"/>
        {/* Ear tufts */}
        <path d="M38 22 L33 10 L42 18 Z" fill="#5B3A1C" stroke="#2A2620" strokeWidth="2"/>
        <path d="M82 22 L87 10 L78 18 Z" fill="#5B3A1C" stroke="#2A2620" strokeWidth="2"/>
        {/* Facial disc */}
        <ellipse cx="60" cy="44" rx="22" ry="20" fill="#D4956A"/>
        {/* Eyes */}
        <OwlEyes mood={mood} />
        {/* Glasses */}
        <circle cx="49" cy="44" r="10" stroke="#2A2620" strokeWidth="2" fill="none" opacity="0.7"/>
        <circle cx="71" cy="44" r="10" stroke="#2A2620" strokeWidth="2" fill="none" opacity="0.7"/>
        <line x1="59" y1="44" x2="61" y2="44" stroke="#2A2620" strokeWidth="2"/>
        <line x1="38" y1="42" x2="32" y2="40" stroke="#2A2620" strokeWidth="2"/>
        <line x1="82" y1="42" x2="88" y2="40" stroke="#2A2620" strokeWidth="2"/>
        {/* Beak */}
        <polygon points="60,52 55,58 65,58" fill="#F5A623" stroke="#2A2620" strokeWidth="1.5"/>
        {/* Wings */}
        <OwlWings />
        {/* Mood extras */}
        <MoodExtras mood={mood} />
      </svg>
    </div>
  );
}

function OwlEyes({ mood }: { mood: MascotMood }) {
  if (mood === "sleep") {
    return (
      <>
        <path d="M44 44 Q49 40 54 44" stroke="#2A2620" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <path d="M66 44 Q71 40 76 44" stroke="#2A2620" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      </>
    );
  }
  if (mood === "surprise") {
    return (
      <>
        <circle cx="49" cy="44" r="7" fill="white"/>
        <circle cx="71" cy="44" r="7" fill="white"/>
        <circle cx="51" cy="43" r="4" fill="#1A1814"/>
        <circle cx="73" cy="43" r="4" fill="#1A1814"/>
        <circle cx="52" cy="41" r="1.5" fill="white"/>
        <circle cx="74" cy="41" r="1.5" fill="white"/>
      </>
    );
  }
  return (
    <>
      <circle cx="49" cy="44" r="6" fill="white" className={styles.blinkable}/>
      <circle cx="71" cy="44" r="6" fill="white" className={styles.blinkable}/>
      <circle cx="50" cy="44" r="3.5" fill="#1A1814"/>
      <circle cx="72" cy="44" r="3.5" fill="#1A1814"/>
      <circle cx="51" cy="43" r="1.2" fill="white"/>
      <circle cx="73" cy="43" r="1.2" fill="white"/>
    </>
  );
}

function OwlWings() {
  return (
    <>
      <path d="M28 65 Q20 72 24 84 Q32 80 36 70 Z" fill="#1F7FB8" stroke="#2A2620" strokeWidth="2"/>
      <path d="M92 65 Q100 72 96 84 Q88 80 84 70 Z" fill="#1F7FB8" stroke="#2A2620" strokeWidth="2"/>
    </>
  );
}

function MoodExtras({ mood }: { mood: MascotMood }) {
  if (mood === "proud") {
    return (
      <>
        <path d="M50 60 Q60 66 70 60" stroke="#2A2620" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M86 28 L90 24 L88 30 L94 28 L90 34 Z" fill="#FFD93D" stroke="#2A2620" strokeWidth="1.5"/>
      </>
    );
  }
  if (mood === "thinking") {
    return (
      <>
        <path d="M50 60 Q60 58 70 60" stroke="#2A2620" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <circle cx="82" cy="24" r="3" fill="#2A2620" opacity=".4"/>
        <circle cx="88" cy="18" r="4" fill="#2A2620" opacity=".3"/>
        <circle cx="96" cy="12" r="5" fill="#2A2620" opacity=".2"/>
      </>
    );
  }
  if (mood === "oops") {
    return (
      <path d="M52 62 Q60 58 68 62" stroke="#2A2620" strokeWidth="2" fill="none" strokeLinecap="round"/>
    );
  }
  if (mood === "smile") {
    return (
      <path d="M50 60 Q60 67 70 60" stroke="#2A2620" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    );
  }
  return null;
}

function moodLabel(mood: MascotMood) {
  const labels: Record<MascotMood, string> = {
    smile: "微笑", surprise: "驚喜", thinking: "思考中", oops: "啊喔", proud: "好棒", sleep: "睡覺",
  };
  return labels[mood];
}
