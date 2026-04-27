import styles from "./Card.module.css";

interface Props {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "accent" | "featured";
  as?: keyof JSX.IntrinsicElements;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export default function Card({ children, className = "", variant = "default", as: Tag = "div", onClick, style }: Props) {
  return (
    <Tag
      className={`${styles.card} ${styles[variant]} ${onClick ? styles.clickable : ""} ${className}`}
      onClick={onClick}
      style={style}
    >
      {children}
    </Tag>
  );
}
