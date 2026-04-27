"use client";

import { useState } from "react";
import QuizCard, { type QuizQuestion } from "@/components/game/QuizCard";
import BadgePopup, { type BadgeData } from "@/components/game/BadgePopup";
import ProgressBar from "@/components/ui/ProgressBar";
import Button from "@/components/ui/Button";
import Researcher from "@/components/mascots/Researcher";
import Flasky from "@/components/mascots/Flasky";
import styles from "./page.module.css";

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: "q1",
    question: "水的化學式是什麼？",
    options: [
      { id: "A", text: "CO₂" },
      { id: "B", text: "H₂O" },
      { id: "C", text: "NaCl" },
      { id: "D", text: "O₂" },
    ],
    correctId: "B",
    explanation: "水的化學式是 H₂O，代表每個水分子由 2 個氫原子（H）和 1 個氧原子（O）組成。",
    hint: "想想看水裡面有哪兩種元素？",
  },
  {
    id: "q2",
    question: "下列哪一個是GHS危險化學品象形圖的形狀？",
    options: [
      { id: "A", text: "藍色圓形" },
      { id: "B", text: "綠色方形" },
      { id: "C", text: "橘紅色菱形" },
      { id: "D", text: "黃色三角形" },
    ],
    correctId: "C",
    explanation: "GHS象形圖是橘紅色菱形（鑽石形）底色，配上黑色圖案。全球共有9大類象形圖。",
    hint: "GHS是聯合國的化學品標示系統，顏色很鮮明，容易辨識。",
  },
  {
    id: "q3",
    question: "廚房使用的食鹽（氯化鈉）化學式為何？",
    options: [
      { id: "A", text: "NaCl" },
      { id: "B", text: "KCl" },
      { id: "C", text: "CaCO₃" },
      { id: "D", text: "NaOH" },
    ],
    correctId: "A",
    explanation: "食鹽（氯化鈉）的化學式是 NaCl，由鈉（Na）和氯（Cl）組成。",
    hint: "Na是鈉的元素符號，Cl是氯的元素符號。",
  },
  {
    id: "q4",
    question: "以下哪種氣體是植物行光合作用時吸收的？",
    options: [
      { id: "A", text: "氧氣（O₂）" },
      { id: "B", text: "氮氣（N₂）" },
      { id: "C", text: "二氧化碳（CO₂）" },
      { id: "D", text: "氫氣（H₂）" },
    ],
    correctId: "C",
    explanation: "植物行光合作用時，吸收二氧化碳（CO₂）和水，在陽光下製造葡萄糖和氧氣。",
    hint: "溫室效應就和這種氣體有關喔！",
  },
  {
    id: "q5",
    question: "自來水消毒常用的化學物質是？",
    options: [
      { id: "A", text: "糖（蔗糖）" },
      { id: "B", text: "酒精（乙醇）" },
      { id: "C", text: "氯（Cl₂）或次氯酸" },
      { id: "D", text: "醋（醋酸）" },
    ],
    correctId: "C",
    explanation: "自來水廠使用氯氣或次氯酸鈉進行消毒，能有效殺死細菌和病毒，保護飲水安全。",
    hint: "有時打開水龍頭會聞到淡淡的刺鼻味，那就是它！",
  },
];

const COMPLETION_BADGE: BadgeData = {
  id: "quiz-master",
  name: "化學小達人",
  icon: "🏆",
  description: "完成生活化學基礎關卡，獲得化學小達人稱號！",
};

export default function GamePage() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(0);
  const [showBadge, setShowBadge] = useState(false);
  const [finished, setFinished] = useState(false);

  const question = QUIZ_QUESTIONS[currentIdx];
  const progress = (answered / QUIZ_QUESTIONS.length) * 100;

  function handleCorrect() { setScore((s) => s + 1); setAnswered((a) => a + 1); }
  function handleWrong()   { setAnswered((a) => a + 1); }

  function handleNext() {
    if (currentIdx + 1 >= QUIZ_QUESTIONS.length) {
      setFinished(true);
      if (score + 1 >= Math.ceil(QUIZ_QUESTIONS.length * 0.8)) {
        setTimeout(() => setShowBadge(true), 400);
      }
    } else {
      setCurrentIdx((i) => i + 1);
    }
  }

  function handleRestart() {
    setCurrentIdx(0);
    setScore(0);
    setAnswered(0);
    setFinished(false);
    setShowBadge(false);
  }

  return (
    <>
      <div className={`section ${styles.page}`}>
        <div className="container">
          <div className={styles.header}>
            <div className={styles.headerText}>
              <h1>闖關遊戲</h1>
              <p className={styles.subtitle}>生活化學基礎關卡 · 共 {QUIZ_QUESTIONS.length} 題</p>
            </div>
            <div className={styles.scoreBoard}>
              <span className={styles.scoreLabel}>目前得分</span>
              <span className={styles.scoreNum}>{score} / {answered}</span>
            </div>
          </div>

          <ProgressBar
            value={answered}
            max={QUIZ_QUESTIONS.length}
            label={`進度 ${answered}/${QUIZ_QUESTIONS.length}`}
            color="secondary"
            className={styles.progressBar}
          />

          {!finished ? (
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
          ) : (
            <ResultScreen
              score={score}
              total={QUIZ_QUESTIONS.length}
              onRestart={handleRestart}
            />
          )}
        </div>
      </div>

      <BadgePopup badge={showBadge ? COMPLETION_BADGE : null} onClose={() => setShowBadge(false)} />
    </>
  );
}

function ResultScreen({ score, total, onRestart }: { score: number; total: number; onRestart: () => void }) {
  const pct = Math.round((score / total) * 100);
  const passed = score >= Math.ceil(total * 0.8);

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
          ? "你已經掌握了生活化學的基礎知識，繼續探索更多主題吧！"
          : "不要灰心！再讀一讀知識文章，然後重新挑戰看看！"}
      </p>
      <div className={styles.resultActions}>
        <Button variant="secondary" size="lg" onClick={onRestart}>再挑戰一次</Button>
        <Button variant="ghost" size="lg" as="a" href="/knowledge">閱讀相關文章</Button>
      </div>
    </div>
  );
}
