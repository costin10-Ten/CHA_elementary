"use client";

import { useState } from "react";
import QuizCard, { type QuizQuestion } from "@/components/game/QuizCard";
import BadgePopup, { type BadgeData } from "@/components/game/BadgePopup";
import ProgressBar from "@/components/ui/ProgressBar";
import Button from "@/components/ui/Button";
import Researcher from "@/components/mascots/Researcher";
import Flasky from "@/components/mascots/Flasky";
import Link from "next/link";
import styles from "./page.module.css";

type GameCategory = "all" | "chem-basics" | "food-science" | "safety" | "environment";

interface CategoryMeta {
  id: GameCategory;
  label: string;
  emoji: string;
  desc: string;
  badge: BadgeData;
  relatedArticles: { href: string; title: string }[];
}

const CATEGORIES: CategoryMeta[] = [
  {
    id: "chem-basics",
    label: "基礎化學",
    emoji: "🧪",
    desc: "水、元素符號、化學反應…從最基礎開始！",
    badge: { id: "chem-basics", name: "化學小學徒", icon: "🧪", description: "完成基礎化學關卡，踏上化學之旅！" },
    relatedArticles: [
      { href: "/knowledge/life", title: "廚房裡的化學反應" },
      { href: "/knowledge/water-chemistry", title: "水是怎麼變乾淨的？" },
    ],
  },
  {
    id: "food-science",
    label: "食品科學",
    emoji: "🍎",
    desc: "味覺、保鮮、添加物…舌尖上的化學！",
    badge: { id: "food-science", name: "美食化學家", icon: "🍎", description: "完成食品科學關卡，成為美食化學家！" },
    relatedArticles: [
      { href: "/knowledge/food-taste", title: "酸甜苦鹹鮮：味覺的化學" },
      { href: "/knowledge/desiccant", title: "乾燥劑與脫氧劑的秘密" },
    ],
  },
  {
    id: "safety",
    label: "安全知識",
    emoji: "🛡️",
    desc: "GHS、清潔劑、電池…守護自己的化學！",
    badge: { id: "safety", name: "安全守護者", icon: "🛡️", description: "完成安全知識關卡，成為安全守護者！" },
    relatedArticles: [
      { href: "/knowledge/ghs-symbols", title: "認識 GHS 危險標誌" },
      { href: "/knowledge/cleaning-safety", title: "清潔劑混合的危險！" },
    ],
  },
  {
    id: "environment",
    label: "環境保護",
    emoji: "🌍",
    desc: "微塑膠、PFAS、酸雨…守護地球！",
    badge: { id: "environment", name: "地球守衛者", icon: "🌍", description: "完成環境保護關卡，成為地球守衛者！" },
    relatedArticles: [
      { href: "/knowledge/microplastics", title: "微塑膠：看不見的威脅" },
      { href: "/knowledge/environment", title: "酸雨是怎麼形成的？" },
    ],
  },
];

const ALL_BADGE: BadgeData = {
  id: "quiz-master",
  name: "化學大師",
  icon: "🏆",
  description: "完成全部 20 題挑戰，榮獲化學大師稱號！",
};

const QUIZ_QUESTIONS: (QuizQuestion & { category: GameCategory })[] = [
  // 🧪 基礎化學
  {
    id: "cb1", category: "chem-basics",
    question: "水的化學式是什麼？",
    options: [{ id: "A", text: "CO₂" }, { id: "B", text: "H₂O" }, { id: "C", text: "NaCl" }, { id: "D", text: "O₂" }],
    correctId: "B",
    explanation: "水的化學式是 H₂O，每個水分子由 2 個氫原子（H）和 1 個氧原子（O）組成。",
    hint: "想想看水裡面有哪兩種元素？",
  },
  {
    id: "cb2", category: "chem-basics",
    question: "廚房用的食鹽（氯化鈉）化學式為何？",
    options: [{ id: "A", text: "NaCl" }, { id: "B", text: "KCl" }, { id: "C", text: "CaCO₃" }, { id: "D", text: "NaOH" }],
    correctId: "A",
    explanation: "食鹽（氯化鈉）的化學式是 NaCl，由鈉（Na）和氯（Cl）組成。",
    hint: "Na 是鈉，Cl 是氯的元素符號。",
  },
  {
    id: "cb3", category: "chem-basics",
    question: "植物行光合作用時，吸收的氣體是？",
    options: [{ id: "A", text: "氧氣（O₂）" }, { id: "B", text: "氮氣（N₂）" }, { id: "C", text: "二氧化碳（CO₂）" }, { id: "D", text: "氫氣（H₂）" }],
    correctId: "C",
    explanation: "植物吸收 CO₂ 和水，在陽光下製造葡萄糖和氧氣。",
    hint: "溫室效應就和這種氣體有關！",
  },
  {
    id: "cb4", category: "chem-basics",
    question: "自來水消毒常用的化學物質是？",
    options: [{ id: "A", text: "糖（蔗糖）" }, { id: "B", text: "酒精（乙醇）" }, { id: "C", text: "氯（Cl₂）或次氯酸" }, { id: "D", text: "醋（醋酸）" }],
    correctId: "C",
    explanation: "自來水廠使用氯氣或次氯酸鈉消毒，能有效殺死細菌和病毒。",
    hint: "有時打開水龍頭會聞到淡淡的刺鼻味，那就是它！",
  },
  {
    id: "cb5", category: "chem-basics",
    question: "下列哪個是酸性物質？",
    options: [{ id: "A", text: "食用小蘇打（NaHCO₃）" }, { id: "B", text: "石灰水（Ca(OH)₂）" }, { id: "C", text: "醋（CH₃COOH）" }, { id: "D", text: "食鹽水（NaCl）" }],
    correctId: "C",
    explanation: "醋含有醋酸（CH₃COOH），pH 值約 2.5～3，是常見的酸性物質。小蘇打和石灰水是鹼性的。",
    hint: "酸的味道是⋯酸的！",
  },
  // 🍎 食品科學
  {
    id: "fs1", category: "food-science",
    question: "讓食物嚐起來酸的，是哪種化學特性？",
    options: [{ id: "A", text: "鹼性（pH 值高）" }, { id: "B", text: "酸性（pH 值低）" }, { id: "C", text: "中性（pH = 7）" }, { id: "D", text: "高溫" }],
    correctId: "B",
    explanation: "酸味來自食物中的酸性物質（如醋酸、檸檬酸），它們讓 pH 值降低，刺激味蕾產生酸的感覺。",
    hint: "檸檬和醋都很酸，它們都是酸性！",
  },
  {
    id: "fs2", category: "food-science",
    question: "乾燥劑的主要功能是？",
    options: [{ id: "A", text: "吸收氧氣" }, { id: "B", text: "吸收水分（濕氣）" }, { id: "C", text: "防止細菌生長" }, { id: "D", text: "增加香氣" }],
    correctId: "B",
    explanation: "乾燥劑（如矽膠、生石灰）的功能是吸收濕氣（水蒸氣），防止食品受潮變質。",
    hint: "「乾燥」的相反是什麼？",
  },
  {
    id: "fs3", category: "food-science",
    question: "脫氧劑的主要成分通常是？",
    options: [{ id: "A", text: "矽膠（SiO₂）" }, { id: "B", text: "生石灰（CaO）" }, { id: "C", text: "鐵粉（Fe）" }, { id: "D", text: "活性碳" }],
    correctId: "C",
    explanation: "脫氧劑主要成分是鐵粉，鐵粉氧化（生鏽）時吸收包裝內的氧氣，防止食物氧化變質。",
    hint: "暖暖包的發熱原理和脫氧劑一樣喔！",
  },
  {
    id: "fs4", category: "food-science",
    question: "生石灰（CaO）乾燥劑誤加水會發生什麼事？",
    options: [{ id: "A", text: "變成乾粉" }, { id: "B", text: "發生激烈反應並放熱" }, { id: "C", text: "什麼都不會發生" }, { id: "D", text: "變成氣體" }],
    correctId: "B",
    explanation: "CaO + H₂O → Ca(OH)₂，這個反應會放出大量熱，可能燙傷！千萬不能把水倒進生石灰乾燥劑。",
    hint: "海苔包裝常見的乾燥劑，一定要遠離水！",
  },
  {
    id: "fs5", category: "food-science",
    question: "辣椒的辣味來自哪種化學物質？",
    options: [{ id: "A", text: "薄荷醇（Menthol）" }, { id: "B", text: "辣椒素（Capsaicin）" }, { id: "C", text: "咖啡因（Caffeine）" }, { id: "D", text: "檸檬酸（Citric acid）" }],
    correctId: "B",
    explanation: "辣椒素（Capsaicin，C₁₈H₂₇NO₃）結合舌頭的 TRPV1 受體，讓大腦誤以為感受到高溫，產生「辣」的感覺。",
    hint: "辣其實不是味覺，是一種痛覺！",
  },
  // 🛡️ 安全知識
  {
    id: "sf1", category: "safety",
    question: "GHS 危險化學品象形圖是什麼形狀？",
    options: [{ id: "A", text: "藍色圓形" }, { id: "B", text: "綠色方形" }, { id: "C", text: "橘紅色菱形（鑽石形）" }, { id: "D", text: "黃色三角形" }],
    correctId: "C",
    explanation: "GHS 象形圖是橘紅色菱形（鑽石形）底色，配上黑色圖案，全球共有 9 大類。",
    hint: "GHS 的顏色非常醒目，在貨架上一眼就能看見！",
  },
  {
    id: "sf2", category: "safety",
    question: "漂白水＋廁所清潔劑（鹽酸）混合會產生？",
    options: [{ id: "A", text: "清水" }, { id: "B", text: "有毒氯氣（Cl₂）" }, { id: "C", text: "氧氣" }, { id: "D", text: "二氧化碳" }],
    correctId: "B",
    explanation: "次氯酸鈉（漂白水）＋鹽酸 → 氯氣（Cl₂）！氯氣具高度毒性，會刺激呼吸道，嚴重時危及生命。",
    hint: "這也是化學戰劑之一，絕對不能混合！",
  },
  {
    id: "sf3", category: "safety",
    question: "鋰電池「熱失控」主要是指？",
    options: [{ id: "A", text: "電池沒電了" }, { id: "B", text: "電池過熱引發連鎖反應，可能燃燒或爆炸" }, { id: "C", text: "電池充電太慢" }, { id: "D", text: "電池變重了" }],
    correctId: "B",
    explanation: "熱失控是電池內部過熱引發連鎖放熱反應，導致溫度急速上升，可能噴火甚至爆炸。鼓脹的電池要立即停用。",
    hint: "行動電源鼓脹是熱失控的早期警告！",
  },
  {
    id: "sf4", category: "safety",
    question: "合成樟腦丸的成分「萘（Naphthalene）」有什麼健康風險？",
    options: [{ id: "A", text: "只是氣味難聞，完全無害" }, { id: "B", text: "被 IARC 列為可能致癌物，長期接觸有健康風險" }, { id: "C", text: "對人無害，但對植物有害" }, { id: "D", text: "只在高濃度時才有危險" }],
    correctId: "B",
    explanation: "萘被 IARC（國際癌症研究機構）列為 2B 類可能致癌物，長期接觸蒸氣可能傷害神經，嬰幼兒尤其敏感。",
    hint: "聞到衣櫃裡的濃烈味道，要注意通風！",
  },
  {
    id: "sf5", category: "safety",
    question: "發現有人吸入有毒氣體昏迷，第一步應做什麼？",
    options: [{ id: "A", text: "留在現場嘗試自行急救" }, { id: "B", text: "立刻撥打 119，把傷者移到通風處（如自身安全無虞）" }, { id: "C", text: "給傷者喝大量的水" }, { id: "D", text: "讓傷者繼續待在原地等救援" }],
    correctId: "B",
    explanation: "遇到中毒事故：確認自身安全 → 撥打 119 → 協助傷者離開毒氣環境到通風處。切勿貿然進入毒氣環境。",
    hint: "自身安全優先，才能有效幫助他人。",
  },
  // 🌍 環境保護
  {
    id: "ev1", category: "environment",
    question: "「酸雨」的 pH 值門檻是？",
    options: [{ id: "A", text: "pH < 7（中性水）" }, { id: "B", text: "pH < 5.6" }, { id: "C", text: "pH < 4" }, { id: "D", text: "pH = 7" }],
    correctId: "B",
    explanation: "正常雨水 pH 約 5.6（因溶有 CO₂）。低於 5.6 稱為酸雨，主要由工廠排放的 SO₂ 和 NOₓ 造成。",
    hint: "正常雨水不是純中性的喔！",
  },
  {
    id: "ev2", category: "environment",
    question: "微塑膠（Microplastics）的定義是？",
    options: [{ id: "A", text: "直徑小於 5 mm 的塑膠顆粒" }, { id: "B", text: "肉眼可見的塑膠垃圾" }, { id: "C", text: "可生物降解的塑膠" }, { id: "D", text: "重量低於 5 克的塑膠" }],
    correctId: "A",
    explanation: "微塑膠是直徑小於 5 mm 的塑膠顆粒，已在海底、空氣、飲水，甚至人體血液中被發現。",
    hint: "比頭髮的寬度還細，肉眼幾乎看不見！",
  },
  {
    id: "ev3", category: "environment",
    question: "PFAS 被稱為「永遠的化學物質」原因是？",
    options: [{ id: "A", text: "價格永遠很貴" }, { id: "B", text: "含有極強的碳氟鍵（C-F），在環境中幾乎不分解" }, { id: "C", text: "使用壽命很長" }, { id: "D", text: "發明時間很久遠" }],
    correctId: "B",
    explanation: "PFAS 含有碳氟鍵（C-F），鍵能高達 544 kJ/mol，是最強化學鍵之一，在自然界幾乎不降解。",
    hint: "C-F 鍵是化學世界中最難打破的鍵之一！",
  },
  {
    id: "ev4", category: "environment",
    question: "塑膠回收標誌「1號」（PET）最常見於？",
    options: [{ id: "A", text: "購物袋" }, { id: "B", text: "寶特瓶（礦泉水瓶）" }, { id: "C", text: "保麗龍（泡沫塑膠）" }, { id: "D", text: "水管" }],
    correctId: "B",
    explanation: "1號 PET（聚對苯二甲酸乙二酯）最常見於礦泉水瓶、飲料瓶，是回收率最高的塑膠之一。",
    hint: "喝完的礦泉水瓶底部有個數字，看看是幾號？",
  },
  {
    id: "ev5", category: "environment",
    question: "造成臭氧層破洞的主要物質是？",
    options: [{ id: "A", text: "二氧化碳（CO₂）" }, { id: "B", text: "氯氟碳化物（CFC，俗稱氟氯烴）" }, { id: "C", text: "二氧化硫（SO₂）" }, { id: "D", text: "甲烷（CH₄）" }],
    correctId: "B",
    explanation: "舊型冷氣、冰箱使用的 CFC（氟氯烴）釋放後，在高空分解出氯原子，催化分解臭氧層。1987 年《蒙特婁議定書》禁止使用。",
    hint: "這也是為什麼現在冰箱不再使用「氟利昂」的原因！",
  },
];

function getQuestions(category: GameCategory) {
  return category === "all" ? QUIZ_QUESTIONS : QUIZ_QUESTIONS.filter(q => q.category === category);
}

function getCategoryMeta(category: GameCategory): CategoryMeta | null {
  return CATEGORIES.find(c => c.id === category) ?? null;
}

export default function GamePage() {
  const [phase, setPhase] = useState<"select" | "playing" | "done">("select");
  const [selectedCategory, setSelectedCategory] = useState<GameCategory>("all");
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(0);
  const [showBadge, setShowBadge] = useState(false);

  const questions = getQuestions(selectedCategory);
  const question = questions[currentIdx];
  const progress = (answered / questions.length) * 100;
  const catMeta = getCategoryMeta(selectedCategory);
  const badge = selectedCategory === "all" ? ALL_BADGE : catMeta?.badge ?? ALL_BADGE;

  function startGame(cat: GameCategory) {
    setSelectedCategory(cat);
    setCurrentIdx(0);
    setScore(0);
    setAnswered(0);
    setPhase("playing");
  }

  function handleCorrect() { setScore(s => s + 1); setAnswered(a => a + 1); }
  function handleWrong()   { setAnswered(a => a + 1); }

  function handleNext() {
    if (currentIdx + 1 >= questions.length) {
      setPhase("done");
      if (score + 1 >= Math.ceil(questions.length * 0.8)) {
        setTimeout(() => setShowBadge(true), 400);
      }
    } else {
      setCurrentIdx(i => i + 1);
    }
  }

  function handleRestart() {
    setCurrentIdx(0);
    setScore(0);
    setAnswered(0);
    setPhase("select");
    setShowBadge(false);
  }

  return (
    <>
      <div className={`section ${styles.page}`}>
        <div className="container">
          {phase === "select" && (
            <CategorySelect onStart={startGame} />
          )}

          {phase === "playing" && (
            <>
              <div className={styles.header}>
                <div className={styles.headerText}>
                  <h1>闖關遊戲</h1>
                  <p className={styles.subtitle}>
                    {selectedCategory === "all" ? "全部挑戰" : `${catMeta?.emoji} ${catMeta?.label}`}
                    {" · "}共 {questions.length} 題
                  </p>
                </div>
                <div className={styles.scoreBoard}>
                  <span className={styles.scoreLabel}>目前得分</span>
                  <span className={styles.scoreNum}>{score} / {answered}</span>
                </div>
              </div>

              <ProgressBar
                value={answered}
                max={questions.length}
                label={`進度 ${answered}/${questions.length}`}
                color="secondary"
                className={styles.progressBar}
              />

              <div className={styles.quizArea}>
                <div className={styles.mascotGuide}>
                  <Researcher mood="smile" size={80} />
                  <div className={styles.guideText}>
                    <p>第 {currentIdx + 1} 題，加油！</p>
                  </div>
                </div>
                <QuizCard
                  key={question.id}
                  question={question}
                  onCorrect={handleCorrect}
                  onWrong={handleWrong}
                  onNext={handleNext}
                />
              </div>
            </>
          )}

          {phase === "done" && (
            <ResultScreen
              score={score}
              total={questions.length}
              category={selectedCategory}
              catMeta={catMeta}
              onRestart={handleRestart}
            />
          )}
        </div>
      </div>

      <BadgePopup badge={showBadge ? badge : null} onClose={() => setShowBadge(false)} />
    </>
  );
}

function CategorySelect({ onStart }: { onStart: (cat: GameCategory) => void }) {
  return (
    <div className={styles.categorySelect}>
      <div className={styles.header}>
        <div className={styles.headerText}>
          <h1>闖關遊戲</h1>
          <p className={styles.subtitle}>選擇你想挑戰的主題，或一次全部挑戰！</p>
        </div>
      </div>

      <div className={styles.categoryGrid}>
        {CATEGORIES.map(cat => (
          <button
            key={cat.id}
            className={styles.categoryCard}
            onClick={() => onStart(cat.id)}
          >
            <span className={styles.catEmoji}>{cat.emoji}</span>
            <strong className={styles.catLabel}>{cat.label}</strong>
            <span className={styles.catDesc}>{cat.desc}</span>
            <span className={styles.catCount}>5 題</span>
          </button>
        ))}
      </div>

      <div className={styles.allChallenge}>
        <button className={styles.allChallengeBtn} onClick={() => onStart("all")}>
          <span style={{ fontSize: 36 }}>🏆</span>
          <div>
            <strong>全部挑戰</strong>
            <p>20 題一次全部挑戰，獲得化學大師徽章！</p>
          </div>
        </button>
      </div>
    </div>
  );
}

function ResultScreen({
  score, total, category, catMeta, onRestart
}: {
  score: number;
  total: number;
  category: GameCategory;
  catMeta: CategoryMeta | null;
  onRestart: () => void;
}) {
  const pct = Math.round((score / total) * 100);
  const passed = score >= Math.ceil(total * 0.8);
  const relatedArticles = catMeta?.relatedArticles ?? [
    { href: "/knowledge/life", title: "廚房裡的化學反應" },
    { href: "/knowledge/ghs-symbols", title: "認識 GHS 危險標誌" },
    { href: "/knowledge/microplastics", title: "微塑膠：看不見的威脅" },
  ];

  return (
    <div className={styles.result}>
      <div className={styles.resultMascot}>
        <Flasky mood={passed ? "proud" : "thinking"} size={120} />
      </div>
      <h2 className={styles.resultTitle}>{passed ? "太厲害了！" : "繼續加油！"}</h2>
      <p className={styles.resultScore}>{score} / {total} 答對</p>
      <p className={styles.resultPct}>{pct}%</p>
      <p className={styles.resultMsg}>
        {passed
          ? "你已經掌握了這個主題的知識，繼續探索更多化學世界吧！"
          : "不要灰心！讀讀相關文章，再重新挑戰看看！"}
      </p>

      <div className={styles.relatedSection}>
        <p className={styles.relatedTitle}>推薦閱讀：</p>
        <div className={styles.relatedLinks}>
          {relatedArticles.map(a => (
            <Link key={a.href} href={a.href} className={styles.relatedLink}>{a.title} →</Link>
          ))}
        </div>
      </div>

      <div className={styles.resultActions}>
        <Button variant="secondary" size="lg" onClick={onRestart}>選擇其他主題</Button>
        <Button variant="ghost" size="lg" as="a" href="/knowledge">閱讀知識文章</Button>
      </div>
    </div>
  );
}
