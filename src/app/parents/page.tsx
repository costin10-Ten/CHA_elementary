import OwlDoctor from "@/components/mascots/OwlDoctor";
import Card from "@/components/ui/Card";
import styles from "./page.module.css";

export const metadata = {
  title: "家長/教師專區 | 化學物質科普知識園區",
};

export default function ParentsPage() {
  return (
    <div className={`section ${styles.page}`}>
      <div className="container">
        <div className={styles.header}>
          <OwlDoctor mood="smile" size={96} />
          <div>
            <h1>家長 / 教師專區</h1>
            <p className={styles.subtitle}>幫助孩子在安全的環境中學習化學知識的資源與指引。</p>
          </div>
        </div>

        <div className={styles.grid}>
          {[
            { icon: "📋", title: "課程對應表", desc: "本網站內容與國小自然科學課綱對照，方便教師規劃課程。" },
            { icon: "🖨️", title: "可列印學習單", desc: "下載各主題學習單，配合課堂教學使用。" },
            { icon: "👁️", title: "家長監護指引", desc: "如何引導孩子安全使用本網站，以及補充說明資源。" },
            { icon: "📞", title: "聯絡我們", desc: "如有課程合作或資源請求，歡迎與化學物質管理署聯繫。" },
          ].map((item) => (
            <Card key={item.title} className={styles.infoCard}>
              <span className={styles.cardIcon}>{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
