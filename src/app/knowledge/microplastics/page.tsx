import TipBox from "@/components/mascots/TipBox";
import Tag from "@/components/ui/Tag";
import Link from "next/link";
import styles from "../water-chemistry/page.module.css";

export const metadata = { title: "微塑膠：看不見的威脅 | 化學物質科普知識園區" };

export default function MicroplasticsPage() {
  return (
    <article className={`section ${styles.article}`}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.articleContent}>
          <div className={styles.header}>
            <div className={styles.metaRow}>
              <Tag color="green" variant="chip">環境與永續</Tag>
              <span className={styles.metaInfo}>2026-04-14 · 閱讀約 6 分鐘</span>
            </div>
            <h1 className={styles.title}>微塑膠：看不見的威脅</h1>
            <p className={styles.lead}>
              比頭髮還細的塑膠顆粒，已經出現在喜馬拉雅山的雪、
              馬里亞納海溝的海水，甚至人類的血液裡。我們能做什麼？
            </p>
          </div>

          <div className={styles.body}>
            <h2>什麼是微塑膠？</h2>
            <p>
              <strong>微塑膠（Microplastics）</strong>是指直徑小於 5 公釐的塑膠顆粒。
              它們有兩種來源：
            </p>
            <ul style={{ paddingLeft: "var(--sp-5)", marginBottom: "var(--sp-4)" }}>
              <li style={{ marginBottom: "var(--sp-2)", lineHeight: 1.7 }}>
                <strong>初級微塑膠</strong>：本來就很小，例如牙膏磨砂顆粒、化妝品柔珠、工業用塑膠粒。
              </li>
              <li style={{ lineHeight: 1.7 }}>
                <strong>次級微塑膠</strong>：大型塑膠廢棄物被陽光、風浪和化學作用分解後形成的碎片。
              </li>
            </ul>

            <TipBox mood="thinking" title="鴞博士說">
              <p>塑膠在大自然中不會「消失」，只會越變越小，從大碎片變成微塑膠，
              再變成更小的「奈米塑膠（Nanoplastics，&lt; 1 微米）」。
              一個寶特瓶可能產生數百萬個微塑膠顆粒！</p>
            </TipBox>

            <h2>微塑膠在哪裡？</h2>
            <div className={styles.chemFormulas} style={{ flexWrap: "wrap" }}>
              {[
                { place: "海洋", fact: "全球海洋估計有 170 兆個塑膠顆粒漂浮" },
                { place: "飲用水", fact: "研究發現超過 80% 的自來水樣本含微塑膠" },
                { place: "食物", fact: "海鮮、鹽、蜂蜜、啤酒中都曾驗出微塑膠" },
                { place: "空氣", fact: "城市空氣中每天每平方公尺降落數百個塑膠顆粒" },
                { place: "人體", fact: "2022 年研究在人類血液、胎盤、肺部中發現微塑膠" },
              ].map((item) => (
                <div key={item.place} className={styles.formula} style={{ minWidth: 140 }}>
                  <strong style={{ color: "var(--color-primary)", fontFamily: "var(--font-rounded)" }}>{item.place}</strong>
                  <span style={{ fontSize: "var(--fs-caption)", textAlign: "center", lineHeight: 1.5 }}>{item.fact}</span>
                </div>
              ))}
            </div>

            <h2>微塑膠對健康的影響</h2>
            <p>
              目前科學界仍在研究微塑膠對人體的長期影響。已知的潛在危害包括：
              <strong>化學毒素吸附</strong>（塑膠能吸附重金屬、農藥等有毒物質）、
              <strong>引起發炎反應</strong>、以及可能干擾荷爾蒙的<strong>塑化劑</strong>（如鄰苯二甲酸酯 DEHP）。
            </p>

            <TipBox mood="smile" title="我們可以做什麼？" variant="success">
              <p>🛍️ 自備購物袋、餐具，減少一次性塑膠使用。</p>
              <p>♻️ 正確回收塑膠，減少進入環境的機會。</p>
              <p>🚿 洗滌化學纖維衣物時，使用細小纖維過濾袋。</p>
              <p>🌊 參加淨灘活動，從源頭減少海洋塑膠污染。</p>
            </TipBox>
          </div>

          <div className={styles.navRow}>
            <Link href="/knowledge" className={styles.backLink}>← 回文章列表</Link>
            <Link href="/knowledge/pfas" className={styles.challengeLink}>下一篇：PFAS 的祕密 →</Link>
          </div>
        </div>

        <aside className={styles.sidebar}>
          <div className={styles.sideCard}>
            <h3 className={styles.sideTitle}>本文重點</h3>
            <ol className={styles.keyPoints}>
              <li>微塑膠直徑小於 5 公釐</li>
              <li>來源：初級（原本就小）和次級（大塑膠分解）</li>
              <li>已出現在海洋、食物、人體血液中</li>
              <li>減少一次性塑膠是最好的解決方法</li>
            </ol>
          </div>
          <div className={styles.sideCard}>
            <h3 className={styles.sideTitle}>相關文章</h3>
            <div className={styles.relatedLinks}>
              <Link href="/knowledge/plastic-types">塑膠編號你看懂了嗎？</Link>
              <Link href="/knowledge/pfas">PFAS：永遠的化學物質</Link>
              <Link href="/knowledge/environment">酸雨是怎麼形成的？</Link>
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}
