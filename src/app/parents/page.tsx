"use client";

import React, { useState } from "react";
import OwlDoctor from "@/components/mascots/OwlDoctor";
import Card from "@/components/ui/Card";
import styles from "./page.module.css";

export default function ParentsPage() {
  return (
    <div className={`section ${styles.page}`}>
      <div className="container">
        <div className={styles.pageHeader}>
          <OwlDoctor mood="smile" size={96} />
          <div>
            <h1>家長 / 教師專區</h1>
            <p className={styles.pageSubtitle}>
              幫助孩子在安全的環境中學習化學知識，家長與老師是最重要的守護者。
            </p>
          </div>
        </div>

        <SituationCards />
        <SafetyChecklist />
        <QASection />
        <EmergencyContacts />
      </div>
    </div>
  );
}

const SITUATIONS = [
  {
    icon: "🏠",
    title: "居家安全",
    color: "blue" as const,
    items: [
      "清潔劑、漂白水存放在孩子拿不到的鎖住櫃子",
      "農藥、殺蟲劑放在通風且上鎖的戶外空間",
      "電池、行動電源避免高溫環境，鼓脹即丟棄",
      "清潔劑保留原始容器，不裝入飲料瓶",
    ],
  },
  {
    icon: "🍽️",
    title: "食品安全",
    color: "green" as const,
    items: [
      "教孩子閱讀食品標示，認識成分列表",
      "乾燥劑、脫氧劑告知孩子勿食，遠離水",
      "過期食品確認後再決定是否丟棄",
      "不讓孩子自行使用微波爐加熱密封袋裝食品",
    ],
  },
  {
    icon: "🚶",
    title: "外出安全",
    color: "coral" as const,
    items: [
      "教孩子認識 GHS 危險標示，看到菱形標誌要小心",
      "路上發現不明液體或異味，立即遠離並告知大人",
      "加油站、化工廠附近禁止玩火或吸菸",
      "參觀實驗室時遵守安全規則，不隨意觸碰設備",
    ],
  },
  {
    icon: "🆘",
    title: "緊急處置",
    color: "cyan" as const,
    items: [
      "誤食化學品：立刻撥 119 或 1922，保留容器讓醫生查看",
      "皮膚接觸：大量清水沖洗 15-20 分鐘，再就醫",
      "眼睛接觸：立刻用清水沖洗，切勿揉眼，立即就醫",
      "吸入有毒氣體：移到通風處，撥 119",
    ],
  },
];

function SituationCards() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>家長叮嚀：4 大安全情境</h2>
      <div className={styles.situationGrid}>
        {SITUATIONS.map((sit, i) => (
          <Card key={sit.title} className={styles.situationCard} style={{ animationDelay: `${i * 80}ms` }}>
            <div className={`${styles.situationHeader} ${styles[`color_${sit.color}`]}`}>
              <span className={styles.sitIcon}>{sit.icon}</span>
              <h3 className={styles.sitTitle}>{sit.title}</h3>
            </div>
            <ul className={styles.sitList}>
              {sit.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
}

const CHECKLIST_ITEMS = [
  "清潔劑和漂白水存放在孩子無法拿到的地方",
  "家用化學品保存在原廠容器，標示清楚",
  "廚房和浴室清潔劑分開存放，不混合使用",
  "過期或未知來源的化學品已安全棄置",
  "行動電源和電池存放在陰涼通風處",
  "農藥、殺蟲劑上鎖保管或移至室外",
  "孩子知道看到 GHS 標誌要告知大人",
  "家中備有緊急聯絡電話（119、1922、0800-006985）",
  "孩子知道誤食化學品立刻告知大人，不催吐",
  "衣櫃已改用薰衣草香包替代合成樟腦丸",
];

function SafetyChecklist() {
  const [checked, setChecked] = useState<boolean[]>(Array(CHECKLIST_ITEMS.length).fill(false));

  function toggle(i: number) {
    setChecked(prev => {
      const next = [...prev];
      next[i] = !next[i];
      return next;
    });
  }

  const doneCount = checked.filter(Boolean).length;

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>家用化學品安全自我檢查清單</h2>
      <div className={styles.checklistCard}>
        <div className={styles.checklistProgress}>
          <span className={styles.checklistScore}>{doneCount} / {CHECKLIST_ITEMS.length}</span>
          <span className={styles.checklistLabel}>項已完成</span>
          {doneCount === CHECKLIST_ITEMS.length && (
            <span className={styles.checklistBadge}>✓ 全部完成！你是安全達人！</span>
          )}
        </div>
        <ul className={styles.checklistItems}>
          {CHECKLIST_ITEMS.map((item, i) => (
            <li key={i} className={`${styles.checklistItem} ${checked[i] ? styles.checklistChecked : ""}`}>
              <button className={styles.checkboxBtn} onClick={() => toggle(i)} aria-pressed={checked[i]}>
                <span className={styles.checkbox}>{checked[i] ? "✓" : ""}</span>
              </button>
              <span className={styles.checklistText}>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const QA_ITEMS = [
  {
    q: "孩子不小心喝到清潔劑怎麼辦？",
    a: "立刻撥打 1922（食藥署）或 119！保留清潔劑容器讓醫療人員確認成分。千萬不要催吐——酸鹼性清潔劑在嘔吐過程中會造成食道二次灼傷。讓孩子少量喝水（不超過 120 mL）稀釋，然後立刻就醫。",
  },
  {
    q: "合成樟腦丸（萘/對二氯苯）對孩子有害嗎？",
    a: "萘被列為可能致癌物，對二氯苯長期接觸可能損害肝腎。嬰幼兒和貓咪對這類物質特別敏感。建議改用薰衣草香包、雪松香包，或真空收納袋，既安全又有效。",
  },
  {
    q: "怎麼教孩子正確使用清潔劑？",
    a: "先從「不混合」原則開始教：漂白水＋廁所清潔劑會產生氯氣！教孩子使用前看標示、使用時保持通風、使用後洗手。7 歲以下孩子建議在大人陪同下才接觸清潔劑。",
  },
  {
    q: "行動電源鼓脹了怎麼辦？",
    a: "鼓脹代表電池內部氣體積聚，是熱失控的早期警告！立刻停止使用和充電，放在通風、遠離可燃物的地方，不要刺穿或擠壓，盡快送到手機店或廢電池回收點處理。不要丟入一般垃圾或焚化。",
  },
  {
    q: "微塑膠真的在我們食物裡嗎？",
    a: "是的，根據研究，微塑膠已在飲用水、海鮮、蜂蜜，甚至人體血液中被發現。目前對健康的長期影響仍在研究中，但可以採取預防措施：使用不鏽鋼或玻璃容器、減少外食塑膠包裝、避免用塑膠容器微波食物。",
  },
];

function QASection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>家長常見問題 Q&A</h2>
      <div className={styles.qaList}>
        {QA_ITEMS.map((item, i) => (
          <div key={i} className={`${styles.qaItem} ${openIdx === i ? styles.qaOpen : ""}`}>
            <button
              className={styles.qaQuestion}
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
              aria-expanded={openIdx === i}
            >
              <span className={styles.qaNum}>Q{i + 1}</span>
              <span className={styles.qaText}>{item.q}</span>
              <span className={styles.qaArrow}>{openIdx === i ? "▲" : "▼"}</span>
            </button>
            {openIdx === i && (
              <div className={styles.qaAnswer}>
                <p>{item.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function EmergencyContacts() {
  const contacts = [
    { number: "119", label: "消防署急救", desc: "火災、爆炸、急救送醫", bg: "#FFE8EA", color: "var(--danger)" },
    { number: "1922", label: "食藥署消費者專線", desc: "食品、藥物、化學品誤食", bg: "#FFF3CD", color: "#B45309" },
    { number: "0800-006985", label: "毒藥物防治諮詢", desc: "毒藥物中毒緊急諮詢（24小時）", bg: "#E8F5E9", color: "#2E7D32" },
  ];

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>緊急聯絡資訊</h2>
      <div className={styles.emergencyGrid}>
        {contacts.map(c => (
          <div
            key={c.number}
            className={styles.emergencyCard}
            style={{ background: c.bg, borderColor: c.color } as React.CSSProperties}
          >
            <p className={styles.emergencyNumber} style={{ color: c.color }}>{c.number}</p>
            <p className={styles.emergencyLabel}>{c.label}</p>
            <p className={styles.emergencyDesc}>{c.desc}</p>
          </div>
        ))}
      </div>
      <p className={styles.emergencyNote}>
        ※ 如發生化學品意外，請保持冷靜，優先確保自身安全，再撥打緊急電話並告知化學品名稱或帶走容器。
      </p>
    </section>
  );
}
