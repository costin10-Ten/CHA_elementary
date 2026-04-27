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
    href: "/knowledge?cat=life",
    icon: "🧪", color: "#D5EAF6", accent: "#1F7FB8",
    title: "生活中的化學",
    desc: "從早餐到睡前，化學無所不在！認識日常生活裡的化學物質。",
    tag: "日常科學", tagColor: "blue" as const, articles: 8,
  },
  {
    href: "/knowledge?cat=food",
    icon: "🍎", color: "#EAF2C8", accent: "#A6C83A",
    title: "食品化學",
    desc: "酸甜苦鹹怎麼來的？食物裡藏著哪些化學祕密？",
    tag: "吃的科學", tagColor: "green" as const, articles: 6,
  },
  {
    href: "/knowledge?cat=hazard",
    icon: "⚠️", color: "#FFE8D8", accent: "#FF8A5C",
    title: "危險物質辨識",
    desc: "學會辨識危險標誌，保護自己和家人！認識 GHS 9 大象形圖。",
    tag: "安全守護", tagColor: "coral" as const, articles: 5,
  },
  {
    href: "/knowledge?cat=environment",
    icon: "🌍", color: "#EAF2C8", accent: "#A6C83A",
    title: "環境與永續",
    desc: "微塑膠、酸雨、PFAS⋯⋯化學物質如何影響我們的地球？",
    tag: "地球守護", tagColor: "green" as const, articles: 6,
  },
  {
    href: "/knowledge?cat=materials",
    icon: "👕", color: "#D8FAFB", accent: "#5EE9F0",
    title: "材料科學",
    desc: "涼感衣、發熱衣、手機殼⋯⋯這些神奇材料是怎麼做到的？",
    tag: "神奇材料", tagColor: "cyan" as const, articles: 4,
  },
  {
    href: "/experiment",
    icon: "⚗️", color: "#FFF8D6", accent: "#FFD93D",
    title: "化學實驗",
    desc: "在家就能玩的安全小實驗！火山爆發、彩虹牛奶都學得會。",
    tag: "動手做", tagColor: "yellow" as const, articles: 4,
  },
];

const LATEST_ARTICLES = [
  {
    href: "/knowledge/hand-warmer",
    tag: "生活中的化學", tagColor: "blue" as const,
    title: "暖暖包為什麼會發熱？",
    excerpt: "冬天捏一下暖暖包，馬上暖烘烘！這背後是鐵粉氧化的化學反應，讓我們來看看原理...",
    time: "2026-04-25", readMin: 4,
  },
  {
    href: "/knowledge/battery-safety",
    tag: "生活中的化學", tagColor: "blue" as const,
    title: "行動電源為什麼會爆炸？",
    excerpt: "鋰電池爆炸的新聞偶有耳聞，但你知道它背後的化學原因嗎？又該如何安全使用？",
    time: "2026-04-22", readMin: 5,
  },
  {
    href: "/knowledge/food-taste",
    tag: "食品化學", tagColor: "green" as const,
    title: "酸甜苦鹹鮮：味覺的化學",
    excerpt: "為什麼檸檬是酸的？糖是甜的？這些味道背後，是化學分子和味覺受體的精彩對話！",
    time: "2026-04-18", readMin: 6,
  },
  {
    href: "/knowledge/microplastics",
    tag: "環境與永續", tagColor: "green" as const,
    title: "微塑膠：看不見的威脅",
    excerpt: "比頭髮還細的塑膠顆粒，已經出現在海底深處和人體血液裡。我們能做什麼？",
    time: "2026-04-14", readMin: 6,
  },
  {
    href: "/knowledge/cleaning-safety",
    tag: "危險物質辨識", tagColor: "coral" as const,
    title: "清潔劑混合的危險！",
    excerpt: "漂白水＋酒精＝有毒氯氣！家用清潔劑絕對不能亂混，讓我們認識這些危險反應。",
    time: "2026-04-10", readMin: 5,
  },
  {
    href: "/knowledge/cool-fabric",
    tag: "材料科學", tagColor: "cyan" as const,
    title: "涼感衣與發熱衣的科學",
    excerpt: "同樣是布料，為什麼涼感衣讓你涼、發熱衣讓你暖？這是纖維化學的魔法！",
    time: "2026-04-06", readMin: 5,
  },
];

const PARENT_TIPS = [
  { icon: "🔍", tip: "不認識的瓶罐，不要隨便打開聞或碰觸。" },
  { icon: "🚫", tip: "漂白水和酸性清潔劑絕對不能混合，會產生有毒氯氣。" },
  { icon: "🔋", tip: "行動電源、電池破損時勿繼續使用，放置通風處。" },
  { icon: "♻️", tip: "廢電池、廢藥品要送回收，不可丟一般垃圾。" },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────── */}
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
              <Button as="a" href="/game" size="lg" variant="primary">開始闖關 →</Button>
              <Button as="a" href="/knowledge" size="lg" variant="ghost">探索知識</Button>
            </div>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <span className={styles.statNum}>6</span>
                <span className={styles.statLabel}>主題</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statNum}>30+</span>
                <span className={styles.statLabel}>文章</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statNum}>20</span>
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
            <div className={styles.mascotOwl}><OwlDoctor mood="proud" size={160} /></div>
            <div className={styles.mascotResearcher}><Researcher mood="smile" size={140} wave /></div>
            <div className={styles.mascotFlasky}><Flasky mood="smile" size={100} /></div>
          </div>
        </div>
        <div className={styles.doodleH2O} aria-hidden>H₂O</div>
        <div className={styles.doodleNaCl} aria-hidden>NaCl</div>
        <div className={styles.doodleCO2} aria-hidden>CO₂</div>
      </section>

      {/* ── 6 Topic Grid ─────────────────────────── */}
      <section className={`section ${styles.topicsSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>六大探索主題</h2>
            <p className={styles.sectionSub}>選一個主題，開始你的化學冒險！</p>
          </div>
          <div className={styles.topicGrid}>
            {TOPICS.map((topic) => (
              <Link key={topic.href} href={topic.href} className={styles.topicLink}>
                <Card className={styles.topicCard}
                  style={{ "--topic-color": topic.color, "--topic-accent": topic.accent } as React.CSSProperties}>
                  <div className={styles.topicIcon} style={{ background: topic.color }} aria-hidden>
                    {topic.icon}
                  </div>
                  <div className={styles.topicTagRow}>
                    <Tag color={topic.tagColor} variant="chip">{topic.tag}</Tag>
                    <span className={styles.articleCount}>{topic.articles} 篇</span>
                  </div>
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
            <p>登入後可以紀錄學習進度和徽章收集！</p>
          </div>
          <div className={styles.progressBars}>
            <ProgressBar label="生活中的化學" value={40} color="primary" />
            <ProgressBar label="食品化學" value={15} color="secondary" />
            <ProgressBar label="危險物質辨識" value={20} color="warning" />
            <ProgressBar label="環境與永續" value={60} color="secondary" />
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
            {LATEST_ARTICLES.map((art) => (
              <Link key={art.href} href={art.href} className={styles.articleLink}>
                <Card className={styles.articleCard}>
                  <div className={styles.articleMeta}>
                    <Tag color={art.tagColor} variant="chip">{art.tag}</Tag>
                    <span className={styles.articleTime}>{art.time} · {art.readMin} 分鐘</span>
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

      {/* ── Parent Tips Strip ────────────────────── */}
      <section className={`section-sm ${styles.parentStrip}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>
              <span aria-hidden>👪</span> 家長叮嚀
            </h2>
            <Link href="/parents" className={styles.seeAll}>家長/教師專區 →</Link>
          </div>
          <div className={styles.tipGrid}>
            {PARENT_TIPS.map((t, i) => (
              <div key={i} className={styles.tipItem}>
                <span className={styles.tipIcon} aria-hidden>{t.icon}</span>
                <p className={styles.tipText}>{t.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Lesson Plans Promo ──────────────────── */}
      <section className={`section-sm ${styles.lessonBanner}`}>
        <div className={`container ${styles.lessonInner}`}>
          <div className={styles.lessonText}>
            <span className={styles.lessonBadge}>教師專區</span>
            <h2>教案免費下載</h2>
            <p>提供國小 5-6 年級自然科學課程教案，對應 108 課綱，可直接用於課堂教學。</p>
            <Button variant="secondary" size="lg" as="a" href="/lesson-plans">查看教案 →</Button>
          </div>
          <div className={styles.lessonMascot}>
            <OwlDoctor mood="thinking" size={120} />
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────── */}
      <section className={`section-sm ${styles.ctaBanner}`}>
        <div className={`container ${styles.ctaInner}`}>
          <div className={styles.ctaMascot}><Flasky mood="smile" size={80} /></div>
          <div>
            <h2 className={styles.ctaTitle}>準備好挑戰了嗎？</h2>
            <p>完成闖關、收集徽章，成為化學小達人！</p>
          </div>
          <Button variant="secondary" size="lg" as="a" href="/game">立即挑戰闖關 ⚗️</Button>
        </div>
      </section>
    </>
  );
}
