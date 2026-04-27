import TipBox from "@/components/mascots/TipBox";
import Tag from "@/components/ui/Tag";
import Link from "next/link";
import styles from "../water-chemistry/page.module.css";

export const metadata = { title: "乾燥劑與脫氧劑的秘密 | 化學物質科普知識園區" };

export default function DesiccantPage() {
  return (
    <article className={`section ${styles.article}`}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.articleContent}>
          <div className={styles.header}>
            <div className={styles.metaRow}>
              <Tag color="green" variant="chip">食品化學</Tag>
              <span className={styles.metaInfo}>2026-03-05 · 閱讀約 4 分鐘</span>
            </div>
            <h1 className={styles.title}>乾燥劑與脫氧劑的秘密</h1>
            <p className={styles.lead}>
              開餅乾、海苔、藥品，常常看到「請勿食用」的小包包。
              這些小包裡到底裝了什麼？能不能誤食？
            </p>
          </div>

          <div className={styles.body}>
            <h2>乾燥劑：趕走水分</h2>
            <p>
              乾燥劑的任務是<strong>吸收濕氣（水蒸氣）</strong>，防止食品或產品受潮變質。
              常見類型有三種：
            </p>
            <div className={styles.chemFormulas}>
              <div className={styles.formula}>
                <code className="formula">SiO₂</code>
                <strong>矽膠（Silica Gel）</strong>
                <span>最常見。白色或透明顆粒，吸濕後可低溫烘乾重複使用。</span>
              </div>
              <div className={styles.formula}>
                <code className="formula">CaCl₂</code>
                <strong>氯化鈣</strong>
                <span>吸濕效果強，常用於衣櫃除濕盒，吸水後變液態。</span>
              </div>
              <div className={styles.formula}>
                <code className="formula">CaO + H₂O → Ca(OH)₂</code>
                <strong>生石灰</strong>
                <span>海苔常見，吸水時會發熱！絕對不能加水或誤食。</span>
              </div>
            </div>

            <TipBox mood="thinking" title="生石灰乾燥劑要特別小心！" variant="warning">
              <p>生石灰（氧化鈣 CaO）遇水會發生激烈反應並發熱，可能燙傷！
              如果小朋友不小心把水倒進含生石灰的乾燥劑包，
              請立刻遠離並告訴大人，切勿用手碰觸。</p>
            </TipBox>

            <h2>脫氧劑：趕走氧氣</h2>
            <p>
              脫氧劑的任務是<strong>吸收氧氣（O₂）</strong>，防止食品被氧化、油脂酸敗、或微生物生長。
              常見成分是<strong>鐵粉</strong>，原理和暖暖包一樣：
              鐵粉氧化吸收氧氣，把包裝袋內的氧氣濃度降到非常低。
            </p>
            <div className={styles.chemFormulas}>
              <div className={styles.formula}>
                <code className="formula">4Fe + 3O₂ → 2Fe₂O₃</code>
                <span>鐵粉吸收氧氣，變成氧化鐵（鐵鏽）</span>
              </div>
            </div>

            <h2>誤食了怎麼辦？</h2>
            <ul style={{ paddingLeft: "var(--sp-5)", marginBottom: "var(--sp-4)" }}>
              <li style={{ lineHeight: 1.7, marginBottom: "var(--sp-2)" }}><strong>矽膠乾燥劑</strong>：少量誤食通常無害，多喝水觀察即可。</li>
              <li style={{ lineHeight: 1.7, marginBottom: "var(--sp-2)" }}><strong>氯化鈣乾燥劑</strong>：可能刺激消化道，立刻就醫。</li>
              <li style={{ lineHeight: 1.7, marginBottom: "var(--sp-2)" }}><strong>生石灰乾燥劑</strong>：具腐蝕性，立刻就醫！不要催吐。</li>
              <li style={{ lineHeight: 1.7 }}><strong>鐵粉脫氧劑</strong>：少量通常無害，大量攝取立刻就醫。</li>
            </ul>

            <TipBox mood="smile" title="保存訣竅" variant="success">
              <p>矽膠乾燥劑可以重複使用喔！當小包裡的指示劑從藍色變成粉色，
              代表吸飽水分了。放進烤箱（120°C，1小時）就能再生！</p>
            </TipBox>
          </div>

          <div className={styles.navRow}>
            <Link href="/knowledge" className={styles.backLink}>← 回文章列表</Link>
            <Link href="/knowledge/food-taste" className={styles.challengeLink}>酸甜苦鹹鮮的化學 →</Link>
          </div>
        </div>

        <aside className={styles.sidebar}>
          <div className={styles.sideCard}>
            <h3 className={styles.sideTitle}>緊急聯絡</h3>
            <div style={{ background: "#FFE8EA", border: "2px solid var(--danger)", borderRadius: "var(--r-md)", padding: "var(--sp-3)", textAlign: "center" }}>
              <p style={{ fontSize: "var(--fs-h3)", fontWeight: 800, color: "var(--danger)", margin: "0 0 var(--sp-1) 0" }}>1922</p>
              <p style={{ fontSize: "var(--fs-caption)", color: "var(--ink-2)", margin: 0 }}>食品藥物管理署 消費者專線</p>
            </div>
          </div>
          <div className={styles.sideCard}>
            <h3 className={styles.sideTitle}>本文重點</h3>
            <ol className={styles.keyPoints}>
              <li>乾燥劑吸水分，脫氧劑吸氧氣</li>
              <li>生石灰遇水發熱，不可加水！</li>
              <li>鐵粉脫氧劑原理同暖暖包</li>
              <li>矽膠乾燥劑可烘乾再生</li>
            </ol>
          </div>
        </aside>
      </div>
    </article>
  );
}
