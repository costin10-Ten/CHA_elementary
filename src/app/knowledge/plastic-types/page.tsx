import TipBox from "@/components/mascots/TipBox";
import Tag from "@/components/ui/Tag";
import Link from "next/link";
import styles from "../water-chemistry/page.module.css";

export const metadata = { title: "塑膠編號你看懂了嗎？ | 化學物質科普知識園區" };

const PLASTIC_TYPES = [
  { num: "1", name: "PET（聚對苯二甲酸乙酯）", use: "寶特瓶、飲料瓶",    recycle: true  },
  { num: "2", name: "HDPE（高密度聚乙烯）",      use: "牛奶罐、洗髮精瓶", recycle: true  },
  { num: "3", name: "PVC（聚氯乙烯）",            use: "保鮮膜、水管",      recycle: false },
  { num: "4", name: "LDPE（低密度聚乙烯）",       use: "塑膠袋、食品包裝", recycle: true  },
  { num: "5", name: "PP（聚丙烯）",               use: "優格杯、吸管、瓶蓋",recycle: true  },
  { num: "6", name: "PS（聚苯乙烯）",             use: "免洗杯盤、保麗龍", recycle: false },
  { num: "7", name: "其他（Other）",              use: "各種混合塑膠",      recycle: false },
];

export default function PlasticTypesPage() {
  return (
    <article className={`section ${styles.article}`}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.articleContent}>
          <div className={styles.header}>
            <div className={styles.metaRow}>
              <Tag color="green" variant="chip">環境保護</Tag>
              <span className={styles.metaInfo}>2026-04-10 · 閱讀約 4 分鐘</span>
            </div>
            <h1 className={styles.title}>塑膠編號你看懂了嗎？</h1>
            <p className={styles.lead}>
              翻開寶特瓶底部，你會看到一個三角形箭頭裡的數字。
              這個數字代表塑膠的種類，也告訴我們如何正確回收！
            </p>
          </div>

          <div className={styles.body}>
            <h2>為什麼塑膠要分類？</h2>
            <p>
              不同種類的塑膠化學成分不同，熔點不同，回收方式也不一樣。
              混在一起回收，會影響再生材料的品質。
              因此國際上用 1-7 號來區分塑膠類型！
            </p>

            <TipBox mood="thinking" title="鴞博士說">
              <p>化學角度來看，不同的塑膠其實是不同的「高分子聚合物」——
              也就是由許多小分子（單體）連成長鏈的大分子。
              每種單體不同，特性就不同！</p>
            </TipBox>

            <h2>塑膠編號對照表</h2>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "var(--fs-body)" }}>
                <thead>
                  <tr style={{ background: "var(--color-primary-light)" }}>
                    <th style={{ padding: "12px", textAlign: "left", border: "var(--stroke-1)" }}>編號</th>
                    <th style={{ padding: "12px", textAlign: "left", border: "var(--stroke-1)" }}>材質名稱</th>
                    <th style={{ padding: "12px", textAlign: "left", border: "var(--stroke-1)" }}>常見用途</th>
                    <th style={{ padding: "12px", textAlign: "center", border: "var(--stroke-1)" }}>可回收</th>
                  </tr>
                </thead>
                <tbody>
                  {PLASTIC_TYPES.map((p) => (
                    <tr key={p.num} style={{ background: "var(--surface)" }}>
                      <td style={{ padding: "10px 12px", border: "var(--stroke-1)", fontWeight: 700, fontFamily: "var(--font-rounded)", color: "var(--color-primary)" }}>
                        ♻ {p.num}
                      </td>
                      <td style={{ padding: "10px 12px", border: "var(--stroke-1)", fontSize: "var(--fs-small)" }}>{p.name}</td>
                      <td style={{ padding: "10px 12px", border: "var(--stroke-1)", fontSize: "var(--fs-small)" }}>{p.use}</td>
                      <td style={{ padding: "10px 12px", border: "var(--stroke-1)", textAlign: "center" }}>
                        {p.recycle ? "✅" : "❌"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <TipBox mood="smile" title="環保小行動" variant="success">
              <p>記住：3 號（PVC）和 6 號（PS）盡量避免購買！
              它們燃燒時會產生有毒氣體，對環境傷害最大。
              選購時優先選 1、2、4、5 號。</p>
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
              <Link href="/knowledge/ghs-symbols">認識 GHS 危險標誌</Link>
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}
