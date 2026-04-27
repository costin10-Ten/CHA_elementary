import styles from "./ProgressBar.module.css";

interface Props {
  value: number;
  max?: number;
  label?: string;
  color?: "primary" | "secondary" | "warning";
  size?: "sm" | "md" | "lg";
  animated?: boolean;
  className?: string;
}

export default function ProgressBar({ value, max = 100, label, color = "primary", size = "md", animated = true, className = "" }: Props) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div className={`${styles.wrap} ${className}`}>
      {label && (
        <div className={styles.labelRow}>
          <span className={styles.label}>{label}</span>
          <span className={styles.value}>{Math.round(pct)}%</span>
        </div>
      )}
      <div className={`${styles.track} ${styles[size]}`} role="progressbar"
        aria-valuenow={value} aria-valuemin={0} aria-valuemax={max} aria-label={label}>
        <div
          className={`${styles.fill} ${styles[color]} ${animated ? styles.animated : ""}`}
          style={{ "--pct": `${pct / 100}` } as React.CSSProperties}
        />
      </div>
    </div>
  );
}
