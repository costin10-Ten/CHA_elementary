import Link from "next/link";
import OwlDoctor from "@/components/mascots/OwlDoctor";
import Researcher from "@/components/mascots/Researcher";
import Flasky from "@/components/mascots/Flasky";
import Card from "@/components/ui/Card";
import Tag from "@/components/ui/Tag";
import Button from "@/components/ui/Button";
import ProgressBar from "@/components/ui/ProgressBar";
import styles from "./page.module.css";

const TOPICS = [
  {
    href: "/knowledge/life",
    icon: "🧪",
    color: "#D5EAF6",
    accent: "#1F7FB8",
    title: "生活中的化學",
    desc: "從早餐到睡前，化學無所不在！",
    tag: "日常科學",
    tagColor: "blue" as const,
  },
  {
    href: "/knowledge/hazard",
    icon: "⚠️",
    color: "#FFE8D8",
    accent: "#FF8A5C",
    title: "危險化學物質辨識",
    desc: "學會辨識危險標誌，保護自己和家人！",
    tag: "安全知識",
    tagColor: "coral" as const,
  },
  {
    href: "/knowledge/environment",
    icon: "🌍",
    color: "#EAF2C8",
    accent: "#A6C83A",
    title: "環境保護",
    desc: "化學與地球的故事，我們都是守護者。",
    tag: "環保行動",
    tagColor: "green" as const,
  },
  {
    href: "/experiment",
    icon: "⚗️",
    color: "#FFF8D6",
    accent: "#FFD93D",
    title: "有趣的化學實驗",
    desc: "在家就能玩的安全小實驗！",
    tag: "互動實驗",
    tagColor: "yellow" as const,
  },
];

const ARTICLES = [
  {
    href: "/knowledge/water-chemistry",
    tag: "生活中的化學",
    tagColor: "blue" as const,
    title: "水是怎麼變乾淨的？",
    excerpt: "自來水從河川到我們家，要經過哪些化學處理？讓鴞博士帶你一步步了解淨水的科學原理...",
    time: "2026-04-20",
    readMin: 5,
  },
  {
    href: "/knowledge/ghs-symbols",
    tag: "危險化學物質",
    tagColor: "coral" as const,
    title: "認識 GHS 危險標誌",
    excerpt: "看到骷髏頭或火焰圖案，你知道它在警告什麼嗎？GHS 9 大象形圖完整圖解...",
    time: "2026-04-15",
    readMin: 7,
  },
  {
    href: "/knowledge/plastic-types",
    tag: "環境保護",
    tagColor: "green" as const,
    title: "塑膠編號你看懂了嗎？",
    excerpt: "寶特瓶底部的數字代表什麼？哪些可以回收？哪些要特別注意？",
    time: "2026-04-10",
    readMin: 4,
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero Section ─────────────────────────── */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroText}>
            <span className={styles.heroEyebrow}>環境部化學物質管理署 出品</span>
            <h1 className={`display ${styles.heroTitle}`}>
              化學的世界<br/>
              <span className={styles.heroHighlight}>超有趣！</span>
            </h1>
            <p className={styles.heroLead}>
              歡迎來到化學物質科普知識園區！<br/>
              透過闖關遊戲、互動實驗，一起探索生活中的化學奧秘！
            </p>
            <div className={styles.heroActions}>
              <Button as="a" href="/game" size="lg" variant="primary">
                開始闖關 →
              </Button>
              <Button as="a" href="/knowledge" size="lg" variant="ghost">
                探索知識
              </Button>
            </div>

            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <span className={styles.statNum}>4</span>
                <span className={styles.statLabel}>主題</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statNum}>20+</span>
                <span className={styles.statLabel}>關卡</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statNum}>12</span>
                <span className={styles.statLabel}>徽章</span>
              </div>
            </div>
          </div>

          <div className={styles.heroMascots}>
            <div className={styles.mascotOwl}>
              <OwlDoctor mood="proud" size={160} />
            </div>
            <div className={styles.mascotResearcher}>
              <Researcher mood="smile" size={140} wave />
            </div>
            <div className={styles.mascotFlasky}>
              <Flasky mood="smile" size={100} />
            </div>
          </div>
        </div>

        {/* Decorative chemistry doodles */}
        <div className={styles.doodleH2O} aria-hidden>H₂O</div>
        <div className={styles.doodleNaCl} aria-hidden>NaCl</div>
        <div className={styles.doodleCO2} aria-hidden>CO₂</div>
      </section>

      {/* ── Topic Grid ───────────────────────────── */}
      <section className={`section ${styles.topicsSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>四大探索主題</h2>
            <p className={styles.sectionSub}>選一個主題，開始你的化學冒險！</p>
          </div>

          <div className={styles.topicGrid}>
            {TOPICS.map((topic) => (
              <Link key={topic.href} href={topic.href} className={styles.topicLink}>
                <Card className={styles.topicCard} style={{ "--topic-color": topic.color, "--topic-accent": topic.accent } as React.CSSProperties}>
                  <div className={styles.topicIcon} style={{ background: topic.color }} aria-hidden>
                    {topic.icon}
                  </div>
                  <Tag color={topic.tagColor} variant="chip" className={styles.topicTag}>
                    {topic.tag}
                  </Tag>
                  <h3 className={styles.topicTitle}>{topic.title}</h3>
                  <p className={styles.topicDesc}>{topic.desc}</p>
                  <span className={styles.topicArrow} aria-hidden>→</span>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Progress Banner ──────────────────────── */}
      <section className={`section-sm ${styles.progressBanner}`}>
        <div className={`container ${styles.progressInner}`}>
          <div className={styles.progressText}>
            <h2>你的學習進度</h2>
            <p>登入後可以紀錄你的學習進度和徽章收集！</p>
          </div>
          <div className={styles.progressBars}>
            <ProgressBar label="生活中的化學" value={40} color="primary" />
            <ProgressBar label="危險化學物質辨識" value={20} color="warning" />
            <ProgressBar label="環境保護" value={60} color="secondary" />
          </div>
          <Button variant="primary" size="md">登入紀錄進度</Button>
        </div>
      </section>

      {/* ── Latest Articles ──────────────────────── */}
      <section className={`section ${styles.articlesSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>最新知識文章</h2>
            <Link href="/knowledge" className={styles.seeAll}>查看全部 →</Link>
          </div>

          <div className={styles.articleGrid}>
            {ARTICLES.map((art) => (
              <Link key={art.href} href={art.href} className={styles.articleLink}>
                <Card className={styles.articleCard}>
                  <div className={styles.articleMeta}>
                    <Tag color={art.tagColor} variant="chip">{art.tag}</Tag>
                    <span className={styles.articleTime}>
                      {art.time} · {art.readMin} 分鐘
                    </span>
                  </div>
                  <h3 className={styles.articleTitle}>{art.title}</h3>
                  <p className={styles.articleExcerpt}>{art.excerpt}</p>
                  <span className={styles.readMore}>閱讀文章 →</span>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────── */}
      <section className={`section-sm ${styles.ctaBanner}`}>
        <div className={`container ${styles.ctaInner}`}>
          <div className={styles.ctaMascot}>
            <Flasky mood="smile" size={80} />
          </div>
          <div>
            <h2 className={styles.ctaTitle}>準備好挑戰了嗎？</h2>
            <p>完成闖關、收集徽章，成為化學小達人！</p>
          </div>
          <Button variant="secondary" size="lg" as="a" href="/game">
            立即挑戰闖關 ⚗️
          </Button>
        </div>
      </section>
    </>
  );
}
