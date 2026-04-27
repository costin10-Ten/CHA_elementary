import TipBox from "@/components/mascots/TipBox";
import Tag from "@/components/ui/Tag";
import Link from "next/link";
import styles from "../water-chemistry/page.module.css";

export const metadata = { title: "認識 GHS 危險標誌 | 化學物質科普知識園區" };

const GHS_SYMBOLS = [
  { icon: "💣", label: "爆炸物",     desc: "此物質可能爆炸，遠離熱源和明火。" },
  { icon: "🔥", label: "易燃物",     desc: "容易燃燒，遠離火源。" },
  { icon: "☢️", label: "氧化劑",     desc: "可能助燃其他物質，引發火災。" },
  { icon: "⚠️", label: "有害物質",   desc: "可能對健康造成傷害，接觸需謹慎。" },
  { icon: "☠️", label: "急性毒性",   desc: "少量即可導致嚴重傷害或死亡。" },
  { icon: "🧪", label: "腐蝕性",     desc: "會腐蝕皮膚、眼睛和金屬。" },
  { icon: "💀", label: "健康危害",   desc: "長期接觸可能致癌或損傷器官。" },
  { icon: "🌊", label: "環境危害",   desc: "對水生生物有毒，會破壞環境。" },
  { icon: "🫁", label: "氣體加壓",   desc: "高壓容器，有爆裂危險。" },
];

export default function GHSPage() {
  return (
    <article className={`section ${styles.article}`}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.articleContent}>
          <div className={styles.header}>
            <div className={styles.metaRow}>
              <Tag color="coral" variant="chip">危險化學物質</Tag>
              <span className={styles.metaInfo}>2026-04-15 · 閱讀約 7 分鐘</span>
            </div>
            <h1 className={styles.title}>認識 GHS 危險標誌</h1>
            <p className={styles.lead}>
              當你在超市看到清潔劑、農藥或工業用品上有奇怪的橘紅色圖案，
              那就是 GHS 危險標誌！學會讀懂這些標誌，是保護自己的重要技能。
            </p>
          </div>

          <div className={styles.body}>
            <h2>什麼是 GHS？</h2>
            <p>
              GHS（Globally Harmonized System of Classification and Labelling of Chemicals）
              是聯合國制定的「化學品全球調和分類及標示制度」。
              全球各國都使用相同的標誌，讓任何人不管說什麼語言，都能看懂危險警告！
            </p>

            <TipBox mood="thinking" title="鴞博士重要提醒" variant="warning">
              <p>看到這些標誌要特別小心！絕對不可以模仿電影情節去接觸危險化學品。
              有問題請立刻告訴大人。</p>
            </TipBox>

            <h2>GHS 9 大象形圖</h2>
            <p>GHS 共有 9 個標準象形圖，每個都是橘紅色菱形底搭配黑色圖案：</p>

            <div className={styles.chemFormulas} style={{ flexWrap: "wrap" }}>
              {GHS_SYMBOLS.map((s) => (
                <div key={s.label} className={styles.formula} style={{ minWidth: 120 }}>
                  <span style={{ fontSize: 36 }}>{s.icon}</span>
                  <code className="formula" style={{ fontSize: "var(--fs-small)", background: "none", padding: 0, fontFamily: "var(--font-body)" }}>
                    {s.label}
                  </code>
                  <span style={{ fontSize: "var(--fs-caption)", color: "var(--ink-3)", textAlign: "center" }}>{s.desc}</span>
                </div>
              ))}
            </div>

            <TipBox mood="smile" title="小提醒" variant="success">
              <p>在台灣，依照《職業安全衛生法》規定，危險化學品必須貼上中文的 GHS 標示和安全資料表。
              如果你在家裡看到沒有標示的瓶瓶罐罐，要請大人協助確認！</p>
            </TipBox>
          </div>

          <div className={styles.navRow}>
            <Link href="/knowledge" className={styles.backLink}>← 回文章列表</Link>
            <Link href="/game" className={styles.challengeLink}>挑戰本章關卡 →</Link>
          </div>
        </div>

        <aside className={styles.sidebar}>
          <div className={styles.sideCard}>
            <h3 className={styles.sideTitle}>相關文章</h3>
            <div className={styles.relatedLinks}>
              <Link href="/knowledge/water-chemistry">水是怎麼變乾淨的？</Link>
              <Link href="/knowledge/plastic-types">塑膠編號你看懂了嗎？</Link>
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}
