import Link from "next/link";
import Tag from "@/components/ui/Tag";
import Card from "@/components/ui/Card";
import OwlDoctor from "@/components/mascots/OwlDoctor";
import styles from "./page.module.css";

const ARTICLES = [
  {
    href: "/knowledge/water-chemistry",
    tag: "生活中的化學", tagColor: "blue" as const,
    title: "水是怎麼變乾淨的？",
    excerpt: "自來水從河川到我們家，要經過哪些化學處理？讓鴞博士帶你一步步了解淨水的科學原理。",
    time: "2026-04-20", readMin: 5,
  },
  {
    href: "/knowledge/ghs-symbols",
    tag: "危險化學物質", tagColor: "coral" as const,
    title: "認識 GHS 危險標誌",
    excerpt: "看到骷髏頭或火焰圖案，你知道它在警告什麼嗎？GHS 9 大象形圖完整圖解。",
    time: "2026-04-15", readMin: 7,
  },
  {
    href: "/knowledge/plastic-types",
    tag: "環境保護", tagColor: "green" as const,
    title: "塑膠編號你看懂了嗎？",
    excerpt: "寶特瓶底部的數字代表什麼？哪些可以回收？哪些要特別注意？",
    time: "2026-04-10", readMin: 4,
  },
  {
    href: "/knowledge/life",
    tag: "生活中的化學", tagColor: "blue" as const,
    title: "廚房裡的化學反應",
    excerpt: "煮飯時發生了哪些化學變化？麵包為什麼會膨脹？蛋為什麼加熱後會凝固？",
    time: "2026-04-05", readMin: 6,
  },
  {
    href: "/knowledge/environment",
    tag: "環境保護", tagColor: "green" as const,
    title: "酸雨是怎麼形成的？",
    excerpt: "工廠排放的廢氣如何影響雨水的酸鹼值？酸雨又會帶來什麼傷害？",
    time: "2026-03-28", readMin: 5,
  },
  {
    href: "/knowledge/hazard",
    tag: "危險化學物質", tagColor: "coral" as const,
    title: "家裡有哪些危險化學品？",
    excerpt: "清潔劑、農藥、電池⋯⋯這些日常用品如果使用不當，會有什麼危險？",
    time: "2026-03-20", readMin: 6,
  },
];

export const metadata = {
  title: "知識文章 | 化學物質科普知識園區",
  description: "探索生活中的化學、危險化學物質辨識、環境保護相關科普文章。",
};

export default function KnowledgePage() {
  return (
    <div className="section">
      <div className="container">
        <div className={styles.pageHeader}>
          <OwlDoctor mood="smile" size={96} />
          <div>
            <h1>知識文章庫</h1>
            <p className={styles.pageSubtitle}>和鴞博士一起探索化學的奧秘，從生活中發現科學！</p>
          </div>
        </div>

        <div className={styles.filters}>
          {(["全部", "生活中的化學", "危險化學物質", "環境保護"] as const).map((f) => (
            <button key={f} className={styles.filterBtn}>{f}</button>
          ))}
        </div>

        <div className={styles.grid}>
          {ARTICLES.map((art, i) => (
            <Link key={art.href} href={art.href} className={styles.cardLink}
              style={{ animationDelay: `${i * 60}ms` }}>
              <Card className={styles.articleCard}>
                <div className={styles.meta}>
                  <Tag color={art.tagColor} variant="chip">{art.tag}</Tag>
                  <span className={styles.time}>{art.time} · {art.readMin} 分鐘</span>
                </div>
                <h2 className={styles.title}>{art.title}</h2>
                <p className={styles.excerpt}>{art.excerpt}</p>
                <span className={styles.readMore}>閱讀文章 →</span>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
