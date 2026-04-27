import TipBox from "@/components/mascots/TipBox";
import Tag from "@/components/ui/Tag";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "水是怎麼變乾淨的？ | 化學物質科普知識園區",
};

export default function WaterChemistryPage() {
  return (
    <article className={`section ${styles.article}`}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.articleContent}>
          {/* Header */}
          <div className={styles.header}>
            <div className={styles.metaRow}>
              <Tag color="blue" variant="chip">生活中的化學</Tag>
              <span className={styles.metaInfo}>2026-04-20 · 閱讀約 5 分鐘</span>
            </div>
            <h1 className={styles.title}>水是怎麼變乾淨的？</h1>
            <p className={styles.lead}>
              每天早上打開水龍頭，清澈的水就流出來了。
              可是你有沒有想過，這些水是從哪裡來的？又是怎麼變乾淨的呢？
            </p>
          </div>

          {/* Body */}
          <div className={styles.body}>
            <h2>水的旅程：從河川到水龍頭</h2>
            <p>
              台灣的自來水主要來自河川、水庫和地下水。這些水在大自然中，
              混合了泥沙、細菌、有機物質和各種化學物質。
              如果直接喝，可能會生病！
            </p>
            <p>
              所以，水在進入我們家之前，要先去「淨水廠」進行一連串的化學處理。
              讓我們一步步了解這個過程！
            </p>

            <TipBox mood="thinking" title="鴞博士說">
              <p>淨水過程是一個很棒的化學工程範例！每個步驟都用到不同的化學原理。</p>
            </TipBox>

            <h2>第一步：混凝</h2>
            <p>
              原水（未處理的水）先被加入「明礬」
              <code className="formula">[KAl(SO₄)₂·12H₂O]</code> 或其他凝聚劑。
              這些化學物質會讓水中細小的泥沙顆粒互相吸引、結合成較大的「膠羽」，
              就像把小豆子黏成大球一樣。
            </p>

            <h2>第二步：沉澱與過濾</h2>
            <p>
              膠羽因為比較重，會慢慢沉到水底，這個過程叫做「沉澱」。
              上層比較清澈的水再流過砂石、活性碳等過濾材料，
              把剩餘的微小顆粒和雜質去除。
            </p>

            <TipBox mood="smile" title="小知識" variant="success">
              <p>活性碳擁有超多的細小孔洞，表面積超大！
              一茶匙的活性碳，展開來可以蓋滿一個足球場那麼大的面積。
              這讓它超會吸附各種雜質和臭味。</p>
            </TipBox>

            <h2>第三步：消毒</h2>
            <p>
              過濾後的水看起來已經很乾淨了，但還有肉眼看不見的細菌和病毒！
              這時候要加入少量的「氯」<code className="formula">Cl₂</code> 或
              次氯酸鈉 <code className="formula">NaOCl</code> 進行消毒。
              氯能破壞細菌的細胞膜，讓它們無法生存。
            </p>

            <TipBox mood="thinking" title="鴞博士問你" variant="warning">
              <p>為什麼剛打開水龍頭有時候會聞到一點點刺鼻的味道？
              那正是消毒用的氯！不過含量非常少，對人體安全無害。
              如果放幾分鐘，氯氣就會揮發掉，氣味就消失了。</p>
            </TipBox>

            <h2>最後：水質檢驗</h2>
            <p>
              處理完的水在送到各家各戶之前，還要進行嚴格的水質檢驗，
              確認各種化學物質的濃度都在安全標準內。
              檢驗的項目超過 100 項，包括重金屬、微生物、有機化合物等。
            </p>

            <h2>化學式小複習</h2>
            <div className={styles.chemFormulas}>
              <div className={styles.formula}>
                <code className="formula">H₂O</code>
                <span>水</span>
              </div>
              <div className={styles.formula}>
                <code className="formula">Cl₂</code>
                <span>氯氣（消毒用）</span>
              </div>
              <div className={styles.formula}>
                <code className="formula">NaOCl</code>
                <span>次氯酸鈉（漂白水）</span>
              </div>
              <div className={styles.formula}>
                <code className="formula">Al₂(SO₄)₃</code>
                <span>硫酸鋁（凝聚劑）</span>
              </div>
            </div>
          </div>

          {/* Nav */}
          <div className={styles.navRow}>
            <Link href="/knowledge" className={styles.backLink}>← 回文章列表</Link>
            <Link href="/game" className={styles.challengeLink}>挑戰本章關卡 →</Link>
          </div>
        </div>

        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <div className={styles.sideCard}>
            <h3 className={styles.sideTitle}>本文重點</h3>
            <ol className={styles.keyPoints}>
              <li>水的來源：河川、水庫、地下水</li>
              <li>混凝：加明礬讓雜質結合</li>
              <li>沉澱過濾：去除顆粒</li>
              <li>加氯消毒：殺死細菌病毒</li>
              <li>水質檢驗：超過 100 項指標</li>
            </ol>
          </div>

          <div className={styles.sideCard}>
            <h3 className={styles.sideTitle}>相關文章</h3>
            <div className={styles.relatedLinks}>
              <Link href="/knowledge/plastic-types">塑膠編號你看懂了嗎？</Link>
              <Link href="/knowledge/ghs-symbols">認識 GHS 危險標誌</Link>
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}
