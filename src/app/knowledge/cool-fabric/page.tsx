import TipBox from "@/components/mascots/TipBox";
import Tag from "@/components/ui/Tag";
import Link from "next/link";
import styles from "../water-chemistry/page.module.css";

export const metadata = { title: "涼感衣與發熱衣的科學 | 化學物質科普知識園區" };

export default function CoolFabricPage() {
  return (
    <article className={`section ${styles.article}`}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.articleContent}>
          <div className={styles.header}>
            <div className={styles.metaRow}>
              <Tag color="cyan" variant="chip">材料科學</Tag>
              <span className={styles.metaInfo}>2026-04-06 · 閱讀約 5 分鐘</span>
            </div>
            <h1 className={styles.title}>涼感衣與發熱衣的科學</h1>
            <p className={styles.lead}>
              同樣是布料，為什麼涼感衣讓你感覺涼快、發熱衣讓你溫暖？
              這不是魔法，而是纖維化學和物理學的精彩應用！
            </p>
          </div>

          <div className={styles.body}>
            <h2>涼感衣：為什麼讓人感覺涼？</h2>
            <p>
              涼感衣的祕密在於<strong>導熱性高的纖維材料</strong>，
              例如改質聚酯纖維（Modified Polyester）或添加玉石粉、雲母粉的特殊纖維。
              這些材料能快速將皮膚的熱能傳導出去，讓你感覺涼快。
            </p>

            <TipBox mood="thinking" title="鴞博士解釋：接觸涼感">
              <p>摸金屬會覺得比木頭涼，雖然它們溫度一樣，是因為金屬導熱快，
              把皮膚的熱帶走的速度更快。涼感衣的原理也一樣——
              是纖維把你的體熱迅速帶走，而不是真的降溫！</p>
            </TipBox>

            <p>涼感衣的三個技術重點：</p>
            <ul style={{ paddingLeft: "var(--sp-5)", marginBottom: "var(--sp-4)" }}>
              <li style={{ marginBottom: "var(--sp-2)", lineHeight: 1.7 }}>
                <strong>快乾排汗</strong>：纖維截面設計成異形（星形、十字形），增加毛細管效應，快速將汗水從皮膚面排向外層蒸發。
              </li>
              <li style={{ marginBottom: "var(--sp-2)", lineHeight: 1.7 }}>
                <strong>高導熱係數</strong>：材料本身導熱好，快速散熱。
              </li>
              <li style={{ lineHeight: 1.7 }}>
                <strong>抗 UV</strong>：部分款式添加氧化鋅（ZnO）或二氧化鈦（TiO₂）以阻擋紫外線。
              </li>
            </ul>

            <h2>發熱衣：為什麼讓人感覺暖？</h2>
            <p>
              發熱衣主要利用兩種技術讓人保暖：
            </p>
            <ul style={{ paddingLeft: "var(--sp-5)", marginBottom: "var(--sp-4)" }}>
              <li style={{ marginBottom: "var(--sp-2)", lineHeight: 1.7 }}>
                <strong>吸濕發熱纖維</strong>：如丙烯酸纖維（Acrylics）。
                纖維吸收皮膚散發的水蒸氣（汗水），水分子在被纖維吸附時釋放熱能，讓衣物溫度升高。
              </li>
              <li style={{ lineHeight: 1.7 }}>
                <strong>遠紅外線反射</strong>：部分發熱衣使用鍺（Ge）或碳化鋯（ZrC）等材料，
                能反射人體散發的遠紅外線，減少體熱散失。
              </li>
            </ul>

            <div className={styles.chemFormulas}>
              <div className={styles.formula}>
                <code className="formula">H₂O (氣態) → 纖維吸附 → 熱能釋放</code>
                <span>吸濕發熱的原理（水分子從氣態轉為固態時放熱）</span>
              </div>
            </div>

            <TipBox mood="smile" title="選購小提醒" variant="success">
              <p>涼感衣的「涼感」是接觸瞬間感受，不能取代防曬！
              發熱衣的發熱效果在乾燥環境下會降低（沒有汗水可吸附）。
              選購時認清台灣商品標示，注意纖維成分標示喔！</p>
            </TipBox>
          </div>

          <div className={styles.navRow}>
            <Link href="/knowledge" className={styles.backLink}>← 回文章列表</Link>
            <Link href="/knowledge/mothballs" className={styles.challengeLink}>下一篇：樟腦丸的秘密 →</Link>
          </div>
        </div>

        <aside className={styles.sidebar}>
          <div className={styles.sideCard}>
            <h3 className={styles.sideTitle}>本文重點</h3>
            <ol className={styles.keyPoints}>
              <li>涼感衣靠高導熱纖維帶走體熱</li>
              <li>快乾排汗纖維用異形截面增加毛細效應</li>
              <li>發熱衣靠吸濕發熱纖維釋放熱能</li>
              <li>水分子從氣態被吸附時會釋放熱能</li>
            </ol>
          </div>
          <div className={styles.sideCard}>
            <h3 className={styles.sideTitle}>相關文章</h3>
            <div className={styles.relatedLinks}>
              <Link href="/knowledge/mothballs">樟腦丸為什麼要避免使用？</Link>
              <Link href="/knowledge/plastic-types">塑膠編號你看懂了嗎？</Link>
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}
