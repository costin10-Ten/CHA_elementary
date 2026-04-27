import TipBox from "@/components/mascots/TipBox";
import Tag from "@/components/ui/Tag";
import Link from "next/link";
import styles from "../water-chemistry/page.module.css";

export const metadata = { title: "樟腦丸為什麼要避免使用？ | 化學物質科普知識園區" };

export default function MothballsPage() {
  return (
    <article className={`section ${styles.article}`}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.articleContent}>
          <div className={styles.header}>
            <div className={styles.metaRow}>
              <Tag color="coral" variant="chip">危險物質辨識</Tag>
              <span className={styles.metaInfo}>2026-03-15 · 閱讀約 5 分鐘</span>
            </div>
            <h1 className={styles.title}>樟腦丸為什麼要避免使用？</h1>
            <p className={styles.lead}>
              衣櫃裡的那股特殊氣味，是樟腦丸揮發的化學物質。
              了解它的成分，才能做出更安全的選擇。
            </p>
          </div>

          <div className={styles.body}>
            <h2>樟腦丸有哪兩種？</h2>
            <p>
              市面上的「樟腦丸」其實分成兩種，化學成分完全不同：
            </p>
            <div className={styles.chemFormulas}>
              <div className={styles.formula}>
                <code className="formula">C₁₀H₁₆O</code>
                <strong>天然樟腦</strong>
                <span>從樟樹提煉，毒性相對低，台灣傳統使用</span>
              </div>
              <div className={styles.formula} style={{ background: "#FFE8EA", borderColor: "var(--danger)" }}>
                <code className="formula">C₁₀H₈（萘）或 C₆H₄Cl₂（對二氯苯）</code>
                <strong style={{ color: "var(--danger)" }}>合成樟腦丸</strong>
                <span>工業合成，毒性較高，應避免使用</span>
              </div>
            </div>

            <TipBox mood="thinking" title="鴞博士警告" variant="warning">
              <p><strong>萘（Naphthalene，C₁₀H₈）</strong>是常見合成樟腦丸的成分，
              已被國際癌症研究機構（IARC）列為「可能致癌物」。
              長期接觸蒸氣可能傷害神經系統，嬰幼兒和貓咪特別敏感！</p>
            </TipBox>

            <h2>對二氯苯的風險</h2>
            <p>
              另一種常見成分<strong>對二氯苯（p-DCB，C₆H₄Cl₂）</strong>，
              揮發後的蒸氣吸入可能刺激眼睛和呼吸道，長期暴露可能損害肝腎。
              貓咪代謝這類物質的能力很弱，家有貓咪的家庭一定要避免使用。
            </p>

            <h2>更安全的替代方案</h2>
            <div className={styles.chemFormulas} style={{ flexWrap: "wrap" }}>
              {[
                { icon: "🌿", name: "薰衣草、雪松香包", desc: "天然植物精油，驅蟲效果好，安全無毒" },
                { icon: "📦", name: "真空收納袋", desc: "物理隔絕，防蟲防潮，最安全" },
                { icon: "🧴", name: "防蟲噴霧", desc: "選擇低毒性配方，使用後通風" },
                { icon: "☀️", name: "定期曬衣物", desc: "陽光的紫外線可以殺菌驅蟲" },
              ].map((item) => (
                <div key={item.name} className={styles.formula} style={{ minWidth: 130 }}>
                  <span style={{ fontSize: 32 }}>{item.icon}</span>
                  <strong style={{ fontFamily: "var(--font-rounded)", fontSize: "var(--fs-small)" }}>{item.name}</strong>
                  <span style={{ fontSize: "var(--fs-caption)", textAlign: "center", lineHeight: 1.5 }}>{item.desc}</span>
                </div>
              ))}
            </div>

            <TipBox mood="smile" title="如何辨別手上是哪種？" variant="success">
              <p>查看產品標示上的<strong>「有效成分」</strong>欄位：
              出現「萘」或「Naphthalene」、「對二氯苯」或「p-Dichlorobenzene」的，建議不要購買。
              GHS 危險標示上若有骷髏頭或感嘆號，也是警訊！</p>
            </TipBox>
          </div>

          <div className={styles.navRow}>
            <Link href="/knowledge" className={styles.backLink}>← 回文章列表</Link>
            <Link href="/knowledge/ghs-symbols" className={styles.challengeLink}>認識 GHS 標誌 →</Link>
          </div>
        </div>

        <aside className={styles.sidebar}>
          <div className={styles.sideCard}>
            <h3 className={styles.sideTitle}>本文重點</h3>
            <ol className={styles.keyPoints}>
              <li>兩種樟腦丸：天然樟腦和合成（萘/對二氯苯）</li>
              <li>萘被 IARC 列為可能致癌物</li>
              <li>貓咪對這類物質特別敏感</li>
              <li>改用薰衣草香包或真空收納袋</li>
            </ol>
          </div>
          <div className={styles.sideCard}>
            <h3 className={styles.sideTitle}>相關文章</h3>
            <div className={styles.relatedLinks}>
              <Link href="/knowledge/ghs-symbols">認識 GHS 危險標誌</Link>
              <Link href="/knowledge/cleaning-safety">清潔劑混合的危險！</Link>
              <Link href="/knowledge/hazard">家裡有哪些危險化學品？</Link>
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}
