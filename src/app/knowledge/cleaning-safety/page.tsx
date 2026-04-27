import TipBox from "@/components/mascots/TipBox";
import Tag from "@/components/ui/Tag";
import Link from "next/link";
import styles from "../water-chemistry/page.module.css";

export const metadata = { title: "清潔劑混合的危險！ | 化學物質科普知識園區" };

const DANGEROUS_COMBOS = [
  {
    combo: "漂白水 + 氨水（玻璃清潔劑）",
    result: "產生氯胺（Chloramine）",
    danger: "刺激眼、鼻、喉嚨，吸入過多可傷害肺部",
    emoji: "☠️",
  },
  {
    combo: "漂白水 + 酸性清潔劑（如廁所清潔劑）",
    result: "產生氯氣（Cl₂）",
    danger: "強烈刺激性氣體，濃度高時可致命",
    emoji: "☠️",
  },
  {
    combo: "漂白水 + 酒精（或醋）",
    result: "產生氯仿（CHCl₃）等物質",
    danger: "有毒有機化合物，傷害肝、腎",
    emoji: "⚠️",
  },
  {
    combo: "雙氧水（過氧化氫）+ 醋",
    result: "產生過氧乙酸",
    danger: "腐蝕性強，刺激皮膚和眼睛",
    emoji: "⚠️",
  },
];

export default function CleaningSafetyPage() {
  return (
    <article className={`section ${styles.article}`}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.articleContent}>
          <div className={styles.header}>
            <div className={styles.metaRow}>
              <Tag color="coral" variant="chip">危險物質辨識</Tag>
              <span className={styles.metaInfo}>2026-04-10 · 閱讀約 5 分鐘</span>
            </div>
            <h1 className={styles.title}>清潔劑混合的危險！</h1>
            <p className={styles.lead}>
              漂白水＋廁所清潔劑＝有毒氯氣！家用清潔劑絕對不能亂混，
              看似無害的日常用品，混合後可能產生危及生命的毒氣。
            </p>
          </div>

          <div className={styles.body}>
            <h2>漂白水的化學成分</h2>
            <p>
              家用漂白水的主要成分是<strong>次氯酸鈉（NaOCl）</strong>，
              是一種強氧化劑。它能有效殺菌、漂白，但化學活性很高，
              遇到其他化學物質容易發生危險反應。
            </p>

            <div className={styles.chemFormulas}>
              <div className={styles.formula}>
                <code className="formula">NaOCl</code>
                <span>次氯酸鈉（漂白水）</span>
              </div>
              <div className={styles.formula}>
                <code className="formula">HCl + NaOCl → Cl₂↑</code>
                <span>酸性清潔劑 + 漂白水 → 氯氣</span>
              </div>
            </div>

            <TipBox mood="thinking" title="鴞博士警告" variant="warning">
              <p>氯氣（Cl₂）是黃綠色有毒氣體，第一次世界大戰時曾被用作化學武器！
              在密閉的廁所裡混合漂白水和酸性清潔劑，吸入後果非常嚴重。</p>
            </TipBox>

            <h2>千萬不能混合的組合</h2>
            <div className={styles.chemFormulas} style={{ flexWrap: "wrap", gap: "var(--sp-4)" }}>
              {DANGEROUS_COMBOS.map((item) => (
                <div key={item.combo} className={styles.formula}
                  style={{ minWidth: 200, background: "#FFE8EA", borderColor: "var(--danger)", gap: "var(--sp-2)", alignItems: "flex-start" }}>
                  <span style={{ fontSize: 28 }}>{item.emoji}</span>
                  <strong style={{ fontFamily: "var(--font-rounded)", fontSize: "var(--fs-small)", color: "var(--danger)" }}>
                    {item.combo}
                  </strong>
                  <span style={{ fontSize: "var(--fs-caption)", color: "var(--ink-2)" }}>→ {item.result}</span>
                  <span style={{ fontSize: "var(--fs-caption)", color: "var(--danger)", fontWeight: 600 }}>{item.danger}</span>
                </div>
              ))}
            </div>

            <h2>萬一不小心混合了，怎麼辦？</h2>
            <ul style={{ paddingLeft: "var(--sp-5)", marginBottom: "var(--sp-4)" }}>
              <li style={{ marginBottom: "var(--sp-2)", lineHeight: 1.7 }}>立刻離開該區域，到室外或通風處。</li>
              <li style={{ marginBottom: "var(--sp-2)", lineHeight: 1.7 }}>打開門窗通風。</li>
              <li style={{ marginBottom: "var(--sp-2)", lineHeight: 1.7 }}>若有吸入不適，立刻撥打 119 或就醫。</li>
              <li style={{ lineHeight: 1.7 }}>告訴醫護人員混合了什麼物質。</li>
            </ul>

            <TipBox mood="smile" title="正確使用清潔劑" variant="success">
              <p>✅ 一次只用一種清潔劑。</p>
              <p>✅ 使用時保持通風（開窗、開排風扇）。</p>
              <p>✅ 戴橡膠手套保護皮膚。</p>
              <p>✅ 清潔劑存放在孩童無法取得的地方。</p>
              <p>✅ 仔細閱讀產品標示和安全說明。</p>
            </TipBox>
          </div>

          <div className={styles.navRow}>
            <Link href="/knowledge" className={styles.backLink}>← 回文章列表</Link>
            <Link href="/knowledge/ghs-symbols" className={styles.challengeLink}>認識 GHS 危險標誌 →</Link>
          </div>
        </div>

        <aside className={styles.sidebar}>
          <div className={styles.sideCard}>
            <h3 className={styles.sideTitle}>緊急狀況</h3>
            <div style={{ background: "#FFE8EA", border: "2px solid var(--danger)", borderRadius: "var(--r-md)", padding: "var(--sp-3)", textAlign: "center" }}>
              <p style={{ fontSize: "var(--fs-h3)", fontWeight: 800, color: "var(--danger)", margin: "0 0 var(--sp-1) 0" }}>119</p>
              <p style={{ fontSize: "var(--fs-caption)", color: "var(--ink-2)", margin: 0 }}>中毒緊急求救</p>
            </div>
          </div>
          <div className={styles.sideCard}>
            <h3 className={styles.sideTitle}>本文重點</h3>
            <ol className={styles.keyPoints}>
              <li>漂白水含次氯酸鈉（NaOCl）</li>
              <li>漂白水＋酸 → 氯氣（劇毒！）</li>
              <li>不適感立刻離開通風</li>
              <li>一次只用一種清潔劑</li>
            </ol>
          </div>
          <div className={styles.sideCard}>
            <h3 className={styles.sideTitle}>相關文章</h3>
            <div className={styles.relatedLinks}>
              <Link href="/knowledge/ghs-symbols">認識 GHS 危險標誌</Link>
              <Link href="/knowledge/hazard">家裡有哪些危險化學品？</Link>
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}
