import OwlDoctor from "./OwlDoctor";
import type { MascotMood } from "./OwlDoctor";
import styles from "./TipBox.module.css";

interface Props {
  children: React.ReactNode;
  mood?: MascotMood;
  title?: string;
  variant?: "info" | "warning" | "success";
}

export default function TipBox({ children, mood = "smile", title = "鴞博士小提醒", variant = "info" }: Props) {
  return (
    <aside className={`${styles.tipBox} ${styles[variant]}`} role="note">
      <div className={styles.mascotWrap}>
        <OwlDoctor mood={mood} size={64} />
        <div className={styles.tail} aria-hidden />
      </div>
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <div className={styles.body}>{children}</div>
      </div>
    </aside>
  );
}
