import TipBox from "@/components/mascots/TipBox";
import Tag from "@/components/ui/Tag";
import Link from "next/link";
import styles from "../water-chemistry/page.module.css";

export const metadata = { title: "酸甜苦鹹鮮：味覺的化學 | 化學物質科普知識園區" };

const TASTES = [
  { emoji: "🍋", name: "酸味", molecule: "氫離子 H⁺", example: "檸檬、醋酸（CH₃COOH）", desc: "酸性物質釋放出氫離子（H⁺），刺激舌頭上的酸味受體。" },
  { emoji: "🍭", name: "甜味", molecule: "糖類、甜味劑", example: "蔗糖（C₁₂H₂₂O₁₁）、葡萄糖", desc: "甜味分子與 T1R2-T1R3 受體結合，傳送甜味訊號到大腦。" },
  { emoji: "☕", name: "苦味", molecule: "生物鹼類", example: "咖啡因（C₈H₁₀N₄O₂）", desc: "苦味是身體對毒素的警示系統，咖啡因、可可鹼都是苦味來源。" },
  { emoji: "🧂", name: "鹹味", molecule: "鈉離子 Na⁺", example: "氯化鈉（NaCl）食鹽", desc: "鈉離子（Na⁺）通過離子通道進入味覺細胞，產生鹹味感受。" },
  { emoji: "🍖", name: "鮮味", molecule: "麩胺酸、肌苷酸", example: "谷氨酸鈉（MSG）", desc: "第五種基本味覺，來自蛋白質分解產生的胺基酸，讓食物更鮮美。" },
];

export default function FoodTastePage() {
  return (
    <article className={`section ${styles.article}`}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.articleContent}>
          <div className={styles.header}>
            <div className={styles.metaRow}>
              <Tag color="green" variant="chip">食品化學</Tag>
              <span className={styles.metaInfo}>2026-04-18 · 閱讀約 6 分鐘</span>
            </div>
            <h1 className={styles.title}>酸甜苦鹹鮮：味覺的化學</h1>
            <p className={styles.lead}>
              為什麼檸檬是酸的、糖是甜的、咖啡是苦的？
              這些味道不是魔法——而是化學分子和舌頭上的「味覺受體」進行的精彩對話！
            </p>
          </div>

          <div className={styles.body}>
            <h2>舌頭怎麼感受味道？</h2>
            <p>
              舌頭表面有許多小突起，叫做<strong>味蕾（Taste Buds）</strong>。
              每個味蕾裡有 50-100 個味覺細胞，細胞表面有不同的<strong>受體蛋白（Receptor）</strong>。
              當特定的化學分子接觸到對應的受體，就會產生電訊號，傳到大腦，讓我們感受到味道。
            </p>

            <TipBox mood="thinking" title="鴞博士說">
              <p>人類舌頭上約有 10,000 個味蕾！每個味蕾的壽命只有 10 天，會不斷更新。
              這就是為什麼喝很燙的東西，暫時感覺不到味道——味蕾被燙壞了，但很快就會長新的！</p>
            </TipBox>

            <h2>五種基本味覺與化學分子</h2>
            <div className={styles.chemFormulas} style={{ flexWrap: "wrap", gap: "var(--sp-4)" }}>
              {TASTES.map((t) => (
                <div key={t.name} className={styles.formula} style={{ minWidth: 160, gap: "var(--sp-2)", alignItems: "flex-start" }}>
                  <span style={{ fontSize: 36 }}>{t.emoji}</span>
                  <strong style={{ fontFamily: "var(--font-rounded)", color: "var(--color-primary)" }}>{t.name}</strong>
                  <code className="formula" style={{ fontSize: "var(--fs-caption)", background: "none", padding: 0 }}>{t.molecule}</code>
                  <span style={{ fontSize: "var(--fs-caption)", color: "var(--ink-3)", lineHeight: 1.5 }}>{t.desc}</span>
                  <span style={{ fontSize: "var(--fs-caption)", color: "var(--ink-3)" }}>例：{t.example}</span>
                </div>
              ))}
            </div>

            <h2>辣味是第六種味覺嗎？</h2>
            <p>
              辣味其實<strong>不是</strong>味覺！辣椒素（Capsaicin，C₁₈H₂₇NO₃）
              刺激的是皮膚和黏膜上的<strong>TRPV1 受體</strong>——這是一種溫度和痛覺受體，
              不是味覺受體。所以辣味本質上是一種「痛覺感受」，不是真正的味覺！
            </p>

            <TipBox mood="smile" title="趣味小知識" variant="success">
              <p>喝牛奶能緩解辣味，因為牛奶裡的<strong>酪蛋白（Casein）</strong>可以溶解辣椒素並帶走它。
              水反而沒有用——辣椒素是脂溶性分子，不溶於水！</p>
            </TipBox>

            <h2>味精（MSG）安全嗎？</h2>
            <p>
              味精的主要成分是<strong>麩胺酸鈉（Monosodium Glutamate，MSG）</strong>，
              化學式 C₅H₈NNaO₄。麩胺酸是天然存在的胺基酸，番茄、起司、蘑菇中都含有大量麩胺酸。
              目前國際食品安全機構（JECFA、FDA、EFSA）均認定適量攝取的味精對健康安全無害。
            </p>
          </div>

          <div className={styles.navRow}>
            <Link href="/knowledge" className={styles.backLink}>← 回文章列表</Link>
            <Link href="/game" className={styles.challengeLink}>挑戰食品化學關卡 →</Link>
          </div>
        </div>

        <aside className={styles.sidebar}>
          <div className={styles.sideCard}>
            <h3 className={styles.sideTitle}>本文重點</h3>
            <ol className={styles.keyPoints}>
              <li>舌頭味蕾含味覺細胞和受體蛋白</li>
              <li>五種基本味覺：酸甜苦鹹鮮</li>
              <li>辣味是痛覺，不是味覺</li>
              <li>MSG 適量攝取是安全的</li>
            </ol>
          </div>
          <div className={styles.sideCard}>
            <h3 className={styles.sideTitle}>相關文章</h3>
            <div className={styles.relatedLinks}>
              <Link href="/knowledge/food-preservation">乾燥劑與脫氧劑</Link>
              <Link href="/knowledge/water-chemistry">水是怎麼變乾淨的？</Link>
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}
