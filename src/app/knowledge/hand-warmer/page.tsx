import TipBox from "@/components/mascots/TipBox";
import Tag from "@/components/ui/Tag";
import Link from "next/link";
import styles from "../water-chemistry/page.module.css";

export const metadata = { title: "暖暖包為什麼會發熱？ | 化學物質科普知識園區" };

export default function HandWarmerPage() {
  return (
    <article className={`section ${styles.article}`}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.articleContent}>
          <div className={styles.header}>
            <div className={styles.metaRow}>
              <Tag color="blue" variant="chip">生活中的化學</Tag>
              <span className={styles.metaInfo}>2026-04-25 · 閱讀約 4 分鐘</span>
            </div>
            <h1 className={styles.title}>暖暖包為什麼會發熱？</h1>
            <p className={styles.lead}>
              冬天捏一下暖暖包，馬上就變得暖烘烘！這個小小的包包裡，
              藏著一個經典的化學反應——鐵的氧化。
            </p>
          </div>

          <div className={styles.body}>
            <h2>暖暖包裡面裝了什麼？</h2>
            <p>
              打開暖暖包的外袋，裡面是一個透氣的小包。
              這個小包裡通常裝著：<strong>鐵粉、食鹽、活性碳、蛭石、水</strong>。
              這幾樣東西加在一起，就是讓暖暖包發熱的關鍵！
            </p>

            <h2>發熱的原理：鐵粉氧化</h2>
            <p>
              暖暖包的外袋是透氣材質，拆開包裝後，空氣（其中的氧氣）就會滲入。
              鐵粉接觸到氧氣和水分，就會發生<strong>氧化反應</strong>——也就是我們俗稱的「生鏽」！
            </p>
            <p>
              這個反應會釋放出熱能，這就是暖暖包會發熱的原因。
              化學式如下：
            </p>
            <div className={styles.chemFormulas}>
              <div className={styles.formula}>
                <code className="formula">4Fe + 3O₂ → 2Fe₂O₃</code>
                <span>鐵 + 氧氣 → 氧化鐵（鐵鏽）＋熱能</span>
              </div>
            </div>

            <TipBox mood="thinking" title="其他成分的功能">
              <p><strong>食鹽</strong>：加速氧化反應（電解質效果）。</p>
              <p><strong>活性碳</strong>：幫助吸附氧氣，加快反應速率，並均勻散熱。</p>
              <p><strong>蛭石</strong>：保水、保溫，讓熱量慢慢釋放。</p>
            </TipBox>

            <h2>為什麼搖一搖會更熱？</h2>
            <p>
              搖動暖暖包可以讓內容物和空氣充分接觸，加快氧化反應的速度，
              所以溫度會暫時升高。但搖太久也不好——反應過快可能讓熱量太集中。
            </p>

            <h2>暖暖包使用完能回收嗎？</h2>
            <p>
              用完的暖暖包裡是氧化鐵（鐵鏽），屬於一般垃圾，不能直接資源回收。
              但有些廠商會提供回收服務，可以查詢廠商資訊。
            </p>

            <TipBox mood="smile" title="安全小提醒" variant="warning">
              <p>暖暖包最高溫度可達 60-70°C！嬰兒、老人或感覺較遲鈍的人，
              請勿長時間直接接觸皮膚，以免低溫燙傷。</p>
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
              <li>暖暖包靠鐵粉氧化（生鏽）發熱</li>
              <li>化學式：4Fe + 3O₂ → 2Fe₂O₃</li>
              <li>食鹽加速反應，活性碳幫助吸氧</li>
              <li>最高溫可達 70°C，勿長時間接觸皮膚</li>
            </ol>
          </div>
          <div className={styles.sideCard}>
            <h3 className={styles.sideTitle}>相關文章</h3>
            <div className={styles.relatedLinks}>
              <Link href="/knowledge/battery-safety">行動電源為什麼會爆炸？</Link>
              <Link href="/knowledge/desiccant">乾燥劑和脫氧劑的秘密</Link>
              <Link href="/knowledge/water-chemistry">水是怎麼變乾淨的？</Link>
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}
