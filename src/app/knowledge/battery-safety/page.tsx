import TipBox from "@/components/mascots/TipBox";
import Tag from "@/components/ui/Tag";
import Link from "next/link";
import styles from "../water-chemistry/page.module.css";

export const metadata = { title: "行動電源為什麼會爆炸？ | 化學物質科普知識園區" };

export default function BatterySafetyPage() {
  return (
    <article className={`section ${styles.article}`}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.articleContent}>
          <div className={styles.header}>
            <div className={styles.metaRow}>
              <Tag color="blue" variant="chip">生活中的化學</Tag>
              <span className={styles.metaInfo}>2026-04-22 · 閱讀約 5 分鐘</span>
            </div>
            <h1 className={styles.title}>行動電源為什麼會爆炸？</h1>
            <p className={styles.lead}>
              新聞偶爾會出現「行動電源起火爆炸」的報導，讓人心驚。
              了解鋰電池的化學原理，才能正確使用、避免危險！
            </p>
          </div>

          <div className={styles.body}>
            <h2>鋰電池的基本原理</h2>
            <p>
              手機、行動電源裡使用的都是<strong>鋰離子電池（Li-ion Battery）</strong>。
              電池在充電時，鋰離子（Li⁺）從正極移動到負極；
              放電時，鋰離子再從負極移回正極，同時釋放電能。
              這個過程可以重複數百次，這就是可充電電池的原理。
            </p>

            <div className={styles.chemFormulas}>
              <div className={styles.formula}>
                <code className="formula">充電：Li⁺ 從正極 → 負極</code>
                <span>儲存電能</span>
              </div>
              <div className={styles.formula}>
                <code className="formula">放電：Li⁺ 從負極 → 正極</code>
                <span>釋放電能（使用）</span>
              </div>
            </div>

            <h2>為什麼會起火或爆炸？</h2>
            <p>
              鋰電池內部有<strong>有機電解液</strong>（易燃液體）和
              <strong>隔離膜</strong>（防止正負極接觸的薄膜）。
              當以下情況發生時，就可能引發「熱失控（Thermal Runaway）」：
            </p>
            <ul style={{ paddingLeft: "var(--sp-5)", marginBottom: "var(--sp-4)" }}>
              <li style={{ marginBottom: "var(--sp-2)", lineHeight: 1.7 }}>
                <strong>外力撞擊或刺穿</strong>：隔離膜破裂，正負極短路，急速放熱。
              </li>
              <li style={{ marginBottom: "var(--sp-2)", lineHeight: 1.7 }}>
                <strong>過充電</strong>：充太多電，鋰金屬析出形成「鋰枝晶」，刺穿隔離膜。
              </li>
              <li style={{ marginBottom: "var(--sp-2)", lineHeight: 1.7 }}>
                <strong>高溫環境</strong>：電解液在高溫下分解，產生可燃氣體，可能起火爆炸。
              </li>
            </ul>

            <TipBox mood="thinking" title="鴞博士解說：熱失控" variant="warning">
              <p>熱失控就像骨牌效應：溫度升高 → 電解液分解 → 產生氣體 → 壓力增加 →
              電池鼓脹 → 衝破外殼 → 電解液噴出接觸空氣 → 起火！
              整個過程可能在幾秒內發生。</p>
            </TipBox>

            <h2>安全使用行動電源的守則</h2>
            <div className={styles.chemFormulas} style={{ flexWrap: "wrap" }}>
              {[
                { icon: "✅", rule: "使用原廠或有認證的充電器" },
                { icon: "✅", rule: "充飽後拔除充電線，不要整晚充電" },
                { icon: "✅", rule: "存放在陰涼乾燥處，避免高溫" },
                { icon: "❌", rule: "鼓脹、破損的電池立刻停用" },
                { icon: "❌", rule: "不要放在車內曝曬（尤其夏天）" },
                { icon: "❌", rule: "不要用力撞擊、刺穿電池" },
              ].map((item, i) => (
                <div key={i} className={styles.formula}>
                  <span style={{ fontSize: 24 }}>{item.icon}</span>
                  <span style={{ fontSize: "var(--fs-small)", textAlign: "center" }}>{item.rule}</span>
                </div>
              ))}
            </div>

            <TipBox mood="smile" title="廢電池怎麼丟？" variant="success">
              <p>廢電池屬於<strong>有害廢棄物</strong>，不可丟入一般垃圾！
              超商、賣場、環保局都有設置廢電池回收桶。
              台灣的廢電池回收率超過 90%，是全球模範！</p>
            </TipBox>
          </div>

          <div className={styles.navRow}>
            <Link href="/knowledge" className={styles.backLink}>← 回文章列表</Link>
            <Link href="/game" className={styles.challengeLink}>挑戰關卡 →</Link>
          </div>
        </div>

        <aside className={styles.sidebar}>
          <div className={styles.sideCard}>
            <h3 className={styles.sideTitle}>本文重點</h3>
            <ol className={styles.keyPoints}>
              <li>鋰離子電池靠 Li⁺ 移動充放電</li>
              <li>熱失控：撞擊、過充、高溫引發</li>
              <li>不要使用鼓脹、破損的電池</li>
              <li>廢電池送回收，不可丟一般垃圾</li>
            </ol>
          </div>
          <div className={styles.sideCard}>
            <h3 className={styles.sideTitle}>相關文章</h3>
            <div className={styles.relatedLinks}>
              <Link href="/knowledge/hand-warmer">暖暖包為什麼會發熱？</Link>
              <Link href="/knowledge/cleaning-safety">清潔劑混合的危險！</Link>
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}
