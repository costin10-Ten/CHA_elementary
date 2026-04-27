import styles from "./Tag.module.css";

type TagColor = "blue" | "green" | "yellow" | "coral" | "pink" | "cyan";

interface Props {
  children: React.ReactNode;
  color?: TagColor;
  variant?: "tag" | "chip";
  className?: string;
}

export default function Tag({ children, color = "blue", variant = "tag", className = "" }: Props) {
  return (
    <span className={`${styles.base} ${styles[variant]} ${styles[color]} ${className}`}>
      {children}
    </span>
  );
}
