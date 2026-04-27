"use client";

import { useState } from "react";
import styles from "./QuizCard.module.css";
import OwlDoctor from "@/components/mascots/OwlDoctor";
import Flasky from "@/components/mascots/Flasky";
import Button from "@/components/ui/Button";

export interface QuizOption {
  id: string;
  text: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
  correctId: string;
  explanation: string;
  hint?: string;
}

interface Props {
  question: QuizQuestion;
  onCorrect?: () => void;
  onWrong?: () => void;
  onNext?: () => void;
}

type State = "idle" | "correct" | "wrong";

export default function QuizCard({ question, onCorrect, onWrong, onNext }: Props) {
  const [selected, setSelected] = useState<string | null>(null);
  const [state, setState] = useState<State>("idle");

  function handleSelect(id: string) {
    if (state !== "idle") return;
    setSelected(id);
    if (id === question.correctId) {
      setState("correct");
      onCorrect?.();
    } else {
      setState("wrong");
      onWrong?.();
    }
  }

  function handleNext() {
    setSelected(null);
    setState("idle");
    onNext?.();
  }

  return (
    <div className={`${styles.card} ${state === "correct" ? styles.correct : ""} ${state === "wrong" ? styles.wrong : ""}`}>
      <div className={styles.question}>
        <h3 className={styles.questionText}>{question.question}</h3>
      </div>

      <div className={styles.options}>
        {question.options.map((opt) => {
          const isSelected = selected === opt.id;
          const isCorrect  = state !== "idle" && opt.id === question.correctId;
          return (
            <button
              key={opt.id}
              className={`${styles.option}
                ${isSelected && state === "correct" ? styles.optCorrect : ""}
                ${isSelected && state === "wrong"   ? styles.optWrong   : ""}
                ${isCorrect  && state === "wrong"   ? styles.optReveal  : ""}
                ${state !== "idle" ? styles.optDisabled : ""}
              `}
              onClick={() => handleSelect(opt.id)}
              disabled={state !== "idle"}
              aria-label={`選項 ${opt.id}: ${opt.text}`}
            >
              <span className={styles.optLabel}>{opt.id}</span>
              <span className={styles.optText}>{opt.text}</span>
              {isCorrect && (
                <span className={styles.checkmark} aria-hidden>✓</span>
              )}
            </button>
          );
        })}
      </div>

      {/* Feedback */}
      {state !== "idle" && (
        <div className={`${styles.feedback} ${styles[`feedback_${state}`]}`}>
          <div className={styles.feedbackMascots}>
            {state === "correct" ? (
              <>
                <OwlDoctor mood="proud" size={72} />
                <Flasky mood="smile" size={60} />
              </>
            ) : (
              <>
                <OwlDoctor mood="thinking" size={72} />
                <Flasky mood="oops" size={60} />
              </>
            )}
          </div>
          <div className={styles.feedbackText}>
            <p className={styles.feedbackHeadline}>
              {state === "correct" ? "答對了！太棒了！" : "再想想看！"}
            </p>
            <p className={styles.explanation}>{question.explanation}</p>
            {state === "wrong" && question.hint && (
              <p className={styles.hint}>
                <span aria-hidden>💡</span> 提示：{question.hint}
              </p>
            )}
          </div>
        </div>
      )}

      {/* Confetti particles on correct */}
      {state === "correct" && <CorrectParticles />}

      {state !== "idle" && onNext && (
        <div className={styles.nextRow}>
          <Button onClick={handleNext} variant={state === "correct" ? "secondary" : "ghost"}>
            {state === "correct" ? "繼續下一題 →" : "看下一題 →"}
          </Button>
        </div>
      )}
    </div>
  );
}

function CorrectParticles() {
  const emojis = ["⭐", "🎉", "✨", "💚", "🌟", "💙", "🎊", "⚗️"];
  return (
    <div className={styles.particles} aria-hidden>
      {Array.from({ length: 8 }).map((_, i) => (
        <span
          key={i}
          className={styles.particle}
          style={{
            left: `${10 + i * 11}%`,
            animationDelay: `${i * 80}ms`,
            fontSize: `${14 + Math.random() * 10}px`,
          }}
        >
          {emojis[i % emojis.length]}
        </span>
      ))}
    </div>
  );
}
