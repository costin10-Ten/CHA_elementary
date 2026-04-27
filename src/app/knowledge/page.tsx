"use client";

import { useState } from "react";
import Link from "next/link";
import Tag from "@/components/ui/Tag";
import Card from "@/components/ui/Card";
import OwlDoctor from "@/components/mascots/OwlDoctor";
import styles from "./page.module.css";

type Cat = "全部" | "生活化學" | "食品化學" | "危險物質" | "環境永續" | "材料科學";

const ARTICLES = [
  { href: "/knowledge/hand-warmer",    cat: "生活化學", tag: "生活中的化學", tagColor: "blue"  as const, title: "暖暖包為什麼會發熱？",        excerpt: "鐵粉氧化反應產生熱能，這就是暖暖包的化學原理。從成分到使用安全，一次搞懂！",      time: "2026-04-25", readMin: 4 },
  { href: "/knowledge/battery-safety", cat: "生活化學", tag: "生活中的化學", tagColor: "blue"  as const, title: "行動電源為什麼會爆炸？",      excerpt: "鋰電池熱失控的機制、正確使用守則，以及廢電池的安全處理方法。",                    time: "2026-04-22", readMin: 5 },
  { href: "/knowledge/water-chemistry",cat: "生活化學", tag: "生活中的化學", tagColor: "blue"  as const, title: "水是怎麼變乾淨的？",          excerpt: "自來水從河川到我們家，要經過混凝、沉澱、過濾、消毒等化學處理步驟。",             time: "2026-04-20", readMin: 5 },
  { href: "/knowledge/life",           cat: "生活化學", tag: "生活中的化學", tagColor: "blue"  as const, title: "廚房裡的化學反應",            excerpt: "煮飯時發生了哪些化學變化？麵包為什麼會膨脹？蛋為什麼加熱後會凝固？",             time: "2026-04-05", readMin: 6 },
  { href: "/knowledge/food-taste",     cat: "食品化學", tag: "食品化學",     tagColor: "green" as const, title: "酸甜苦鹹鮮：味覺的化學",      excerpt: "為什麼檸檬是酸的？糖是甜的？化學分子和味覺受體的精彩對話！",                    time: "2026-04-18", readMin: 6 },
  { href: "/knowledge/desiccant",      cat: "食品化學", tag: "食品化學",     tagColor: "green" as const, title: "乾燥劑與脫氧劑的秘密",        excerpt: "開餅乾看到的「請勿食用」小包，裡面裝了什麼？矽膠、生石灰、鐵粉各有何不同？",   time: "2026-03-05", readMin: 4 },
  { href: "/knowledge/cleaning-safety",cat: "危險物質", tag: "危險物質辨識", tagColor: "coral" as const, title: "清潔劑混合的危險！",          excerpt: "漂白水＋廁所清潔劑＝有毒氯氣！家用清潔劑千萬不能亂混，認識這些危險反應。",      time: "2026-04-10", readMin: 5 },
  { href: "/knowledge/ghs-symbols",   cat: "危險物質", tag: "危險物質辨識", tagColor: "coral" as const, title: "認識 GHS 危險標誌",          excerpt: "看到骷髏頭或火焰圖案，你知道它在警告什麼嗎？GHS 9 大象形圖完整圖解。",         time: "2026-04-15", readMin: 7 },
  { href: "/knowledge/hazard",         cat: "危險物質", tag: "危險物質辨識", tagColor: "coral" as const, title: "家裡有哪些危險化學品？",      excerpt: "清潔劑、農藥、電池⋯⋯這些日常用品如果使用不當，可能帶來危險！",                  time: "2026-03-20", readMin: 6 },
  { href: "/knowledge/mothballs",      cat: "危險物質", tag: "危險物質辨識", tagColor: "coral" as const, title: "樟腦丸為什麼要避免使用？",    excerpt: "萘和對二氯苯的健康風險，以及薰衣草香包等更安全的替代方案。",                    time: "2026-03-15", readMin: 5 },
  { href: "/knowledge/microplastics",  cat: "環境永續", tag: "環境與永續",   tagColor: "green" as const, title: "微塑膠：看不見的威脅",        excerpt: "比頭髮還細的塑膠顆粒，已出現在海底、人體血液。我們能做什麼？",                  time: "2026-04-14", readMin: 6 },
  { href: "/knowledge/pfas",           cat: "環境永續", tag: "環境與永續",   tagColor: "green" as const, title: "PFAS：永遠的化學物質",       excerpt: "不沾鍋、防水衣、食品包裝袋背後，藏著幾乎永遠不會分解的化學物質。",             time: "2026-03-10", readMin: 6 },
  { href: "/knowledge/environment",    cat: "環境永續", tag: "環境與永續",   tagColor: "green" as const, title: "酸雨是怎麼形成的？",          excerpt: "工廠排放 SO₂、NOₓ，使雨水 pH 值低於 5.6，帶來嚴重環境破壞。",              time: "2026-03-28", readMin: 5 },
  { href: "/knowledge/plastic-types",  cat: "環境永續", tag: "環境與永續",   tagColor: "green" as const, title: "塑膠編號你看懂了嗎？",        excerpt: "1-7 號代表不同材質，哪些可回收？3 號和 6 號為什麼要避免？",                   time: "2026-04-10", readMin: 4 },
  { href: "/knowledge/cool-fabric",    cat: "材料科學", tag: "材料科學",     tagColor: "cyan"  as const, title: "涼感衣與發熱衣的科學",        excerpt: "同樣是布料，涼感衣讓你涼、發熱衣讓你暖。纖維化學的精彩應用！",                  time: "2026-04-06", readMin: 5 },
];

const FILTERS: { label: string; value: Cat }[] = [
  { label: "全部", value: "全部" },
  { label: "🧪 生活化學", value: "生活化學" },
  { label: "🍎 食品化學", value: "食品化學" },
  { label: "⚠️ 危險物質", value: "危險物質" },
  { label: "🌍 環境永續", value: "環境永續" },
  { label: "👕 材料科學", value: "材料科學" },
];

export default function KnowledgePage() {
  const [active, setActive] = useState<Cat>("全部");

  const filtered = active === "全部"
    ? ARTICLES
    : ARTICLES.filter((a) => a.cat === active);

  return (
    <div className="section">
      <div className="container">
        <div className={styles.pageHeader}>
          <OwlDoctor mood="smile" size={96} />
          <div>
            <h1>知識文章庫</h1>
            <p className={styles.pageSubtitle}>
              和鴞博士一起探索化學的奧秘！共 {ARTICLES.length} 篇文章，涵蓋 5 大主題。
            </p>
          </div>
        </div>

        <div className={styles.filters} role="tablist" aria-label="文章分類篩選">
          {FILTERS.map(({ label, value }) => (
            <button
              key={value}
              role="tab"
              aria-selected={active === value}
              className={`${styles.filterBtn} ${active === value ? styles.filterActive : ""}`}
              onClick={() => setActive(value)}
            >
              {label}
              {value !== "全部" && (
                <span className={styles.filterCount}>
                  {ARTICLES.filter((a) => a.cat === value).length}
                </span>
              )}
            </button>
          ))}
        </div>

        <p className={styles.resultCount}>
          顯示 <strong>{filtered.length}</strong> 篇文章
          {active !== "全部" && `（${active}）`}
        </p>

        <div className={styles.grid}>
          {filtered.map((art, i) => (
            <Link
              key={art.href}
              href={art.href}
              className={styles.cardLink}
              style={{ animationDelay: `${i * 50}ms` }}
            >
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
