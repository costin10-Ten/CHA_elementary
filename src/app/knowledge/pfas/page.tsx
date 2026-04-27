import TipBox from "@/components/mascots/TipBox";
import Tag from "@/components/ui/Tag";
import Link from "next/link";
import styles from "../water-chemistry/page.module.css";

export const metadata = { title: "PFAS：永遠的化學物質 | 化學物質科普知識園區" };

export default function PFASPage() {
  return (
    <article className={`section ${styles.article}`}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.articleContent}>
          <div className={styles.header}>
            <div className={styles.metaRow}>
              <Tag color="green" variant="chip">環境與永續</Tag>
              <span className={styles.metaInfo}>2026-03-10 · 閱讀約 6 分鐘</span>
            </div>
            <h1 className={styles.title}>PFAS：永遠的化學物質</h1>
            <p className={styles.lead}>
              不沾鍋、防水衣、食品包裝袋⋯⋯這些方便的產品背後，
              藏著一群在自然界幾乎永遠不會分解的化學物質——PFAS。
            </p>
          </div>

          <div className={styles.body}>
            <h2>什麼是 PFAS？</h2>
            <p>
              PFAS 是<strong>全氟及多氟烷基物質（Per- and Polyfluoroalkyl Substances）</strong>的縮寫，
              是一大類含有「碳氟鍵（C-F）」的人造化學物質。
              碳氟鍵是自然界最強的化學鍵之一，因此 PFAS 非常穩定，
              在環境中幾乎不會分解，被稱為「永遠的化學物質（Forever Chemicals）」。
            </p>

            <div className={styles.chemFormulas}>
              <div className={styles.formula}>
                <code className="formula">C-F 鍵</code>
                <span>鍵能 544 kJ/mol，是化學界最強的鍵之一</span>
              </div>
              <div className={styles.formula}>
                <code className="formula">PFOA (C₈HF₁₅O₂)</code>
                <span>全氟辛酸，常見 PFAS 之一</span>
              </div>
            </div>

            <h2>PFAS 藏在哪裡？</h2>
            <ul style={{ paddingLeft: "var(--sp-5)", marginBottom: "var(--sp-4)" }}>
              {[
                "🍳 不沾鍋（鐵氟龍/PTFE 塗層）",
                "🧥 防水夾克、雨衣（DWR 防水處理）",
                "🍟 速食包裝袋、微波爐爆米花袋",
                "🧴 部分化妝品、防曬乳",
                "🔥 消防泡沫（AFFF 滅火劑）",
                "🦷 牙線（部分品牌）",
              ].map((item) => (
                <li key={item} style={{ marginBottom: "var(--sp-2)", lineHeight: 1.7 }}>{item}</li>
              ))}
            </ul>

            <TipBox mood="thinking" title="鴞博士說">
              <p>PFAS 有超過 12,000 種已知物質。它們不會在環境中降解，
              會在食物鏈中<strong>生物累積（Bioaccumulation）</strong>——
              意思是愈在食物鏈高層的動物（包括人類），體內的 PFAS 濃度愈高。</p>
            </TipBox>

            <h2>PFAS 對健康的影響</h2>
            <p>
              長期暴露於高濃度 PFAS 可能與以下健康風險有關：
              甲狀腺疾病、免疫系統異常、某些癌症（腎癌、睪丸癌）、
              高膽固醇、以及影響嬰幼兒發育。
              目前全球許多國家已開始限制或禁止特定 PFAS 的使用。
            </p>

            <TipBox mood="smile" title="如何減少接觸？" variant="success">
              <p>🍳 炒菜時避免空燒不沾鍋（高溫會讓塗層分解）；考慮改用不鏽鋼或鑄鐵鍋。</p>
              <p>🚰 使用有 NSF-58 認證的濾水器（可去除部分 PFAS）。</p>
              <p>🍔 少用速食包裝直接盛裝熱食。</p>
              <p>🧥 選擇不使用 DWR 防水處理的衣物，或選用以 C₀ 技術替代的環保防水產品。</p>
            </TipBox>
          </div>

          <div className={styles.navRow}>
            <Link href="/knowledge" className={styles.backLink}>← 回文章列表</Link>
            <Link href="/knowledge/microplastics" className={styles.challengeLink}>← 上一篇：微塑膠</Link>
          </div>
        </div>

        <aside className={styles.sidebar}>
          <div className={styles.sideCard}>
            <h3 className={styles.sideTitle}>本文重點</h3>
            <ol className={styles.keyPoints}>
              <li>PFAS = 全氟及多氟烷基物質</li>
              <li>C-F 鍵極強，在環境中不分解</li>
              <li>藏在不沾鍋、防水衣、食品包裝中</li>
              <li>會在生物體內累積，影響健康</li>
              <li>全球正逐步限制使用</li>
            </ol>
          </div>
          <div className={styles.sideCard}>
            <h3 className={styles.sideTitle}>相關文章</h3>
            <div className={styles.relatedLinks}>
              <Link href="/knowledge/microplastics">微塑膠：看不見的威脅</Link>
              <Link href="/knowledge/plastic-types">塑膠編號你看懂了嗎？</Link>
              <Link href="/knowledge/environment">酸雨是怎麼形成的？</Link>
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}
